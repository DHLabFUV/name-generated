from flask import Flask, request, jsonify
import find_name

'''
This is the API for the website 
'''

filename = 'final.csv' #csv data file

#initialize app 
app = Flask(__name__)

#get name_data
@app.route("/<fullname>", methods = ['GET'])
def get_name(fullname):
    name_data = find_name.find_meaning(filename, fullname)
    
    return jsonify(name_data), 200 

if __name__ == "__main__":
    app.run(debug = True)