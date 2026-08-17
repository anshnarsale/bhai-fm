# 🎧 Bhai-FM

> **Press play. Take a ride back.**

Bhai-FM is a nostalgic web-based music player built around the feeling of listening to your favorite Hindi songs during long journeys, late-night drives, and those random moments when an old song hits different.

It combines a simple music-player experience with era-based discovery, custom artwork, and a retro visual atmosphere.

---

## ✨ Features

* 🎵 **Nostalgic Hindi Music** — A curated collection of songs from different eras.
* 📻 **Era Selector** — Browse music by different generations.
* ▶️ **YouTube Playback** — Songs are played through the YouTube Player API.
* 🖼️ **Dynamic Artwork** — Visual backgrounds change with the listening experience.
* 🎨 **Retro-inspired UI** — Designed to feel nostalgic while staying modern and responsive.
* 📱 **Responsive Design** — Works across desktop and mobile devices.
* ⚡ **Lightweight & Fast** — Built as a simple frontend without unnecessary complexity.

---

## 🎶 The Experience

Bhai-FM isn't trying to be another massive streaming platform.

It's about that **"bhai, ye gaana yaad hai?"** feeling.

Pick an era, choose a song, press play, and let the music do the rest.

---

## 🖥️ Live Demo

🔗 **[Listen to Bhai-FM](https://bhaifm.netlify.app/)**

---

## 📸 Preview

<img width="1919" height="869" alt="image" src="https://github.com/user-attachments/assets/90525362-1253-42b5-aee6-44b684573909" />


<p align="center">
  <img src="public/artwork/bg1.png" alt="Bhai-FM Preview" width="800">
</p>

---

## 🛠️ Built With

| Technology            | Purpose                     |
| --------------------- | --------------------------- |
| ⚛️ React              | Frontend UI                 |
| 📘 TypeScript         | Type safety                 |
| ⚡ Vite                | Development & build tooling |
| ▶️ YouTube Player API | Music playback              |
| 🎨 CSS                | Interface styling           |

---

## 📂 Project Structure

```text
bhai-fm/
├── public/
│   └── artwork/
│       ├── bg1.png
│       ├── bg2.png
│       ├── bg3.png
│       ├── bg4.png
│       └── bg5.png
│
├── src/
│   ├── components/
│   │   ├── EraSelector.tsx
│   │   └── MusicPlayer.tsx
│   │
│   ├── data/
│   │   └── backgrounds.ts
│   │
│   ├── hooks/
│   │   └── useYoutubePlayer.ts
│   │
│   ├── App.tsx
│   └── App.css
│
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* [Node.js](https://nodejs.org/)
* npm

### 1. Clone the repository

```bash
git clone https://github.com/anshnarsale/bhai-fm.git
```

### 2. Enter the project directory

```bash
cd bhai-fm
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown in your terminal, usually:

```text
http://localhost:5173
```

---

## 🏗️ Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🎧 How It Works

Bhai-FM uses the **YouTube Player API** to handle music playback.

The application separates the experience into a few simple parts:

```text
Era Selector
     │
     ▼
Song Selection
     │
     ▼
Music Player
     │
     ▼
YouTube Player
     │
     ▼
🎵 Music
```

Background artwork and UI elements change alongside the listening experience to create a more immersive nostalgic feel.

---

## 🎨 Design Philosophy

The design takes inspiration from:

* 📻 Old-school radio
* 🎶 Hindi music from different eras
* 🚗 Long road trips
* 🌙 Late-night listening
* 📼 Retro album artwork
* 🚌 The feeling of discovering an old favorite song again

The goal is to keep the interface **simple, playful, nostalgic, and music-first**.

---

## 🔮 Future Ideas

Some things that could be added in future versions:

* [ ] More songs and eras
* [ ] Search functionality
* [ ] Favorites
* [ ] Recently played songs
* [ ] Custom playlists
* [ ] Shuffle mode
* [ ] More visual themes
* [ ] Keyboard shortcuts
* [ ] Better mobile controls
* [ ] PWA support

---

## 🤝 Contributing

Contributions, ideas, and suggestions are welcome.

If you'd like to contribute:

```bash
# Fork the repository

# Clone your fork
git clone https://github.com/YOUR_USERNAME/bhai-fm.git

# Create a branch
git checkout -b feature/your-feature

# Make your changes

# Commit
git commit -m "Add your feature"

# Push
git push origin feature/your-feature
```

Then open a Pull Request.

---

## 📜 License

This project is intended for educational and personal experimentation.

Music and third-party media remain the property of their respective copyright holders.

---

## 👨‍💻 Author

**Ansh Narsale**

GitHub: [@anshnarsale](https://github.com/anshnarsale)

---

<p align="center">
  Made with ❤️, nostalgia & too many old songs.
</p>

<p align="center">
  <strong>🎧 Bhai-FM — Press play. Take a ride back.</strong>
</p>
