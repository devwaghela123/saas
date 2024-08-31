import smtplib
import random
import string
from flask import Flask, request, redirect

app = Flask(__name__)
tokens = {}

def send_email(to_email, subject, message):
    SMTP_SERVER = "smtp.gmail.com"
    SMTP_PORT = 587
    SMTP_USERNAME = "waghelawealthworks@gmail.com"
    SMTP_PASSWORD = "billionaireby50"

    msg = f"Subject: {subject}\n\n{message}"
    
    server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
    server.starttls()
    server.login(SMTP_USERNAME, SMTP_PASSWORD)
    server.sendmail(SMTP_USERNAME, to_email, msg)
    server.quit()

def generate_token():
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))

@app.route('/send_token', methods=['POST'])
def send_token():
    email = request.form['email']
    token = generate_token()
    tokens[email] = token
    send_email(email, "Your Verification Token", f"Your token is {token}")
    return "Token sent!"

@app.route('/verify_token', methods=['POST'])
def verify_token():
    email = request.form['email']
    token = request.form['token']
    if tokens.get(email) == token:
        return "Email verified!"
    else:
        return "Invalid token!"

if __name__ == '__main__':
    app.run(debug=True)
