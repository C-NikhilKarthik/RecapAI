const OpenAI = require('openai');
const openai = new OpenAI({
    apiKey: "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"
});

async function main() {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: 'Why is the sky bluw' }],
      model: 'gpt-3.5-turbo',
    });
  
    console.log(chatCompletion.choices[0].message.content);
  }
  
  main();