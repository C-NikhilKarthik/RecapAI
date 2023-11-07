# Recap AI
## Project Description
Recap AI is built on Generative AI technology, designed to deliver transcripts for YouTube videos while seamlessly integrating a real-time chatbot. This innovative tool allow users to ask any questions related to the content of the video, enabling a dynamic and interactive viewing experience.  Additionally, the chatbot can generate quiz questions and provide concise summaries of the video, enhancing the overall viewing experience. Whether you're a student looking for a quick recap of a lecture or a curious learner seeking deeper insights, Recap AI simplifies and enhances the way we engage with video content on YouTube.

The project is deployed on: ```https://devpostxdocker.netlify.app/```

For this project, we use three main technologies: ReactJS, Python, and Docker. ReactJS helps create the user interface you interact with, Python handles the 'brain' of the project, and Docker ensures everything works smoothly when we make the project live.

## Contibuting
We welcome contributions to make this project even better! If you'd like to contribute, follow these steps:
1. **Fork the repository** : Click the "Fork" button on the top right of this page. This will create a copy of the project in your GitHub account.
2. **Clone to your local pc** : Open your terminal and run the following command to download the forked repository to your local machine
   ``` git clone https://github.com/your-username/RecapAI.git ```
3. Create a new branch :
   ``` git checkout -b branch-name ```
4. Make your changes
5. Commit and push the changes in the new branch
   ```
   git add .
   git commit -m "commit name"
   git push origin branch-name
   ```
6. Create a new pull request from your forked repository (Click the ```New Pull Request``` button located at the top of your repo)
7. Wait for your PR review and merge approval!
8. Star this repository if you had fun!

## Run the Project
After cloning the repository, open and split the terminal
1. run the commands in the 1st terminal for frontend
  ```
  cd client
  npm i
  npm run dev
  ```
2. run the commands in the 2nd terminal for backend
  ```
  cd backend
  pip install -r requirements.txt
  python app.py
  ```
  
