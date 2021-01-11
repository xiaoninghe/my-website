from http.server import BaseHTTPRequestHandler
from tf.keras import models
from urllib.parse import urlparse
class handler(BaseHTTPRequestHandler):

    model = models.load_model('data/models/mnist_model')

    @classmethod
    def predict_digit(cls, X):
        y = cls.model.predict(X)
        return y

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type','text/plain')
        self.end_headers()
        query = urlparse(self.path).query
        self.wfile.write("Hello World!")
        self.wfile.write(query)
        return