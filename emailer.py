# Email Automation
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# set user and pass
email_addr = "my_email@my_domain.com"
email_pass = "xvxvxvxvxvx"
# set recipient
recipient = "testin@yahoo.com"
# set subject and body
mail = MIMEMultipart()
mail['From'] = email_addr
mail['To'] = recipient
mail['Subject'] = "Py Email"
body = "Hi this is a Python Email Bot"
mail.attach(MIMEText(body, 'plain'))
# send email
with smtplib.SMTP('smtp.smtp_source.com', 587) as smtp:
    smtp.starttls()
    smtp.login(email_addr, email_pass)
    text = mail.as_string()
    smtp.sendmail(email_addr, recipient, text)
    smtp.quit()
print("Email Sent")