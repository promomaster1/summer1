export default async function handler(req, res) {
  try {
    const data = JSON.parse(req.body);
    console.log("📥 بيانات مستلمة:", data);

    const webhookURL = 'https://script.google.com/macros/s/AKfycbxfWztFOJiDKrlLpxsjOv-9wCleMQI82HZGkzoIlhTEa9wFPaQmLHSAtIetkDGURKKApQ/exec'; // <-- استبدله برابطك الحقيقي

    const response = await fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.text(); // حتى لو ما رجع JSON
    console.log("📤 رد السكربت:", result);

    res.status(200).json({ success: true, message: "تم الإرسال" });
  } catch (error) {
    console.error("❌ خطأ أثناء الإرسال:", error);
    res.status(500).json({ success: false, error: error.message });
  }
}
