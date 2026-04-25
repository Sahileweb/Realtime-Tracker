# 🚀 Real-Time Device Tracker

> 📍 A real-time location tracking system similar to live tracking in apps like Uber, Swiggy, or Zomato.

A web application built using **Node.js, Express, and Socket.IO** that tracks and updates device locations in real time on an interactive map using WebSockets.

---

## 📌 Features

* 📍 Live location tracking in real time
* 🔄 Instant updates using Socket.IO
* 🗺️ Interactive map integration (Leaflet.js)
* 👥 Multiple device tracking
* ⚡ Fast event-based communication
* 📱 Responsive user interface

---

## 🛠️ Tech Stack

**Frontend**

* HTML, CSS, JavaScript

**Backend**

* Node.js, Express.js

**Real-Time Communication**

* Socket.IO

**Other Tools**

* Leaflet.js

---

## 📂 Project Structure

```
Realtime-Tracker/
│── public/
│   ├── js/
│   │   └── script.js
│   ├── css/
│   │   └── style.css
│
│── views/
│   └── index.ejs
│
│── app.js
│── package.json
│── README.md
```

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Sahileweb/Realtime-Tracker.git

# Navigate to project folder
cd Realtime-Tracker

# Install dependencies
npm install

# Run the server
node app.js
```

👉 Open in browser:
http://localhost:3000

---
## 🌐 Live Demo

🔗 https://realtime-tracker-six-liart.vercel.app/

---

## ▶️ How It Works

1. Client captures location using browser geolocation API
2. Data is sent to the server via Socket.IO
3. Server broadcasts location updates to all connected clients
4. Map updates dynamically in real time

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

