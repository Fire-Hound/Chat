from flask import Flask, request, make_response, Request
from flask_restful import Resource, Api, reqparse
import json
app = Flask(__name__)
api = Api(app)

texts = [{"user":"vikram","text":"First Todo"},
        {"user":"","text":"Second Todo"},
        {"user":"vikram","text":"Third Todo"}]

def getTexts(uid, texts):
    return texts[uid:]
def getLastUid(texts):
    return len(texts) - 1
class StillVariables(Resource):
    def get(self, uid):
        if(uid>getLastUid(texts)):
            res = api.make_response([0], 200)
            res.headers.extend({'Access-Control-Allow-Origin': '*'})
        elif(uid==getLastUid(texts)):
            res = api.make_response([texts[-1]], 200)
            res.headers.extend({'Access-Control-Allow-Origin': '*'})
        else:
            Texts = getTexts(uid, texts)
            res = api.make_response(Texts, 200)
            res.headers.extend({'Access-Control-Allow-Origin': '*'})
        return res

    def post(self):
        text = request.get_json(force=True)
        texts.append(text)
        return texts[-1]

api.add_resource(StillVariables, '/<int:uid>', '/')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)