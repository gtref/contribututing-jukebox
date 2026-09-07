# Contributing Guidelines

Thank you for taking the time to contribute! This project is designed as a beginner-friendly space to practice forking repositories, editing JSON files, and submitting Pull Requests (PRs).

Follow the step-by-step guide below to add your favorite coding track to the playlist.

---

## 🚀 How to Contribute Your Track

### Step 1: Fork and Clone
1. Click the **Fork** button at the top right of this repository to create your own copy.
2. Open your terminal and clone your fork to your computer:
   git clone https://github.com/your-user-name/contribututing-jukebox.git  (Replace `your-user-name` with your github username)
   cd dev-jukebox

### Step 2: Create a New Branch
Always work on a separate branch rather than main:
   git checkout -b add-my-track

### Step 3: Add Your Track File
1. Open the project in your code editor.
2. Go to the tracks/ directory.
3. Duplicate _template.json and rename it using your GitHub username (e.g., tracks/your-username.json).
4. Fill in your song details:
   {
     "githubUsername": "your-username",
     "songTitle": "Song Name",
     "artist": "Artist Name",
     "genre": "Lo-Fi / Synthwave / Rock",
     "songUrl": "https://www.youtube.com/watch?v=example"
   }

> Note: Do not edit tracks/manifest.json directly. The project maintainer will update the index file when reviewing your PR!

### Step 4: Commit and Push
1. Stage your new file:
   git add tracks/your-username.json
2. Commit your changes with a clear message:
   git commit -m "Add song by your-username"
3. Push your branch to GitHub:
   git push origin add-my-track

### Step 5: Open a Pull Request
1. Go to your repository on GitHub.
2. Click the Compare & pull request button that appears near the top.
3. Write a brief description and submit your PR!

### Step 6: FeedBack
Please star the repo if you liked this turorial and if you feel there is anything that is a good quality of life feature or something you would like to see, Please submit an issue.

---

## 📜 Contribution Rules

* One File Per User: Name your JSON file after your GitHub username (e.g., tracks/janedoe.json).
* Valid JSON Only: Make sure all keys and values use double quotes (") and that there are no trailing commas.
* Appropriate Content: Keep song titles, links, and details family-friendly and respectful.
