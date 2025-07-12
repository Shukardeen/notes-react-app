# PasteApp 📝

A modern, responsive note-taking application built with React that allows users to create, edit, view, and manage their notes with a clean and intuitive interface.

## ✨ Features

- **📝 Create Notes**: Write and save notes with titles and descriptions
- **✏️ Edit Notes**: Modify existing notes with real-time updates
- **👁️ View Notes**: Read-only view mode for your notes
- **🔍 Search**: Quickly find notes using the search functionality
- **📋 Copy to Clipboard**: One-click copying of note content
- **🗑️ Delete Notes**: Remove individual notes or clear all notes
- **📅 Creation Timestamps**: Track when each note was created
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **🎨 Modern UI**: Clean, intuitive interface with smooth interactions
- **🔔 Toast Notifications**: User-friendly feedback for actions

## 🚀 Live Demo

[Try PasteApp Live](https://notes-react-app-puce.vercel.app/)

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Notifications**: React Hot Toast
- **Development**: ESLint

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pasteApp.git
   cd pasteApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🏗️ Build for Production

```bash
npm run build
```

## 📖 Usage

### Creating a Note
1. Navigate to the home page
2. Enter a title for your note
3. Add a description (optional)
4. Write your content in the text area
5. Click "Create Note" to save

### Managing Notes
- **View All Notes**: Click on "Pastes" in the navigation
- **Search Notes**: Use the search bar to filter notes by title
- **Edit Note**: Click the edit icon on any note
- **View Note**: Click the view icon to see the note in read-only mode
- **Copy Content**: Click the copy icon to copy note content to clipboard
- **Delete Note**: Click the delete icon to remove a note
- **Delete All**: Use the delete all button to clear all notes

## 🗂️ Project Structure

```
pasteApp/
├── public/
├── src/
│   ├── assets/          # SVG icons and images
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx     # Note creation/editing
│   │   ├── Pastes.jsx   # Notes listing
│   │   └── ViewPaste.jsx # Note viewing
│   ├── slices/          # Redux slices
│   ├── store/           # Redux store configuration
│   ├── App.jsx          # Main app component
│   └── main.jsx         # App entry point
├── package.json
└── README.md
```

## 🎯 Key Features Explained

### State Management
The app uses Redux Toolkit for state management, storing notes in a centralized store with actions for adding, updating, deleting, and resetting notes.

### Routing
React Router DOM handles navigation between different views:
- `/` - Home page (create/edit notes)
- `/pastes` - All notes listing
- `/pastes/:id` - Individual note view

### Responsive Design
Built with Tailwind CSS for a mobile-first responsive design that works across all device sizes.

---

⭐ If you found this project helpful, please give it a star!
