from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

# Serwowanie manifestu i service workera
@app.route("/manifest.json")
def manifest():
    return send_from_directory('.', 'manifest.json')

@app.route("/service-worker.js")
def service_worker():
    return send_from_directory('.', 'service-worker.js')

if __name__ == "__main__":
    app.run(debug=True)