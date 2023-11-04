const transcript = require("../utilities/transcript");
const OpenAI = require('openai');
const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY
});

const getTranscript = async (req, res) => {
    try {
        const { videoURL } = req.body;
        const toTranscript = await transcript(videoURL);
        const chatCompletion = await openai.chat.completions.create({
          messages: [{ role: 'user', content:"Add proper punctuations to the following piece of text and split it into multiple paragraphs for better readability: " + toTranscript }],
          model: 'gpt-3.5-turbo',
        });
        
    
        res.status(200).json({
          openaiAPIResult: chatCompletion.choices[0].message.content
        });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
module.exports = { getTranscript };