# Jukebox PWA Interaction Design

## Core Interaction Flow

### Main Jukebox Interface (Index Page)
- **Song Library Display**: Grid of available songs with album art, title, artist
- **Voting System**: Each song has a vote button with current vote count
- **Now Playing Section**: Current song with progress bar and playback controls
- **Up Next Queue**: Top 3 songs in voting order with vote counts
- **Real-time Updates**: Vote counts and queue positions update automatically

### User Interactions
1. **Browse Songs**: Scroll through available song library
2. **Cast Votes**: Tap vote button on any song (multiple votes allowed)
3. **View Queue**: See which songs are next in line
4. **Playback Control**: Play/pause/skip controls for admin users

### Voting Mechanics
- Each user can vote for multiple songs
- Vote counts determine queue position
- Most voted song plays next automatically
- After playback, song returns to library with vote count reset

### Admin Controls
- Skip current song
- Pause/resume playback
- View all connected users
- Manual song queue management

### Real-time Features
- Live vote count updates
- Queue position changes
- Current song progress
- User connection status

## Multi-turn Interaction Loops

### Voting Loop
1. User browses songs → votes for favorites → sees vote count increase → watches queue position change → song plays → cycle repeats

### Queue Management Loop  
1. System tracks votes → updates queue order → plays highest voted → removes from queue → resets votes → returns to library

### Social Interaction Loop
1. Multiple users vote → see collective preferences → influence queue together → share music discovery → engage in musical democracy

## Mobile-First Interactions
- Touch-friendly vote buttons
- Swipe gestures for song browsing  
- Pull-to-refresh for updates
- Haptic feedback for votes
- Smooth animations for state changes