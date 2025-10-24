// Jukebox PWA Main JavaScript
class NeonJukebox {
    constructor() {
        this.songs = [
            { id: 1, title: "Electric Dreams", artist: "Synthwave Collective", genre: "electronic", duration: "4:12", votes: 15, albumArt: "https://kimi-web-img.moonshot.cn/img/m.media-amazon.com/80c6fdf75bfb1ffd77296784d527ef260ea9bb4e.jpg" },
            { id: 2, title: "Neon Nights", artist: "Cyberpunk 2077", genre: "electronic", duration: "3:45", votes: 23, albumArt: "https://kimi-web-img.moonshot.cn/img/m.media-amazon.com/053db6b7646e3f9674bd84a94471dc58a97b97c6.jpg" },
            { id: 3, title: "Starlight Echo", artist: "Cosmic Voyager", genre: "electronic", duration: "5:21", votes: 8, albumArt: "https://kimi-web-img.moonshot.cn/img/i.etsystatic.com/ee0713eab6209d2daaa75c86dbb4f23e0b026b50.jpg" },
            { id: 4, title: "Retro Wave", artist: "80s Revival", genre: "electronic", duration: "3:33", votes: 31, albumArt: "https://kimi-web-img.moonshot.cn/img/media.istockphoto.com/255490afb8770cedbaa4bd30a9bc151420333847.jpg" },
            { id: 5, title: "Digital Love", artist: "Daft Punk Tribute", genre: "electronic", duration: "4:56", votes: 18, albumArt: "https://kimi-web-img.moonshot.cn/img/thumbs.dreamstime.com/38d1f07a619ecea88ea97d6d71deee49dca39491.jpg" },
            { id: 6, title: "Rock the Casbah", artist: "The Clash", genre: "rock", duration: "3:42", votes: 12, albumArt: "https://kimi-web-img.moonshot.cn/img/c.pxhere.com/adae85e160292d15daf5e545919a6a397dd9e25c.jpg!d" },
            { id: 7, title: "Bohemian Rhapsody", artist: "Queen", genre: "rock", duration: "5:55", votes: 27, albumArt: "https://kimi-web-img.moonshot.cn/img/c.pxhere.com/b4bc5ed58d9403af15232ef3a46d79c501f14a49.jpg!d" },
            { id: 8, title: "Hotel California", artist: "Eagles", genre: "rock", duration: "6:30", votes: 19, albumArt: "https://kimi-web-img.moonshot.cn/img/c.pxhere.com/a88f65e6d5961003adf84582ed00ee5e57071543.jpg!d" },
            { id: 9, title: "Thriller", artist: "Michael Jackson", genre: "pop", duration: "5:57", votes: 35, albumArt: "https://kimi-web-img.moonshot.cn/img/img.freepik.com/a9efbb16327123014e5724d284bd00350ea9fbb9.jpg" },
            { id: 10, title: "Billie Jean", artist: "Michael Jackson", genre: "pop", duration: "4:54", votes: 22, albumArt: "https://kimi-web-img.moonshot.cn/img/rockymountevents.com/1b39f5d10eccef6ed79e16882ab45915c8eff907.jpg" },
            { id: 11, title: "Like a Prayer", artist: "Madonna", genre: "pop", duration: "5:41", votes: 16, albumArt: "https://kimi-web-img.moonshot.cn/img/s3-us-west-2.amazonaws.com/8dab5a1b73aa000f30c314f05eeeff4402d382e4.jpg" },
            { id: 12, title: "Take Five", artist: "Dave Brubeck", genre: "jazz", duration: "5:24", votes: 7, albumArt: "https://kimi-web-img.moonshot.cn/img/c.pxhere.com/c51d07e1fee44d9b19de06a3d08daa1e25047487.jpg!d" },
            { id: 13, title: "So What", artist: "Miles Davis", genre: "jazz", duration: "6:22", votes: 9, albumArt: "https://kimi-web-img.moonshot.cn/img/images.pexels.com/61f2fe6554aea07923f0aff730ee966cfd5d25ed.jpeg" },
            { id: 14, title: "Moonlight Sonata", artist: "Beethoven", genre: "classical", duration: "15:30", votes: 4, albumArt: "https://kimi-web-img.moonshot.cn/img/c.pxhere.com/df92bba03091626682c983bef226930e3fd2c111.jpg!d" },
            { id: 15, title: "Four Seasons", artist: "Vivaldi", genre: "classical", duration: "42:15", votes: 6, albumArt: "https://kimi-web-img.moonshot.cn/img/media.istockphoto.com/4ebc5a9102361ae6d619a3fd3abefe201e3dd143.jpg" }
        ];
        
        this.currentSong = this.songs[0];
        this.isPlaying = false;
        this.currentTime = 0;
        this.duration = 252; // 4:12 in seconds
        this.users = Math.floor(Math.random() * 20) + 5;
        
        this.init();
    }
    
