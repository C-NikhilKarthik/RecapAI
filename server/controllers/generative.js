const transcript = require("../utilities/transcript");
const OpenAI = require('openai');
const openai = new OpenAI({
  apiKey: "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"
});

const anyPrompt = async (req, res) => {
  try {
    const transcribedText = await transcript(req.body.videoURL);
    const prom = req.body.prom;

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: transcribedText +"Based on the above text, answer the following prompt: " +prom }],
      model: 'gpt-3.5-turbo',
    });
    

    res.status(200).json({
      openaiAPIResult: chatCompletion.choices[0].message.content
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const summarize = async (req, res) => {
    try {
        const transcribedText = await transcript(req.body.videoURL);
        const chatCompletion = await openai.chat.completions.create({
          messages: [{ role: 'user', content: "Summarize the following text into 10 points: " + transcribedText}],
          model: 'gpt-3.5-turbo',
        });
      
        res.status(200).json({
          openaiAPIResult: chatCompletion.choices[0].message.content
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const quiz = async (req, res) => {
    try {
      const transcribedText = await transcript(req.body.videoURL);
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: transcribedText +"Based on the above text, create a 5 question MCQ quiz "}],
        model: 'gpt-3.5-turbo',
      });  
      res.status(200).json({
        openaiAPIResult: chatCompletion.choices[0].message.content
      });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = { anyPrompt, summarize, quiz};