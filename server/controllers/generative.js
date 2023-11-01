const transcript = require("../utilities/transcript");
const axios = require('axios');
const COHERE_API_TOKEN = "p57Ii2VsCWRzihocNtIl2yAiUQvO22euvjbaXECM";

const OpenAI = require('openai');
const openai = new OpenAI({
  apiKey: "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"
});

const anyPrompt = async (req, res) => {
  try {
    const transcribedText = await transcript(req.body.videoURL);
    const prom = req.body.prom;
    
    const cohereResponse = await axios.post('https://api.cohere.ai/v1/generate', {
      truncate: 'END',
      return_likelihoods: 'NONE',
      prompt: transcribedText +"Based on the above text, answer the following prompt: " +prom // Modify prompt here based on the use case
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
}

const summarize = async (req, res) => {
    try {
        const transcribedText = await transcript(req.body.videoURL);
    const cohereResponse = await axios.post('https://api.cohere.ai/v1/generate', {
      truncate: 'END',
      return_likelihoods: 'NONE',
      prompt: transcribedText + "Summarize the above text into 10 points."
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
}

const quiz = async (req, res) => {
    try {
      const transcribedText = await transcript(req.body.videoURL);
    const cohereResponse = await axios.post('https://api.cohere.ai/v1/generate', {
      truncate: 'END',
      return_likelihoods: 'NONE',
      prompt: transcribedText + "Create a 5 question MCQ quiz for me from the above text."
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
}


module.exports = { anyPrompt, summarize, quiz};