from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/experience")
def experience():
    return render_template("experience.html")

@app.route("/projects")
def projects():
    return render_template("projects.html")

@app.route("/misc")
def misc():
    return render_template("misc.html")

@app.route("/connect")
def connect():
    return render_template("connect.html")

if __name__ == "__main__":
    app.run(debug=True)
