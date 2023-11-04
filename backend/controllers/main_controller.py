from flask import Blueprint, render_template

main_controller = Blueprint("main_controller", __name__)

@main_controller.route("/")
def index():
    return "Hello World!"