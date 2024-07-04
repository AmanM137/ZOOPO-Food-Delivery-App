# 🍽️ Zoopo - Food Delivery Web App

Welcome to **Zoopo**, a food delivery web application designed to provide a seamless and delightful food ordering experience! This project is built using the MERN stack with React for the frontend and Node.js for the backend. 

## 🌐 Live Links

- **App:** [Zoopo App](https://zoopo.vercel.app/)
  - You can use a dummy card for payment: 
    - **Card Number:** 4000003560000008 
    - **Expiry Date:** Any future month and year 
    - **CVV:** Any 3-digit number

- **Admin Panel:** [Zoopo Admin Panel](https://zoopoadmin.vercel.app/)  
  - Use the following credentials to access the admin panel:
    - **Email:** admin3002@gmail.com
    - **Password:** 12345678


## 📁 Project Structure

Zoopo is organized into three sub-projects:

1. **Frontend**
2. **Backend**
3. **Admin Panel**

### Frontend
The frontend is responsible for the responsive and interactive interface of the app. It handles user interactions and navigation, ensuring a smooth user experience.

**Functionalities:**
- 🔐 User can register/login
- 🛒 User can add/remove items from the cart
- 🔍 User can filter food items by category
- 💳 User can checkout cart items
- 📋 User can view all orders with updated status
- 🚪 User can logout

### Backend
The backend manages the routing of the entire project, handling all API calls and generating appropriate responses. It also manages the database.

**Functionalities:**
- 📬 Handles user requests and API calls (login, register, fetching records, etc.)
- 🛡️ Generates token for user ID
- 📊 Manages the database
- 💳 Integrates Stripe payment gateway

### Admin Panel
The admin panel empowers the admin to manage orders from different users and the list of food items displayed on the frontend.

**Functionalities:**
- 🔑 Admin needs authorization to access the panel
- 🔄 Admin can change the status of orders
- ❌ Admin can remove items from the list of food items
- ➕ Admin can add new food items


## 🚀 Getting Started

Follow these steps to get a copy of the project up and running on your local machine.

### Prerequisites
Ensure you have Node.js and npm installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AmanM137/Food-Delivery-App.git

2. **Run Backend:**
   ```bash
   cd backend
   npm install
   npm run server

3. **Run Frontend:**
   ```bash
   cd frontend
   npm install
   npm run dev

4. **Run Admin:**
   ```bash
   cd admin
   npm install
   npm run dev
