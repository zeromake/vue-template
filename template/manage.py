from web_app import app


@app.route('/')
def hello_world():
    return app.send_static_file('index.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
