const { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;

const { GoogleAuth } = require("google-auth-library");
const transcript = require("../utilities/transcript");


const MODEL_NAME = "models/text-bison-001";
const API_KEY = "AIzaSyCSLD_VAewOZNQytOh4hV_FmO8sr0rPR0A";

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

const getTranscript = async (req, res) => {
    try {
        const { videoURL } = req.body;
        const toTranscript = await transcript(videoURL);

        const result = await client.generateText({
            model: MODEL_NAME,
            prompt: {
              text: "Give me the following with correct punctuations and split it into multiple paragraphs." + toTranscript,
            },
          });
          console.log(result);
          res.status(200).json(result[0].candidates[0].output);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
module.exports = { getTranscript };