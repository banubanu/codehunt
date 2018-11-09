from flask import Flask, jsonify
from flask_cors import CORS
from flask import request
import subprocess
import json
import os

app = Flask(__name__)
CORS(app)


@app.route('/hello', methods=['POST'])
def hello_world():
    print(request.json['codearea'])
    f = open("C:/Users/banu.b/Desktop/HackerRank/Python/Newfile.java", mode="w")
    f.write(request.json['codearea'])
    f.close()
    res = compile_java("Newfile.java")
    res = res.decode('ascii')
    res1 = {}
    if res != '':
        res1['Error'] = str(res)
    else:
        res = execute_java("Newfile")
        print(res['Output'])
        print(res['Error'])
        res1 = res
        print(res1)

        os.remove("Newfile.class")

    return json.dumps(res1)


def compile_java(java_file):
    cmd = r'"C:\Program Files\Java\jdk1.8.0_45\bin\javac.exe" ' + java_file
    proc = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    out, err = proc.communicate()
    print("fff", out)
    print("Err", err)
    return err


def execute_java(java_file):
    cmd = r'"C:\Program Files\Java\jdk1.8.0_45\bin\java.exe" ' + java_file
    proc = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    out, err = proc.communicate()
    result = {}
    result['Output'] = out.decode('ascii')
    result['Error'] = err.decode('ascii')
    return result


if __name__ == '__main__':
    app.run(debug=True, port=8089)
