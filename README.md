# Realtime-Tracker

**Realtime-Tracker** is a real-time, multi-user location tracking web app built with **Node.js**, **Express**, **Socket.IO**, and **Leaflet.js**. Users’ live locations are shared on a map in real time—perfect for scenarios like delivery tracking, group meetups, or collaborative navigation.

---

##  Live Demo (Local & Public)

Run locally:
```bash
node app.js
```
Open your browser at `http://localhost:3000`.

Share publicly using **ngrok**:
```bash
ngrok http 3000
```
This gives you a public URL to let others join your live map session.

---

##  Features

- **Real-Time Location Sharing**: Users’ geolocations are streamed instantly using Socket.IO.
- **Interactive Map**: Powered by Leaflet — pan, zoom, and explore.
- **Dynamic Markers**: Each user gets a unique, real-time movable marker.
- **Auto Cleanup**: Markers are removed once a user disconnects.

---

##  Tech Stack

- **Backend**: Node.js, Express
- **Real-Time**: Socket.IO
- **Frontend**: EJS templating, Vanilla JS
- **Mapping**: Leaflet.js with OpenStreetMap tiles
- **Geolocation**: Browser’s `navigator.geolocation` API
- **Environment Configuration**: dotenv (via `.env`)

---

##  Project Structure

```
.
├── app.js            # Main server & websocket logic
├── .env              # Environment variables (ignored by git)
├── package.json      
├── public/           
│   ├── js/
│   │   └── script.js  # Client-side socket + map logic
│   ├── css/
│   └── ...
└── views/
    └── index.ejs     # HTML template with map container
```

---

##  Install & Run

### Prerequisites:
- Node.js & npm installed

### Steps:

```bash
git clone https://github.com/Rupendra0/Realtime-Tracker.git
cd Realtime-Tracker
npm install
```

Create a `.env` file:
```text
PORT=3000
```

Start the server:
```bash
npm start
# or
node app.js
```

Visit `http://localhost:3000` to launch the app.

---

##  How It Works

### Client Side:
- The browser’s geolocation API continuously sends user coordinates (`latitude`, `longitude`) via `send-location`.
- Upon receiving `receive-location`, Leaflet updates or adds user markers.
- When users disconnect, markers are removed in real time.

### Server Side:
- Express serves the `index.ejs` view and static assets.
- Socket.IO handles `send-location` and broadcasts `receive-location` to all clients.
- Detects `disconnect` events to notify all clients to clean up markers.

---

##  Contributing

Contributions are welcome! Whether improving UX, adding features, or refactoring—feel free to contribute.

Steps:
1. Fork the repo
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push to your fork and open a Pull Request

---

##  License

MIT License. See the [LICENSE](LICENSE) file for details.

---

##  Acknowledgments

- Built with help from **Node.js**, **Express**, **Socket.IO**, **Leaflet**, and **Geolocation API**.
- Inspired by real-time tracking use cases seen in delivery and location-sharing apps.

---

Happy tracking! 🗺️