    init() {
        this.setupP5Background();
        this.renderSongLibrary();
        this.renderQueue();
        this.setupEventListeners();
        this.startProgressSimulation();
        this.updateCurrentSongDisplay();
        this.simulateRealTimeUpdates();
    }
    
    setupP5Background() {
        // P5.js sound wave visualization
        new p5((p) => {
            let waves = [];
            
            p.setup = () => {
                let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
                canvas.parent('p5-container');
                canvas.id('p5-canvas');
                
                // Initialize wave objects
                for (let i = 0; i < 5; i++) {
                    waves.push({
                        amplitude: p.random(20, 60),
                        frequency: p.random(0.01, 0.03),
                        phase: p.random(0, p.TWO_PI),
                        y: p.height * (0.2 + i * 0.15),
                        color: p.color(p.random(100, 255), p.random(100, 255), 255, 30)
                    });
                }
            };
            
            p.draw = () => {
                p.clear();
                
                // Draw animated sound waves
                waves.forEach((wave, index) => {
                    p.stroke(wave.color);
                    p.strokeWeight(2);
                    p.noFill();
                    
                    p.beginShape();
                    for (let x = 0; x < p.width; x += 5) {
                        let y = wave.y + p.sin(x * wave.frequency + p.frameCount * 0.02 + wave.phase) * wave.amplitude;
                        p.vertex(x, y);
                    }
                    p.endShape();
                });
            };
            
            p.windowResized = () => {
                p.resizeCanvas(p.windowWidth, p.windowHeight);
            };
        });
    }
    
    renderSongLibrary() {
        const container = document.getElementById('songLibrary');
        container.innerHTML = '';
        
        this.songs.forEach(song => {
            const songCard = document.createElement('div');
            songCard.className = 'song-card rounded-xl p-4 cursor-pointer';
            songCard.innerHTML = `
                <div class="aspect-square bg-gray-800 rounded-lg mb-3 overflow-hidden">
                    <img src="${song.albumArt}" alt="${song.title}" class="w-full h-full object-cover">
                </div>
                <h4 class="font-semibold text-sm mb-1 truncate">${song.title}</h4>
                <p class="text-xs text-gray-400 mb-2 truncate">${song.artist}</p>
                <div class="flex items-center justify-between">
                    <span class="text-xs text-gray-500 jetbrains">${song.duration}</span>
                    <button onclick="jukebox.voteForSong(${song.id})" 
                            class="vote-btn px-3 py-1 rounded-full text-xs font-medium text-white">
                        ♥ ${song.votes}
                    </button>
                </div>
            `;
            container.appendChild(songCard);
        });
    }
    
    renderQueue() {
        const container = document.getElementById('queueContainer');
        container.innerHTML = '';
        
        // Get top 3 songs by votes
        const topSongs = [...this.songs]
            .filter(song => song.id !== this.currentSong.id)
            .sort((a, b) => b.votes - a.votes)
            .slice(0, 3);
        
        topSongs.forEach((song, index) => {
            const queueItem = document.createElement('div');
            queueItem.className = 'queue-item rounded-xl p-4';
            queueItem.innerHTML = `
                <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                        <img src="${song.albumArt}" alt="${song.title}" class="w-full h-full object-cover">
                    </div>
                    <div class="flex-1 min-w-0">
                        <h4 class="font-semibold text-sm mb-1 truncate">${song.title}</h4>
                        <p class="text-xs text-gray-400 truncate">${song.artist}</p>
                    </div>
                    <div class="text-right flex-shrink-0">
                        <div class="text-sm font-bold text-blue-400">#${index + 1}</div>
                        <div class="text-xs text-gray-400">${song.votes} votes</div>
                    </div>
                </div>
            `;
            container.appendChild(queueItem);
        });
    }
    
    voteForSong(songId) {
        const song = this.songs.find(s => s.id === songId);
        if (song) {
            song.votes++;
            this.showVoteNotification();
            this.renderSongLibrary();
            this.renderQueue();
            this.createFloatingNotes();
            
            // Animate vote button
            anime({
                targets: `button[onclick="jukebox.voteForSong(${songId})"]`,
                scale: [1, 1.2, 1],
                duration: 300,
                easing: 'easeOutElastic(1, .8)'
            });
        }
    }
    
