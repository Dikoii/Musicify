const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');

const userTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark').matches;

const iconToggle = () => {
  moonIcon.classList.toggle('display-none');
  sunIcon.classList.toggle('display-none');
};

const themeCheck = () => {
  if (userTheme == 'dark' || (!userTheme && systemTheme)) {
    document.documentElement.classList.remove('dark');
    moonIcon.classList.add('display-none');
    return;
  }
  sunIcon.classList.add('display-none');
};

const themeSwitch = () => {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    iconToggle();
    return;
  }
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
  iconToggle();
};

sunIcon.addEventListener('click', () => {
  themeSwitch();
});

moonIcon.addEventListener('click', () => {
  themeSwitch();
});

themeCheck();

const music = new Audio('./audio/1.mp3');

const songs = [
  {
    id: 1,
    songName: 'Just The Way You Are',
    songArtist: 'Bruno Mars',
    poster: 'img/1.jpeg',
  },
  {
    id: 2,
    songName: 'Minefields',
    songArtist: 'Faouzia, John Legend',
    poster: 'img/2.jpeg',
  },
];

const popularSong = [
  {
    id: 1,
    songName: 'Just The Way You Are',
    songArtist: 'Bruno Mars',
    poster: 'img/1.jpeg',
  },
  {
    id: 2,
    songName: 'Minefields',
    songArtist: 'Faouzia, John Legend',
    poster: 'img/2.jpeg',
  },
];

let arrow_left = document.getElementById('left-arrow');
let arrow_right = document.getElementById('right-arrow');
let popular_song = document.getElementsByClassName('popular-song')[0];
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');
let index = 0;
let poster_song = document.getElementById('poster-song');
let title = document.getElementById('title');
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementById('vol_bar');
let vol_dot = document.getElementById('vol_dot');
let back = document.getElementById('back');
let next = document.getElementById('next');

masterPlay.addEventListener('click', () => {
  if (music.paused || music.currentTime < 0) {
    music.play();
    wave.classList.add('active');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
  } else {
    music.pause();
    wave.classList.add('active');
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
  }
});

Array.from(document.getElementsByClassName('playlist')).forEach((e) => {
  e.addEventListener('click', (ind) => {
    index = ind.target.id;
    music.src = `audio/${index}.mp3`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let song = songs.find((s) => s.id == index);

    if (song) {
      const { songName, songArtist, poster } = song;
      title.innerHTML = songName;
      poster_song.src = poster;
      artist.textContent = songArtist;
    }
  });
});

music.addEventListener('timeupdate', () => {
  let music_current = music.currentTime;
  let music_duration = music.duration;

  let min1 = Math.floor(music_duration / 60);
  let sec1 = Math.floor(music_duration % 60);

  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  currentEnd.innerText = `${min1}:${sec1}`;

  let min2 = Math.floor(music_current / 60);
  let sec2 = Math.floor(music_current % 60);
  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }
  currentStart.innerText = `${min2}:${sec2}`;

  let progressBar = parseInt((music_current / music_duration) * 100);
  seek.value = progressBar;
  let seekBar = seek.value;
  bar2.style.width = `${seekBar}%`;
  dot.style.left = `${seekBar}%`;
});

vol.addEventListener('change', () => {
  if (vol.value == 0) {
    vol_icon.classList.remove('bi-volume-up-fill');
    vol_icon.classList.remove('bi-volume-down-fill');
    vol_icon.classList.add('bi-volume-off-fill');
  }

  if (vol.value > 0) {
    vol_icon.classList.remove('bi-volume-up-fill');
    vol_icon.classList.add('bi-volume-down-fill');
    vol_icon.classList.remove('bi-volume-off-fill');
  }

  if (vol.value > 50) {
    vol_icon.classList.add('bi-volume-up-fill');
    vol_icon.classList.remove('bi-volume-down-fill');
    vol_icon.classList.remove('bi-volume-off-fill');
  }

  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;
});

seek.addEventListener('change', () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

back.addEventListener('click', () => {
  index -= 1;
  if (index < 1) {
    index = Array.from(document.getElementsByClassName('songItem')).length;
  }

  music.src = `audio/${index}.mp3`;
  poster_song.src = `img/${index}.jpeg`;
  music.play();
  masterPlay.classList.remove('bi-play-fill');
  masterPlay.classList.add('bi-pause-fill');

  let song = songs.find((s) => s.id == index);

  if (song) {
    const { songName, songArtist, poster } = song;
    title.innerHTML = songName;
    poster_song.src = poster;
    artist.textContent = songArtist;
  }
});

next.addEventListener('click', () => {
  index += 1;
  if (index > 1) {
    index = 1;
  }

  music.src = `audio/${index}.mp3`;
  poster_song.src = `img/${index}.jpeg`;
  music.play();
  masterPlay.classList.remove('bi-play-fill');
  masterPlay.classList.add('bi-pause-fill');

  let song = songs.find((s) => s.id == index);

  if (song) {
    const { songName, songArtist, poster } = song;
    title.innerHTML = songName;
    poster_song.src = poster;
    artist.textContent = songArtist;
  }
});

arrow_right.addEventListener('click', () => {
  popular_song.scrollLeft += 330;
});

arrow_left.addEventListener('click', () => {
  popular_song.scrollLeft -= 330;
});

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
  e.getElementsByTagName('img')[0].src = songs[i].poster;
  e.getElementsByTagName('h5')[0].textContent = songs[i].songName;
  e.getElementsByTagName('a')[0].textContent = songs[i].songArtist;
});

Array.from(document.getElementsByClassName('songPopular')).forEach((e, i) => {
  e.getElementsByTagName('img')[0].src = popularSong[i].poster;
  e.getElementsByTagName('h5')[0].textContent = popularSong[i].songName;
  e.getElementsByTagName('a')[0].textContent = popularSong[i].songArtist;
});
