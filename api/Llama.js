
module.exports = {
  run: async function ({ port, app, OpenAI, bodyParser, express,axios }) {


app.get('/api/llama', async (req, res) => {
  try {
    const prompt = req.query.p;
    let image = req.query.img || null;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt parameter is required.' });
    }
    if (image == null) {
      image = null
    }
    var options = {
      method: 'POST',
      url: 'https://www.chatllama.com/api/chat/groq',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
        Cookie: 'sb-cgneayqlgglpdbwafedb-auth-token-code-verifier=%220a06bd903a1798c4cca3b2404b1a70d500a257565a80cdbd8d84d6638127fd888cb04f404b56915df32566391925d0a099513c8818795bb0%22; sb-cgneayqlgglpdbwafedb-auth-token=%7B%22access_token%22%3A%22eyJhbGciOiJIUzI1NiIsImtpZCI6Ilk4MWxXd0RsZGd4djVldGgiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzE3NTE0ODgyLCJpYXQiOjE3MTc1MTEyODIsImlzcyI6Imh0dHBzOi8vY2duZWF5cWxnZ2xwZGJ3YWZlZGIuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6ImE2MWYyMDFlLWIxYTEtNDU4Zi05MGMyLTYxOWZmNzBiOGIxYyIsImVtYWlsIjoiYWRvbmlzanJzYW5qdWFuQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnsiZW1haWwiOiJhZG9uaXNqcnNhbmp1YW5AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwaG9uZV92ZXJpZmllZCI6ZmFsc2UsInN1YiI6ImE2MWYyMDFlLWIxYTEtNDU4Zi05MGMyLTYxOWZmNzBiOGIxYyJ9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6InBhc3N3b3JkIiwidGltZXN0YW1wIjoxNzE3NTExMjgyfV0sInNlc3Npb25faWQiOiI0YTQ0MGQ0ZS0xZjEyLTQ0YjQtYTFhZS0yZmUxYmM1M2Q0MzgiLCJpc19hbm9ueW1vdXMiOmZhbHNlfQ.gzZ83X3050-n0XMkdLEwJ8O9PWDZ0DOgbJ477H_Ymjc%22%2C%22token_type%22%3A%22bearer%22%2C%22expires_in%22%3A3600%2C%22expires_at%22%3A1717514882%2C%22refresh_token%22%3A%22IVm9Oycxuvcxc3BN6T2kDw%22%2C%22user%22%3A%7B%22id%22%3A%22a61f201e-b1a1-458f-90c2-619ff70b8b1c%22%2C%22aud%22%3A%22authenticated%22%2C%22role%22%3A%22authenticated%22%2C%22email%22%3A%22adonisjrsanjuan%40gmail.com%22%2C%22email_confirmed_at%22%3A%222024-06-04T14%3A28%3A02.877146485Z%22%2C%22phone%22%3A%22%22%2C%22last_sign_in_at%22%3A%222024-06-04T14%3A28%3A02.88919136Z%22%2C%22app_metadata%22%3A%7B%22provider%22%3A%22email%22%2C%22providers%22%3A%5B%22email%22%5D%7D%2C%22user_metadata%22%3A%7B%22email%22%3A%22adonisjrsanjuan%40gmail.com%22%2C%22email_verified%22%3Afalse%2C%22phone_verified%22%3Afalse%2C%22sub%22%3A%22a61f201e-b1a1-458f-90c2-619ff70b8b1c%22%7D%2C%22identities%22%3A%5B%7B%22identity_id%22%3A%22af39dc7b-b568-484f-a5aa-58741cb64ce2%22%2C%22id%22%3A%22a61f201e-b1a1-458f-90c2-619ff70b8b1c%22%2C%22user_id%22%3A%22a61f201e-b1a1-458f-90c2-619ff70b8b1c%22%2C%22identity_data%22%3A%7B%22email%22%3A%22adonisjrsanjuan%40gmail.com%22%2C%22email_verified%22%3Afalse%2C%22phone_verified%22%3Afalse%2C%22sub%22%3A%22a61f201e-b1a1-458f-90c2-619ff70b8b1c%22%7D%2C%22provider%22%3A%22email%22%2C%22last_sign_in_at%22%3A%222024-06-04T14%3A28%3A02.869145493Z%22%2C%22created_at%22%3A%222024-06-04T14%3A28%3A02.869196Z%22%2C%22updated_at%22%3A%222024-06-04T14%3A28%3A02.869196Z%22%2C%22email%22%3A%22adonisjrsanjuan%40gmail.com%22%7D%5D%2C%22created_at%22%3A%222024-06-04T14%3A28%3A02.815066Z%22%2C%22updated_at%22%3A%222024-06-04T14%3A28%3A02.903486Z%22%2C%22is_anonymous%22%3Afalse%7D%7D'
      },
      data: {
        chatSettings: {
          model: 'llama3-70b-8192',
          prompt: 'You are a friendly, helpful AI assistant.',
          temperature: 0.5,
          contextLength: 4096,
          includeProfileContext: true,
          includeWorkspaceInstructions: true,
          embeddingsProvider: 'openai'
        },
        messages: [
          {
            role: 'system',
            content: 'Today is 6/4/2024.\n\nUser Instructions:\nYou are a friendly, helpful AI assistant.'
          },
          {role: 'user', content:prompt}
        ],
        customModelId: ''
      }
    };

    axios.request(options).then(function (response) {
      const data = response.data;
      res.json({content:data});
    }).catch(function (error) {
      console.error(error);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

    
  },
};
