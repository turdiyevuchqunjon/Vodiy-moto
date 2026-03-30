import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    // AmoCRM yuborgan ma'lumotlarni obyektga o'tkazamiz
    const data: any = {};
    formData.forEach((value, key) => { data[key] = value });

    // 1. Bitim (Lead) ma'lumotlarini ajratib olamiz
    // AmoCRM odatda leads[status][0][id] ko'rinishida yuboradi
    const leadId = formData.get('leads[status][0][id]');
    const price = formData.get('leads[status][0][price]') || 0;
    
    // 2. Foydalanuvchi ma'lumotlarini olish (telefon raqami muhim!)
    // Webhook sozlamasiga qarab buni AmoCRM API orqali qayta tekshirish kerak bo'lishi mumkin
    // Hozircha namunaviy Purchase signali:
    
    const pixelId = process.env.META_PIXEL_ID;
    const accessToken = process.env.META_ACCESS_TOKEN;

    const metaData = {
      data: [{
        event_name: 'Purchase',
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'system_generated',
        user_data: {
          // Bu yerda foydalanuvchi telefonini yuborish algoritm uchun JUDA MUHIM
          // ph: [crypto.createHash('sha256').update(phone).digest('hex')],
        },
        custom_data: {
          value: Number(price),
          currency: 'USD',
        },
      }],
    };

    // Meta Conversions API (CAPI) ga yuborish
    await fetch(`https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(metaData),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Webhook Error:', error);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}