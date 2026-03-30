import axios from 'axios';

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    try {
      // AmoCRM yuborgan lidd ma'lumotlari
      const leadData = req.body.leads.status[0];
      
      // Faqat "Sotib oldi" (Status ID) bo'limiga o'tgandagina ishlasin
      if (leadData.status_id == process.env.AMOCRM_STATUS_ID) {
        
        const pixelId = process.env.META_PIXEL_ID;
        const accessToken = process.env.META_ACCESS_TOKEN;
        
        // Lead-ning telefon raqami yoki emailini AmoCRM API orqali olish kerak bo'ladi
        // Hozircha namunaviy Purchase yuborish:
        const metaEvent = {
          data: [
            {
              event_name: 'Purchase',
              event_time: Math.floor(Date.now() / 1000),
              action_source: 'system_generated',
              user_data: {
                // Ma'lumotlarni hash qilish (SHA256) shart emas, Meta o'zi ham qabul qiladi
                // lekin xavfsizlik uchun hashlab yuborish tavsiya etiladi
                ph: [leadData.custom_fields_values?.find((f: any) => f.field_code === 'PHONE')?.values[0].value],
              },
              custom_data: {
                value: leadData.price || 0,
                currency: 'USD',
              },
            },
          ],
        };

        await axios.post(
          `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`,
          metaEvent
        );
      }

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Xatolik:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}