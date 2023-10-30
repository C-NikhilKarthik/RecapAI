const { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;

const { GoogleAuth } = require("google-auth-library");
const transcript = require("../utilities/transcript");


const MODEL_NAME = "models/text-bison-001";
const API_KEY = "AIzaSyCSLD_VAewOZNQytOh4hV_FmO8sr0rPR0A";

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

const anyPrompt = async (req, res) => {
    try {
        const transcribedText = await transcript(req.body.videoURL);
        const prom = req.body.prom;
        const result = await client.generateText({
        model: MODEL_NAME,
        prompt: {
          text: transcribedText + prom,
        },
      });
      res.status(200).json(result[0].candidates[0].output);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const summarize = async (req, res) => {
    try {
        const transcribedText = await transcript(req.body.videoURL);
        const result = await client.generateText({
        model: MODEL_NAME,
        prompt: {
          text: transcribedText + "Summarize the above text into 10 points.",
        },
      });
      res.status(200).json(result[0].candidates[0].output);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const quiz = async (req, res) => {
    try {
        const transcribedText = await transcript(req.body.videoURL);
        const result = await client.generateText({
        model: MODEL_NAME,
        prompt: {
          text: transcribedText + "Create a 5 question MCQ quiz for me from the above text.",
        },
      });
      res.status(200).json(result[0].candidates[0].output);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = { anyPrompt, summarize, quiz};