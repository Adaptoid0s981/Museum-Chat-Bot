import json
import ast
from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import smtplib
import csv
import os
from datetime import datetime, timedelta
from email.mime.text import MIMEText
from dotenv import load_dotenv
import razorpay
import traceback
from dotenv import load_dotenv
load_dotenv()
from datetime import datetime
import qrcode
import time 
import base64
import hashlib
from typing import Dict
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
from PIL import Image, ImageDraw, ImageFont
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi


app = Flask(__name__)
CORS(app)
load_dotenv()



# Temporary storage for OTPs (use database in production)
otp_storage = {}
CSV_FILE = "user_data.csv"
USER_INFO_FILE = "user_info.json"

# Email configuration (replace with your credentials)
EMAIL_ADDRESS = os.getenv("mail")
print(f"Email address: {EMAIL_ADDRESS}")
EMAIL_PASSWORD = os.getenv("pass")
print(f"Email password: {EMAIL_PASSWORD}")
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587

def validate_name(name):
    if len(name.strip()) < 2:
        return "Name must be at least 2 characters long"
    return None

def validate_phone(phone):
    if not re.match(r'^\d{10}$', phone):
        return "Invalid phone number (must be 10 digits)"
    return None

def validate_email(email):
    if not re.match(r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$', email):
        return "Invalid email address"
    return None

def send_otp_email(receiver_email, otp):
    try:
        msg = MIMEText(f"Your verification OTP is: {otp}")
        msg['Subject'] = f"Your Verification Code {otp}"
        msg['From'] = EMAIL_ADDRESS
        msg['To'] = receiver_email

        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            server.send_message(msg)
        return True
    except Exception as e:
        print(f"Error sending email: {e}")
        return False

def send_cancellation_email(receiver_email, ticket_count):
    try:
        message = f"""
Dear Customer,

We hope this message finds you well.

This is to confirm that your recent ticket cancellation request has been successfully processed. Please find the details below:

• Number of Tickets Cancelled: {ticket_count}  
• Refund Amount: ₹{ticket_count * 100}  
• Refund Timeline: Within 4–5 business days

The refund will be initiated to your original mode of payment. Kindly note that processing times may vary slightly depending on your bank or payment provider.

Should you have any questions or require further assistance, please do not hesitate to reach out to us.

Thank you for choosing the Bharat Museum. We look forward to welcoming you again in the future.

Sincerely,  
The Bharat Museum Team"""


        msg = MIMEText(message)
        msg['Subject'] = "Confirmation of Ticket Cancellation and Refund Details"
        msg['From'] = EMAIL_ADDRESS
        msg['To'] = receiver_email

        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            server.send_message(msg)

        print(f"Cancellation email sent to {receiver_email}")
        return True
    except Exception as e:
        print(f"Failed to send cancellation email: {e}")
        return False


def send_payment_confirmation_email(receiver_email, ticket_count, payment_time=None):
    try:
        if payment_time is None:
            payment_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        # 📩 Email Body
        message = f"""
        Dear Customer,

        Thank you for your payment!

        Your booking is confirmed.

        Details:
        - Number of Tickets: {ticket_count}
        - Payment Time: {payment_time}

        We look forward to seeing you at the event.

        Best Regards,
        Your Event Team
        """

        # 📩 Email Subject and Headers
        msg = MIMEText(message)
        msg['Subject'] = "Booking Confirmation - Your Tickets Are Confirmed!"
        msg['From'] = EMAIL_ADDRESS
        msg['To'] = receiver_email

        # 📩 Sending the Email
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            server.send_message(msg)

        print(f"Confirmation email sent successfully to {receiver_email}")
        return True

    except Exception as e:
        print(f"Error sending confirmation email: {e}")
        return False
    
def save_to_csv(user_data):
    file_exists = os.path.isfile(CSV_FILE)
    with open(CSV_FILE, 'a', newline='') as file:
        writer = csv.writer(file)
        if not file_exists:
            writer.writerow(["Name", "Mobile Number", "Email"])
        writer.writerow([user_data['email'],user_data['phone'], user_data['name']])

def change_csv_data(number_of_tickets ):
    file_exists = os.path.isfile(CSV_FILE)
    if file_exists:
        with open(CSV_FILE, 'r') as file:
            reader = csv.reader(file)
            data = list(reader)
        # Modify the data as needed
        with open(CSV_FILE, 'w', newline='') as file:
            writer = csv.writer(file)
            writer.writerows(data)
        return True
    return False

def get_available_dates():
    now = datetime.now()
    if now.hour >= 16:
        start_date = now + timedelta(days=1)
    else:
        start_date = now
    end_date = start_date + timedelta(days=7)
    return start_date.date(), end_date.date()

def get_current_time():
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")
def get_current_date():
    return datetime.now().strftime("%Y-%m-%d")

def load_user_data():
    if os.path.exists(USER_INFO_FILE):
        with open(USER_INFO_FILE, 'r') as file:
            return json.load(file)
    return {}

def save_user_data(user_data):
    print (f"Saving user data: {user_data}")
    with open(USER_INFO_FILE, 'w') as file:
        json.dump(user_data, file, indent=4)




@app.route('/validate-user-info', methods=['POST'])
def validate_user_info():
    data = request.get_json()
    email = data.get("email", "").strip()
    name = data.get("name", "").strip()
    phone = data.get("phone", "").strip()
    errors = {}

    # --- Step 1: Validate Inputs ---
    def validate_name(name):
        return None if name and len(name) >= 2 else "Name must be at least 2 characters."

    def validate_phone(phone):
        return None if phone.isdigit() and len(phone) == 10 else "Phone must be 10 digits."

    def validate_email(email):
        return None if "@" in email and "." in email else "Invalid email address."

    name_error = validate_name(name)
    phone_error = validate_phone(phone)
    email_error = validate_email(email)

    if name_error: errors["name"] = name_error
    if phone_error: errors["phone"] = phone_error
    if email_error: errors["email"] = email_error

    if errors:
        return jsonify({"status": "error", "errors": errors}), 400

    # --- Step 2: Load User Data ---
    user_data = load_user_data()

    if email in user_data:
        # Existing user
        user_info = user_data[email]
        updated = False

        if user_info.get("name") != name:
            user_info["name"] = name
            updated = True
        if user_info.get("mobile number") != phone:
            user_info["mobile number"] = phone
            updated = True

        if updated:
            save_user_data(user_data)
            message = "User info updated"
        else:
            message = "User already exists"
    else:
        # New user: create entry
        user_data[email] = {
            "name": name,
            "mobile number": phone,
            "date": {}
        }
        save_user_data(user_data)
        message = "New user added"

    # --- Step 3: Generate and Send OTP ---
    otp = str(random.randint(100000, 999999))
    otp_storage[email] = otp

    if send_otp_email(email, otp):
        return jsonify({
            "status": "success",
            "message": f"{message}. OTP sent to email.",
            "user_info": user_data[email]
        })
    else:
        return jsonify({
            "status": "error",
            "message": "Failed to send OTP. Try again later."
        }), 500


@app.route('/verify-otp', methods=['POST'])
def verify_otp():
    data = request.get_json()
    email = data.get('email')
    otp = data.get('otp')

    stored_otp = otp_storage.get(email)

    if not stored_otp:
        return jsonify({"status": "error", "message": "OTP expired or invalid"}), 400

    if stored_otp == otp:
        del otp_storage[email]  # Remove OTP after successful verification

        # Assuming get_available_dates() returns a tuple: (start_date, end_date)
        start_date, end_date = get_available_dates()
        return jsonify({
            "status": "success",
            "message": "OTP verified successfully",
            "available_dates": {
                "start": start_date.isoformat(),
                "end": end_date.isoformat()
            }
        })

    return jsonify({"status": "error", "message": "Invalid OTP"}), 400

@app.route('/book-tickets', methods=['POST'])
def book_tickets():
    data = request.get_json()
    email = data.get('email')
    date = data.get("date")  # Expecting 'YYYY-MM-DD'
    number_of_tickets = data.get("tickets")

    if not email or not date or not number_of_tickets:
        return jsonify({
            "status": "error",
            "message": "Missing required fields."
        }), 400

    # Load user data from the JSON file
    user_data = load_user_data()  # Loads 'user_info.json'

    # Ensure user data exists
    if email not in user_data:
        user_data[email] = {}

    if 'date' not in user_data[email]:
        user_data[email]['date'] = {}

    # Get user's booking data
    user_booking_data = user_data[email]['date']

    # Update or add new booking
    if date in user_booking_data:
        user_booking_data[date] += number_of_tickets
    else:
        user_booking_data[date] = number_of_tickets

    # Save data back
    save_user_data(user_data)

    return jsonify({
        "status": "success",
        "message": f"Successfully saved {number_of_tickets} ticket(s) for {date}."
    })


@app.route('/send-otp', methods=['POST'])
def send_otp():
    data = request.get_json()
    email = data.get("email", "").strip()

    # Basic email format validation
    if not email or "@" not in email or "." not in email:
        return jsonify({"status": "error", "message": "Invalid email address"}), 400

    # Generate and store OTP
    otp = str(random.randint(100000, 999999))
    otp_storage[email] = otp
    print(f"Generated OTP for {email}: {otp}")  # For debugging

    # Send email
    if send_otp_email(email, otp):
        return jsonify({
            "status": "success",
            "message": "OTP sent successfully to your email."
        })
    else:
        return jsonify({
            "status": "error",
            "message": "Failed to send OTP. Please try again later."
        }), 500

@app.route('/verify-cancellation-otp', methods=['POST'])
def verify_cancellation_otp():
    data = request.get_json()
    email = data.get('email')
    otp = data.get('otp')

    stored_otp = otp_storage.get(email)

    if not stored_otp:
        return jsonify({"status": "error", "message": "OTP expired or invalid"}), 400

    if stored_otp == otp:
        del otp_storage[email]  # OTP used; remove it
        return jsonify({
            "status": "success",
            "message": "OTP verified successfully."
        })

    return jsonify({"status": "error", "message": "Invalid OTP"}), 400

@app.route("/cancel-booking", methods=["POST"])
def cancel_booking():
    data = request.get_json()
    email = data.get("email")
    table_name = data.get("date")  # format: dd-mm-yyyy

    if not email or not table_name:
        return jsonify({"status": "error", "message": "Email or date is missing."}), 400

    try:
        table = dynamodb_resource.Table(table_name)
        response = table.scan()

        cancelled_count = 0
        items_to_update = []

        for item in response.get("Items", []):
            if item.get("email") == email and item.get("valid_status") != 0:
                cancelled_count += int(item.get("number_of_tickets", 0))
                items_to_update.append(item["id"])  # use id to update later

        if not items_to_update:
            return jsonify({"status": "error", "message": "No active tickets found for this email."}), 404

        # Batch update
        with table.batch_writer() as batch:
            for item_id in items_to_update:
                batch.put_item(
                    Item={
                        "id": item_id,
                        "email": email,
                        "valid_status": 0,
                        # Preserve other required attributes if needed
                    }
                )

        # Send cancellation email
        send_cancellation_email(email, cancelled_count)

        return jsonify({
            "status": "success",
            "message": f"Successfully cancelled {cancelled_count} ticket(s). Refund of ₹{cancelled_count * 100} will be processed within 4-5 working days."
        })

    except Exception as e:
        print("Error during cancellation:", str(e))
        return jsonify({"status": "error", "message": "Cancellation failed.", "details": str(e)}), 500



@app.route('/get-user-info', methods=['POST'])
def get_user_info():
    data = request.get_json()
    email = data.get("email")
    
    user_data = load_user_data()

    if email in user_data:
        user_info = user_data[email]
        return jsonify({
            "status": "success",
            "name": user_info["name"],
            "phone": user_info["mobile number"]
        })
    else:
        return jsonify({"status": "error", "message": "User not found"})
    











load_dotenv()

key_id = os.getenv("key_id")
key_secret = os.getenv("key_secret")
client = razorpay.Client(auth=(key_id, key_secret))



@app.route('/create-order', methods=['POST'])
def create_order():
    try:
        data = request.get_json()
        print("Received data:", data)  # Always helpful for debugging

        amount = data['amount']
        currency = data['currency']

        # Extract nested values safely
        notes = data.get('notes', {})
        name = notes.get('Name', '')
        email = notes.get('mail', '')
        phone = notes.get('phone', '')
        ticket = notes.get('ticket', '')
        date = notes.get('date', '')
        time = notes.get('time', '')
        location = notes.get('location', '')

        order_data = {
            'amount': amount,  # Razorpay expects amount in paise already
            'currency': currency,
            'payment_capture': 1,
            'notes': {
                'name': name,
                'email': email,
                'phone': phone,
                'ticket': ticket,
                'date': date,
                'time': time,
                'location': location,
            }
        }

        razorpay_order = client.order.create(data=order_data)

        return jsonify({
            "orderId": razorpay_order['id'],
            "amount": amount,
            "currency": currency,
            "status": "success",
            "message": "Order created successfully"
        })

    except Exception as e:
        
     traceback.print_exc()  # This shows full error trace in terminal
     print(f"Error creating order: {e}")
     return jsonify({"status": "error", "message": str(e)}), 500




import hmac
import hashlib
import json
import os




@app.route("/verify-payment", methods=["POST"])
def verify_payment():
    try:
        
        data = request.json
        print("Received data:", data)  # Debugging line
        if not data:
            print("❌ Invalid JSON")
            return jsonify({"status": "error", "message": "Invalid JSON"}), 400

        order_id = data.get("razorpay_order_id")
        payment_id = data.get("razorpay_payment_id")
        signature = data.get("razorpay_signature")
        booking_info = data.get("bookingInfo", {})

        if not all([order_id, payment_id, signature]):
            print("Missing order_id, payment_id, or signature")
            return jsonify({"status": "error", "message": "Missing payment info"}), 400

        # Step 1: Verify signature
        generated_signature = hmac.new(
            bytes(key_secret, 'utf-8'),
            bytes(f"{order_id}|{payment_id}", 'utf-8'),
            hashlib.sha256
        ).hexdigest()

        if generated_signature != signature:
            print("Signature mismatch")
            
            return jsonify({"status": "error", "message": "Signature mismatch"}), 400

        # Step 2: Load or create user_info.json
        if os.path.exists(USER_INFO_FILE):
            with open(USER_INFO_FILE, "r") as f:
                user_data = json.load(f)
        else:
            user_data = {}

        # Step 3: Extract booking info
        email = booking_info.get("email")
        name = booking_info.get("name")
        phone = booking_info.get("phone")
        date = booking_info.get("date")
        print(type(date))
        ticket_count = booking_info.get("ticketCount")
        
        print(order_id, payment_id, signature, email, name, phone, date, ticket_count)

        if not all([email, name, phone, date, ticket_count]):
            print(f"Missing booking info: {email}, {name}, {phone}, {date}, {ticket_count}")
            print("Incomplete booking info")
            return jsonify({"status": "error", "message": "Incomplete booking info"}), 400

        # Step 4: Update JSON structure
        if email not in user_data:
            print(1)
            user_data[email] = {
                "name": name,
                "mobile number": phone,
                "date": {}
            }

        # Add or update ticket count for a specific date
        print(2)
        ticket_count = int(booking_info.get("ticketCount", 0))

        if "date" not in user_data[email] or not isinstance(user_data[email]["date"], dict):
            user_data[email]["date"] = {}

        if not date:
            return jsonify({"status": "error", "message": "Invalid date"}), 400

        user_data[email]["date"][date] = user_data[email]["date"].get(date, 0) + ticket_count


        # Add payment info
        print(3)
        user_data[email]["payment_id"] = payment_id
        user_data[email]["order_id"] = order_id
        user_data[email]["transaction_id"] = payment_id  # Razorpay uses payment_id

        # Step 5: Save back to file
        print(4)
        with open(USER_INFO_FILE, "w") as f:
            json.dump(user_data, f, indent=4)

        return jsonify({"status": "success", "message": "Payment verified and user data updated!"})

    except Exception as e:
        print("❌ Internal Server Error:", str(e))
        return jsonify({"status": "error", "message": "Internal server error", "details": str(e)}), 500
    

# Generate QR code
import os
from datetime import datetime
import qrcode
from flask import Flask, request, jsonify, send_file
import time 
from dotenv import load_dotenv
import base64
import hashlib
import json
from typing import Dict
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
from PIL import Image, ImageDraw, ImageFont
import boto3
import botocore
from datetime import datetime




# Load .env variables
load_dotenv()

# Encryption function

def encrypt_data(data, key_str):
    print('Encrypting...')
    key = hashlib.sha256(key_str.encode()).digest()
    iv = os.urandom(16)
    cipher = AES.new(key, AES.MODE_CBC, iv)
    padded_data = pad(data.encode(), AES.block_size)
    encrypted_data = cipher.encrypt(padded_data)
    full_encrypted = iv + encrypted_data
    encrypted_base64 = base64.b64encode(full_encrypted).decode()
    print("Encrypted (base64):", encrypted_base64)
    return encrypted_base64




def generate_qr_code(user_input):
    # ✅ Encrypt the user input
    secret_key = os.getenv("secret_key")
    print('secret key:', secret_key)
    print('user input:', user_input)
    
    json_user_input = json.dumps(ast.literal_eval(user_input[1:-1]))
    print('user input:', json_user_input)
    
    encrypted_input = encrypt_data(user_input, secret_key)
    print(f"Encrypted data: {encrypted_input}")

    # Create qr-codes directory if it doesn't exist
    os.makedirs("qr-codes", exist_ok=True)

    # Generate filename with timestamp
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"qr-codes/qr_{timestamp}.png"

    # Create QR code
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(encrypted_input)
    qr.make(fit=True)

    # Create and save image
    img = qr.make_image(fill_color="black", back_color="white")
    img.save(filename)

    print(f"QR code saved successfully as {filename}")
    return {"qr_path": filename}



@app.route("/generate-ticket", methods=["POST"])
def generate_ticket():
    try:
        
        print("Step 1 getting data from frontend")
        
        data = request.get_json()
        print("Received data:", data)

        payment_id = data.get("payment_id", None)
        user_name = data.get("name", "guest_user")
        number_of_tickets = data.get("ticket", 1)
        valid_status = data.get("valid_status", 1)
        email = data.get("email")
        date = data.get("date", None)


        # Prepare the string to encrypt
        print("Step 2 preparing data for QR code generation")
        ticket_info = {
            "id": payment_id,
            "date": date,
            "user_name": user_name,
            "email": email,
            "number_of_tickets": int(number_of_tickets),
            "valid_status": int(valid_status)
        }
        
        ticket_info_list = [ticket_info]
        
        #Changing table name to the date from the ticket.
        selected_date = data.get("date")  # coming from frontend in dd-mm-yyyy format
        if not selected_date:
            return jsonify({"error": "Missing selected date"}), 400

        table_name = selected_date  # Use selected date as table name
        
        json_ticket_info = json.dumps(ticket_info_list)
        print(type(json_ticket_info)) #debugging line
                
        
        # 3. Use date as collection name
        print("Step 3 processing ticket booking in MongoDB")
        print(f"Selected date: {selected_date}")
        collection_name = selected_date  # e.g., "15-09-2025
        print(f"Collection name: {collection_name}")
        
        print("step 4 Generating QR")
        result = generate_qr_code(json_ticket_info)  #
        print("QR code generation result:", result)  # Debugging line
        
        
        print("Step 5 Saving ticket info to MongoDB")
        mongodb_success = process_ticket_booking([ticket_info], collection_name)
        print(f"MongoDB operation success: {mongodb_success}")        
       
        
        
        print("Step 6 Creating ticket image")
        if result and mongodb_success:
            qr_image_path = result.get("qr_path")
            qr_img = Image.open(qr_image_path).resize((300, 300))  # Resize QR

            # Create ticket background
            ticket = Image.new("RGB", (600, 800), "#000A00")  # Dark green background
            draw = ImageDraw.Draw(ticket)

            # Load fonts
            try:
                font_large = ImageFont.truetype("arialbd.ttf", 36)
                font_medium = ImageFont.truetype("arialbd.ttf", 28)
                font_small = ImageFont.truetype("arial.ttf", 24)
            except:
                font_large = font_medium = font_small = ImageFont.load_default()

            # Static headers
            draw.text((120, 30), "The Bharat Museum", font=font_large, fill="gold")
            draw.text((190, 100), "Golden Pass ", font=font_large, fill="white")
            draw.text((80, 160), "Best Museum All over the India", font=font_medium, fill="gold")

            # Paste the QR code onto the ticket
            ticket.paste(qr_img, (150, 220)) # these are value 
            # Visitor info
            y_start = 550
            gap = 50
            draw.text((100, y_start),     f"Visitor Name. : {user_name}", font=font_small, fill="white")
            draw.text((100, y_start+gap), f"Number Of Ticket : {number_of_tickets}", font=font_small, fill="white")
            draw.text((100, y_start+2*gap), f"Valid Till : {date}", font=font_small, fill="white")
            draw.text((100, y_start+3*gap), f"Visiting Time : 10:00 A.M. - 05:00 P.M.", font=font_small, fill="white")
            ticket_path = f"ticket_{payment_id}.png"
            ticket.save(ticket_path)

            time.sleep(1)  # Optional safety
            return send_file(ticket_path, mimetype="image/png", as_attachment=True)
        else:
            print("Ticket generation failed")
            return jsonify({"error": "Ticket generation failed"}), 500

    except Exception as e:
        print("Error generating ticket:", str(e))
        return jsonify({"error": str(e)}), 500








# DynamoDB setup



    try:
        print(f"\n8 Inserting data into {table_name}...")
        table = dynamodb_resource.Table(table_name)
        with table.batch_writer() as batch:
            for item in ticket_info_list:
                print(f"9 Inserting item: {item}")
                batch.put_item(Item=item)
                print(f"10 Inserted item: {item}")
        print(f"\n11 ✅ Successfully inserted {len(ticket_info_list)} items into {table_name}")
    except botocore.exceptions.ClientError as e:
        print(f"112 Error inserting data: {e}")
        raise

load_dotenv()

# MongoDB Atlas setup
DB_PASSWORD = os.getenv("DB_PASSWORD")  # Your actual database password
DATABASE_NAME = "ticket_details"

# MongoDB Atlas URI - replace <db_password> with actual password from env
MONGO_URI = f"mongodb+srv://sriyanshgupta28204_db_user:{DB_PASSWORD}@tbcb01.3ksyqgm.mongodb.net/?retryWrites=true&w=majority&appName=TBCB01"
print(DB_PASSWORD)

# Initialize MongoDB client with ServerApi
try:
    mongo_client = MongoClient(MONGO_URI, server_api=ServerApi('1'))
    # Test the connection
    mongo_client.admin.command('ping')
    print("✅ Pinged your deployment. You successfully connected to MongoDB!")
    
    # Initialize database
    db = mongo_client[DATABASE_NAME]
    print(f"✅ Connected to database: {DATABASE_NAME}")
    
except Exception as e:
    print(f"❌ MongoDB connection failed: {e}")
    raise


def check_collection_exists(collection_name):
    collections = db.list_collection_names()  # Get all collection names
    print("1")
    print(f"Existing collections: {collections}")  # Debugging line
    
    exists = collection_name in collections   # Check if our date exists
    print("2")
    print(f"Collection '{collection_name}' exists: {exists}")  # Debugging line
    return exists

def create_mongodb_collection(collection_name, ticket_info_list):
    print("Creating new collection and inserting data...")
    print("3")
    collection = db[collection_name]  # Get/create collection reference
    
    if ticket_info_list:
        print("4")
        print(f"Ticket info list: {ticket_info_list}")  # Debugging line
        result = collection.insert_many(ticket_info_list)  # Insert multiple documents
        print(f"Created with {len(result.inserted_ids)} documents.")
        print("5")
        return True

def insert_ticket_data(collection_name, ticket_info_list):
    print("6")
    print("Inserting ticket data...")
    collection = db[collection_name]  # Get collection
    print("7")
    print(f"Ticket info list: {ticket_info_list}")  # Debugging line
    result = collection.insert_many(ticket_info_list)  # Insert documents
    return True

def process_ticket_booking(ticket_info_list, collection_name):
    # Check if collection exists (equivalent to DynamoDB table check)
    print("8")
    print(f"Processing ticket booking for collection: {collection_name}")
    if check_collection_exists(collection_name):
        # Collection exists - just add data
        success = insert_ticket_data(collection_name, ticket_info_list)
        print("9")
        print(f"Data inserted: {success}")
    else:
        print("10")
        print(f"Collection '{collection_name}' does not exist. Creating new collection and adding data.")
        # Collection doesn't exist - create it and add data
        success = create_mongodb_collection(collection_name, ticket_info_list)
    
    return success






if __name__ == "__main__":
    app.run(debug=True)