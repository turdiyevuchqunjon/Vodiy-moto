import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  phone?: string;
  category?: string;
  message?: string;
  source?: string;
};

function escapeTelegram(text: string) {
  return text.replace(/[&<>]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[char] || char));
}

async function sendTelegramLead(payload: Required<LeadPayload>) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) return;

  const text = [
    "<b>Yangi lead — VodiyMoto</b>",
    `👤 Ism: ${escapeTelegram(payload.name)}`,
    `📞 Telefon: ${escapeTelegram(payload.phone)}`,
    `🏍️ Kategoriya: ${escapeTelegram(payload.category)}`,
    `🌐 Source: ${escapeTelegram(payload.source)}`,
    `📝 Izoh: ${escapeTelegram(payload.message || "Kiritilmagan")}`,
  ].join("\n");

  await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
    }),
  });
}

async function getAmoAccessToken() {
  const clientId = process.env.AMOCRM_CLIENT_ID;
  const clientSecret = process.env.AMOCRM_CLIENT_SECRET;
  const redirectUri = process.env.AMOCRM_REDIRECT_URI;
  const refreshToken = process.env.AMOCRM_REFRESH_TOKEN;
  const subdomain = process.env.AMOCRM_SUBDOMAIN;

  if (!clientId || !clientSecret || !redirectUri || !refreshToken || !subdomain) {
    return null;
  }

  const response = await fetch(`https://${subdomain}.amocrm.ru/oauth2/access_token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      redirect_uri: redirectUri,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`amoCRM auth error: ${errorText}`);
  }

  const data = (await response.json()) as { access_token: string };
  return data.access_token;
}

async function sendAmoLead(payload: Required<LeadPayload>) {
  const accessToken = await getAmoAccessToken();
  const subdomain = process.env.AMOCRM_SUBDOMAIN;

  if (!accessToken || !subdomain) return;

  const pipelineId = Number(process.env.AMOCRM_PIPELINE_ID || 0) || undefined;
  const statusId = Number(process.env.AMOCRM_STATUS_ID || 0) || undefined;

  const response = await fetch(`https://${subdomain}.amocrm.ru/api/v4/leads/complex`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify([
      {
        name: `${payload.name} — ${payload.category}`,
        pipeline_id: pipelineId,
        status_id: statusId,
        custom_fields_values: [
          {
            field_name: "Kategoriya",
            values: [{ value: payload.category }],
          },
          {
            field_name: "Source",
            values: [{ value: payload.source }],
          },
          {
            field_name: "Izoh",
            values: [{ value: payload.message || "Kiritilmagan" }],
          },
        ],
        _embedded: {
          contacts: [
            {
              first_name: payload.name,
              custom_fields_values: [
                {
                  field_code: "PHONE",
                  values: [{ value: payload.phone, enum_code: "WORK" }],
                },
              ],
            },
          ],
        },
      },
    ]),
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`amoCRM lead error: ${errorText}`);
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;

    const payload = {
      name: body.name?.trim(),
      phone: body.phone?.trim(),
      category: body.category?.trim() || "Umumiy",
      message: body.message?.trim() || "",
      source: body.source?.trim() || "website",
    };

    if (!payload.name || !payload.phone) {
      return NextResponse.json({ ok: false, message: "Ism va telefon majburiy" }, { status: 400 });
    }

    const normalizedPayload: Required<LeadPayload> = {
      name: payload.name,
      phone: payload.phone,
      category: payload.category,
      message: payload.message,
      source: payload.source,
    };

    await Promise.allSettled([sendTelegramLead(normalizedPayload), sendAmoLead(normalizedPayload)]);

    return NextResponse.json({ ok: true, message: "Lead qabul qilindi" });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Xatolik yuz berdi";
    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}
