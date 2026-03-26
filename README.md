# NagarikSetu UI/UX + Role-Based Upgrade

This implementation adds a complete role-based civic interface with improved UX and live-data-aware assistant behavior.

## Included improvements

- Separate auth and dashboards for `citizen` and `politician`.
- Citizen features:
  - Report issue (category, priority, location, description)
  - Track personal issue status and updates
  - Browse announcements and public promises
  - Ask AI assistant with live civic + weather context
- Politician features:
  - Issue command center with status updates and public notes
  - Publish announcements
  - Create and update promises with progress tracker
  - AI governance assistant for prioritization and public messaging
- UX upgrades:
  - Responsive layout
  - Card-based information architecture
  - Search/filter controls
  - Live clock, issue ticker, and weather strip
  - Google Maps area intelligence panel to find ongoing construction/repair work by location
  - Toast feedback and animated UI atmosphere
- Persistence:
  - LocalStorage-based data store and session handling
  - Cross-tab syncing via `storage` event

## Files

- `index.html`
- `styles.css`
- `app.js`

## Run locally

Open `index.html` in a browser.

Demo accounts:

- `citizen@example.com / citizen123`
- `politician@example.com / leader123`

## Google Maps setup (for area work map)

1. Create a Google Maps API key in Google Cloud.
2. Enable billing for the project.
3. Enable these APIs:
   - Maps JavaScript API
   - Geocoding API
4. In the app, open the "Construction & Repair Work Map" panel, paste the key, and click `Save Key`.

## Note

This is a frontend implementation with localStorage persistence for rapid deployment/testing.  
For production, connect auth and civic data operations to a secure backend and move password handling to server-side authentication.
