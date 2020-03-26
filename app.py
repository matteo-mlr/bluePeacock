from flask import Flask, render_template

app = Flask(__name__)

# Set your panel link here!
iframe = "http://localhost:3000/d-solo/f4Uuy_YWz/nilan-combi-s-302-extended-temperatures?orgId=1&panelId=2&from=1585157729577&to=1585244129577"


@app.route("/")
def index():
    return render_template("index.html", iframe=iframe)


if __name__ == "__main__":
    app.run()
