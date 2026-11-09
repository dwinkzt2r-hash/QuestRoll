# QuestRoll – question bank randomizer
Offline-first PWA: roll a random question from your numbered bank, set a From–To range, exclude numbers, tick complete, rate (1–5★ difficulty), track streak/XP/daily goal, hear sounds, see confetti.

## Deploy on GitHub Pages
1. Upload all files (keep the `icons/` folder) to a repo root.
2. Settings → Pages → Deploy from branch → `main` / `(root)`.
3. Open `https://<user>.github.io/<repo>/` → browser menu → **Install app / Add to Home screen**.

## Notes
- Progress is saved on-device (localStorage). Use **Settings → Export** for backups.
- After editing any file, bump `V` in `sw.js` (e.g. `questroll-v2`) so phones fetch the update.
- Keys: Space = roll, Enter/C = complete, 1–5 = rate.
