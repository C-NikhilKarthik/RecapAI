from flask import Flask
from controllers.main_controller import main_controller
from controllers.transcript_controller import transcript_controller
from controllers.generative_controller import generative_controller
from controllers.timestamp_controller import timestamp_controller
app = Flask(__name__)

app.register_blueprint(main_controller)
app.register_blueprint(transcript_controller)
app.register_blueprint(generative_controller)
app.register_blueprint(timestamp_controller)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
