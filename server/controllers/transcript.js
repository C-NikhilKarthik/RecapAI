const transcript = require("../utilities/transcript");
const axios = require('axios');
const COHERE_API_TOKEN = "p57Ii2VsCWRzihocNtIl2yAiUQvO22euvjbaXECM";
const getTranscript = async (req, res) => {
    try {
        const { videoURL } = req.body;
        const toTranscript = await transcript(videoURL);
        const cohereResponse = await axios.post('https://api.cohere.ai/v1/generate', {
      truncate: 'END',
      return_likelihoods: 'NONE',
      prompt: "Give me the following with correct punctuations and split it into multiple paragraphs for better readability: " + toTranscript // Modify prompt here based on the use case
    }, {
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: `Bearer ${COHERE_API_TOKEN}`
      }
    });

    res.status(200).json({
      cohereAPIResult: cohereResponse.data.generations[0].text
    });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
module.exports = { getTranscript };