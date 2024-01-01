from flask import Flask, request, jsonify
from flask_cors import CORS

import find_name

'''
This is the API for the website 
'''

filename = 'name_explainer\\api\\final.csv' #csv data file

#initialize app 
app = Flask(__name__)


# app.config.from_object('config')  # Import things from config

CORS(app)

# CORS Headers 
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization,true')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response


#get name_data
@app.route("/<fullname>", methods = ['GET'])
def get_name(fullname):
    name_data = find_name.find_meaning(filename, fullname)
    
    return name_data, 200 

if __name__ == "__main__":
    app.run(debug = True)