async function loadJukebox() {
  const container = document.getElementById('playlist-grid');

  try {
    // 1. Fetch the manifest list of track files
    const manifestRes = await fetch('./tracks/manifest.json');
    const trackFiles = await manifestRes.json();

    // 2. Fetch each track's JSON file dynamically
    for (const file of trackFiles) {
      try {
        const trackRes = await fetch(`./tracks/${file}`);
        const track = await trackRes.json();

        // 3. Render card HTML
        const card = document.createElement('div');
        card.className = 'track-card';
        card.innerHTML = `
          <div>
            <h3>${escapeHtml(track.songTitle)}</h3>
            <p><strong>Artist:</strong> ${escapeHtml(track.artist)}</p>
            <p><strong>Genre:</strong> ${escapeHtml(track.genre)}</p>
          </div>
          <div>
            <a href="${escapeHtml(track.songUrl)}" target="_blank" rel="noopener">▶ Listen Here</a>
            <span class="user-tag">Added by @${escapeHtml(track.githubUsername)}</span>
          </div>
        `;
        container.appendChild(card);
      } catch (err) {
        console.error(`Failed to load track file: ${file}`, err);
      }
    }
  } catch (err) {
    container.innerHTML = '<p>Failed to load playlist. Check if tracks/manifest.json exists!</p>';
    console.error('Error fetching manifest:', err);
  }
}

// Basic sanitizer helper function to prevent simple script injection
function escapeHtml(str) {
  return String(str || '').replace(/[&<>"']/g, (m) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[m]));
}

loadJukebox();
