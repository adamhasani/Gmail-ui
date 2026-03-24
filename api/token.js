export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const { code, refresh_token } = req.body;
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;

  // DETEKSI 1: Vercel lupa nyimpen rahasia?
  if (!clientId || !clientSecret) {
    return res.status(400).json({ 
      error: 'CLIENT_ID atau CLIENT_SECRET kosong di Vercel! Cek Environment Variables lu dan wajib Redeploy.' 
    });
  }

  let bodyData = {};
  
  if (code) {
    bodyData = {
      client_id: clientId,
      client_secret: clientSecret,
      code: code,
      grant_type: 'authorization_code',
      redirect_uri: 'postmessage' 
    };
  } else if (refresh_token) {
    bodyData = {
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refresh_token,
      grant_type: 'refresh_token'
    };
  } else {
    return res.status(400).json({ error: 'Butuh code atau refresh_token woy' });
  }

  try {
    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(bodyData)
    });
    
    const data = await tokenRes.json();
    
    // DETEKSI 2: Google nolak ngasih token? Kita bongkar alasannya!
    if (!tokenRes.ok) {
      return res.status(400).json({ 
        error: `Ditolak Google: ${data.error_description || data.error}` 
      });
    }

    // Kalau sukses, balikin datanya
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Server Vercel Error: ' + error.message });
  }
}
