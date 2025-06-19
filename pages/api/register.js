export default async function handler(req, res) {
  const data = JSON.parse(req.body);

  // ✨ استبدل الرابط هنا برابط Web App اللي طلع لك من Google Apps Script
  const webhookURL = 'https://script.google.com/macros/s/AKfycbxfWztFOJiDKrlLpxsjOv-9wCleMQI82HZGkzoIlhTEa9wFPaQmLHSAtIetkDGURKKApQ/exec';

  try {
    const response = await fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    res.status(200).json({ success: true, result });
  } catch (error) {
    console.error('Error sending data to Google Sheet:', error);
    res.status(500).json({ success: false, error: error.message });
  }
}