    showVoteNotification() {
        const notification = document.getElementById('voteNotification');
        notification.style.transform = 'translateX(0)';
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
        }, 2000);
    }
    
    createFloatingNotes() {
        const notes = ['♪', '♫', '♬', '♩', '♭', '♯'];
        const container = document.getElementById('floatingNotes');
        
        for (let i = 0; i < 5; i++) {
            const note = document.createElement('div');
            note.className = 'floating-notes';
            note.textContent = notes[Math.floor(Math.random() * notes.length)];
            note.style.left = Math.random() * window.innerWidth + 'px';
            note.style.top = Math.random() * window.innerHeight + 'px';
            note.style.animationDelay = Math.random() * 2 + 's';
            
            container.appendChild(note);
            
            setTimeout(() => {
                container.removeChild(note);
            }, 3000);
        }
    }
    
    updateCurrentSongDisplay() {
        document.getElementById('currentSong').textContent = this.currentSong.title;
        document.getElementById('currentArtist').textContent = this.currentSong.artist;
        document.getElementById('currentAlbumArt').src = this.currentSong.albumArt;
    }
    
    togglePlay() {
        this.isPlaying = !this.isPlaying;
        const playIcon = document.getElementById('playIcon');
        playIcon.textContent = this.isPlaying ? '⏸' : '▶';
        
        if (this.isPlaying) {
            this.startProgressSimulation();
        }
    }
    
    nextSong() {
        // Find song with most votes (excluding current)
        const nextSong = [...this.songs]
            .filter(song => song.id !== this.currentSong.id)
            .sort((a, b) => b.votes - a.votes)[0];
        
        if (nextSong) {
            this.currentSong = nextSong;
            this.currentTime = 0;
            this.updateCurrentSongDisplay();
            this.renderQueue();
            
            // Reset votes for the new current song
            nextSong.votes = 0;
            this.renderSongLibrary();
        }
    }
    
    previousSong() {
        // For demo, just go to a random song
        const randomIndex = Math.floor(Math.random() * this.songs.length);
        this.currentSong = this.songs[randomIndex];
        this.currentTime = 0;
        this.updateCurrentSongDisplay();
        this.renderQueue();
    }
    
    startProgressSimulation() {
        if (this.progressInterval) {
            clearInterval(this.progressInterval);
        }
        
        this.progressInterval = setInterval(() => {
            if (this.isPlaying) {
                this.currentTime++;
                const progress = (this.currentTime / this.duration) * 100;
                
                const progressBar = document.querySelector('.progress-bar');
                if (progressBar) {
                    progressBar.style.width = Math.min(progress, 100) + '%';
                }
                
                // Auto-next song when finished
                if (this.currentTime >= this.duration) {
                    this.nextSong();
                }
            }
        }, 1000);
    }
    
    setupEventListeners() {
        // Search functionality
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.filterSongs(e.target.value, document.getElementById('genreFilter').value);
        });
        
        document.getElementById('genreFilter').addEventListener('change', (e) => {
            this.filterSongs(document.getElementById('searchInput').value, e.target.value);
        });
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            switch(e.code) {
                case 'Space':
                    e.preventDefault();
                    this.togglePlay();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    this.nextSong();
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    this.previousSong();
                    break;
            }
        });
    }
    
    filterSongs(searchTerm, genre) {
        const container = document.getElementById('songLibrary');
        const songCards = container.querySelectorAll('.song-card');
        
        songCards.forEach((card, index) => {
            const song = this.songs[index];
            const matchesSearch = !searchTerm || 
                song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                song.artist.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesGenre = !genre || song.genre === genre;
            
            if (matchesSearch && matchesGenre) {
                card.style.display = 'block';
                anime({
                    targets: card,
                    opacity: [0, 1],
                    translateY: [20, 0],
                    duration: 300,
                    delay: index * 50
                });
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    simulateRealTimeUpdates() {
        // Simulate other users voting
        setInterval(() => {
            if (Math.random() < 0.3) { // 30% chance every 5 seconds
                const randomSong = this.songs[Math.floor(Math.random() * this.songs.length)];
                randomSong.votes += Math.floor(Math.random() * 3) + 1;
                this.renderSongLibrary();
                this.renderQueue();
            }
        }, 5000);
        
        // Update user count
        setInterval(() => {
            this.users += Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
            this.users = Math.max(1, Math.min(25, this.users));
            document.getElementById('userCount').textContent = this.users;
        }, 10000);
    }
}

// Global functions for HTML onclick handlers
function showQueue() {
    window.location.href = 'queue.html';
}

function showAdmin() {
    window.location.href = 'admin.html';
}

function togglePlay() {
    jukebox.togglePlay();
}

function nextSong() {
    jukebox.nextSong();
}

function previousSong() {
    jukebox.previousSong();
}

// Initialize jukebox when page loads
let jukebox;
document.addEventListener('DOMContentLoaded', () => {
    jukebox = new NeonJukebox();
});

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}