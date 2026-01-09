# 🏛️ Museum Ticket Booking & QR Validation System

A full-stack backend system for **museum ticket booking**, **secure online payments**, **OTP-based verification**, and **QR-code-enabled ticket generation**.  
This project is designed to eliminate long queues, reduce human error, and provide a seamless digital ticketing experience for museum visitors.

---

## 📌 Features

### 👤 User Management
- User validation with **name, email, and phone number**
- OTP-based email verification
- Persistent user data storage using JSON

### 🎟️ Ticket Booking
- Date-wise ticket booking
- Automatic ticket count management
- Booking updates for existing users

### 💳 Payment Integration
- Secure payment gateway integration using **Razorpay**
- Order creation and payment verification
- Signature validation for payment security

### 📧 Email Notifications
- OTP emails for verification
- Payment confirmation emails
- Ticket cancellation & refund notification emails

### 🔐 QR Code & Security
- Encrypted QR codes using **AES encryption**
- QR code generation for each ticket
- Secure validation-ready payload inside QR

### 🖼️ Ticket Generation
- Automatically generates **downloadable ticket images**
- Embedded QR code on ticket
- Includes visitor name, date, ticket count, and validity

### 🗃️ Database Support
- **MongoDB Atlas** for ticket storage (date-wise collections)
- JSON-based fallback storage for user info

---

## 🛠️ Tech Stack

- **Backend**: Flask, Python
- **Database**: MongoDB Atlas
- **Payments**: Razorpay API
- **Email**: SMTP (Gmail)
- **Security**: AES Encryption
- **Image Processing**: Pillow
- **QR Codes**: qrcode
- **Environment Management**: python-dotenv

---
