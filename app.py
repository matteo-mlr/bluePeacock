from flask import Flask, render_template
from src import server_context

app = Flask(__name__)

@app.route("/")
def index():
    app.logger.info("hallo!")

    return render_template("index.html", iframe=server_context.getIframe())


if __name__ == "__main__":
    app.run()
