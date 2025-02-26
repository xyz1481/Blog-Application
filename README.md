---

# 📝 Blogging Application | Node.js, Express, MongoDB  

A full-stack blogging application that allows users to create, edit, and delete blog posts with authentication and user management.  

## 🚀 Features  

✅ **User Authentication** – Secure signup, login, and session management using cookies.  
✅ **Create, Read, Update, Delete (CRUD)** – Users can write, edit, and delete their blogs.  
✅ **User Dashboard** – View personal and public blog posts.  
✅ **EJS Templating** – Server-side rendering for dynamic content.  
✅ **MongoDB Integration** – Stores user and blog data efficiently.  

## 🛠️ Tech Stack  

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Templating Engine:** EJS  
- **Middleware:** Cookie Parser, Multer (for future file uploads)  

## 🚀 Setup & Installation  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/your-username/blogging-app.git  
cd blogging-app  
```  

### 2️⃣ Install Dependencies  
```bash
npm install  
```  

### 3️⃣ Set Up MongoDB  
Ensure MongoDB is running locally and update the connection string in the `index.js` file.  

### 4️⃣ Run the Server  
```bash
npm start  
```  
The server will start at **[http://localhost:8000](http://localhost:8000)**.  

## 📊 API Endpoints  

| Method | Endpoint     | Description                        |  
|--------|-------------|------------------------------------|  
| GET    | `/`         | Home page with all blog posts     |  
| GET    | `/user/signup` | Signup page                     |  
| POST   | `/user/signup` | Register a new user            |  
| GET    | `/user/login`  | Login page                     |  
| POST   | `/user/login`  | Authenticate user              |  
| GET    | `/blog/create` | Create a new blog page         |  
| POST   | `/blog/create` | Submit a new blog              |  
| GET    | `/blog/edit/:id` | Edit an existing blog        |  
| POST   | `/blog/edit/:id` | Update an existing blog      |  
| POST   | `/blog/delete/:id` | Delete a blog              |  

## 🔧 Future Enhancements  

📌 **Image Uploads** – Allow users to upload images in blog posts.  
📌 **Like & Comment System** – Enhance user interaction with blogs.  
📌 **User Profile Pages** – Display all blogs by a specific user.  
📌 **Rich Text Editor** – Improve writing experience with formatting options.  

---
