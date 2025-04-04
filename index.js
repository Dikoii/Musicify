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

const music = new Audio('/audio/1.mp3');

const songs = [
  {
    id: 1,
    songName: 'Just The Way You Are',
    songArtist: 'Bruno Mars',
    poster: '/img/1.jpeg',
  },
  {
    id: 2,
    songName: 'Minefields',
    songArtist: 'Faouzia, John Legend',
    poster: '/img/2.jpeg',
  },
  {
    id: 3,
    songName: '8 Letters',
    songArtist: "Why Don't We",
    poster: '/img/3.jpg',
  },
  {
    id: 4,
    songName: "Here's Your Perfect",
    songArtist: 'Jammie Miller',
    poster: '/img/4.jpg',
  },
  {
    id: 5,
    songName: 'Impossible',
    songArtist: 'James Arthur',
    poster: '/img/5.jpg',
  },
  {
    id: 6,
    songName: 'Arcade',
    songArtist: 'Duncan Laurence',
    poster: '/img/6.jpg',
  },
  {
    id: 7,
    songName: 'Dusk Till Dawn',
    songArtist: 'Zayn, Sia',
    poster: '/img/7.jpg',
  },
  {
    id: 8,
    songName: 'It Will Rain',
    songArtist: 'Bruno Mars',
    poster: '/img/8.png',
  },
  {
    id: 9,
    songName: 'Drunk Text',
    songArtist: 'Henry Moodie',
    poster: '/img/9.jpg',
  },
  {
    id: 10,
    songName: 'Blinding Lights',
    songArtist: 'The Weeknd',
    poster: '/img/10.png',
  },
  {
    id: 11,
    songName: 'Someone You Loved',
    songArtist: 'Lewis Capaldi',
    poster: '/img/11.jpg',
  },
  {
    id: 12,
    songName: 'Stuck In The Middle',
    songArtist: 'Babymonster',
    poster: '/img/12.jpg',
  },
  {
    id: 13,
    songName: 'Heat Waves',
    songArtist: 'Glass Animal',
    poster: '/img/13.png',
  },
  {
    id: 14,
    songName: '12:45 - Stripped',
    songArtist: 'Etham',
    poster: '/img/14.jpg',
  },
  {
    id: 15,
    songName: 'Am I Wrong',
    songArtist: 'Nico & Vinz',
    poster: '/img/15.png',
  },
  {
    id: 16,
    songName: 'Dandelions',
    songArtist: 'Ruth B',
    poster: '/img/16.jpg',
  },
  {
    id: 17,
    songName: 'Me And My Broken Heart',
    songArtist: 'Rixton',
    poster: '/img/17.jpg',
  },
  {
    id: 18,
    songName: '7 Years',
    songArtist: 'Lukas Graham',
    poster: '/img/18.jpg',
  },
  {
    id: 19,
    songName: 'Be Alright',
    songArtist: 'Dean Lewis',
    poster: '/img/19.jpg',
  },
  {
    id: 20,
    songName: 'Santa Tell Me Cover',
    songArtist: 'Fromis_9',
    poster: '/img/20.jpg',
  },
  {
    id: 21,
    songName: 'The Reason Of My Smiles',
    songArtist: 'BSS',
    poster: '/img/21.jpg',
  },
  {
    id: 22,
    songName: 'All About You',
    songArtist: 'Taeyeon',
    poster: '/img/22.jpg',
  },
  {
    id: 23,
    songName: 'All With You',
    songArtist: 'Taeyeon',
    poster: '/img/23.jpg',
  },
  {
    id: 24,
    songName: 'Beautiful',
    songArtist: 'Crush',
    poster: '/img/24.jpg',
  },
  {
    id: 25,
    songName: 'Future',
    songArtist: 'Red Velvet',
    poster: '/img/25.jpg',
  },
  {
    id: 26,
    songName: 'Here I Am Again',
    songArtist: 'Yerin Baek',
    poster: '/img/26.jpg',
  },
  {
    id: 27,
    songName: 'This Love',
    songArtist: 'Davichi',
    poster: '/img/27.jpg',
  },
  {
    id: 28,
    songName: 'Grown Ups',
    songArtist: 'Sondia',
    poster: '/img/28.jpg',
  },
  {
    id: 29,
    songName: 'Last Chance',
    songArtist: 'So Soo bin',
    poster: '/img/29.jpg',
  },
  {
    id: 30,
    songName: 'Dream',
    songArtist: 'Taeyeon',
    poster: '/img/30.jpg',
  },
];

let arrow_left = document.getElementById('left-arrow');
let arrow_right = document.getElementById('right-arrow');
let arrow_lefts = document.getElementById('left-arrows');
let arrow_rights = document.getElementById('right-arrows');
let popular_song = document.getElementsByClassName('popular-song')[0];
let ost_song = document.getElementsByClassName('ost-song')[0];
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
const formats = ['png', 'jpg', 'jpeg'];

masterPlay.addEventListener('click', () => {
  if (music.paused || music.currentTime < 0) {
    music.play();

    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
  } else {
    music.pause();

    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
  }
});

Array.from(document.getElementsByClassName('playlist')).forEach((e) => {
  e.addEventListener('click', (ind) => {
    index = ind.target.id;
    console.log(index + ' clicked');
    music.src = `/audio/${index}.mp3`;
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

music.addEventListener('ended', () => {
  if (index >= songs.length - 1) {
    index = 0;
  } else {
    index++;
  }
  console.log(index + 'ended');

  music.src = `/audio/${songs[index].id}.mp3`;
  poster_song.src = `/img/${songs[index].id}.${formats}`;
  music.play();
  masterPlay.classList.remove('bi-play-fill');
  masterPlay.classList.add('bi-pause-fill');

  let song = songs.find((s) => s.id === songs[index].id);

  if (song) {
    const { songName, songArtist, poster } = song;
    title.innerHTML = songName;
    poster_song.src = poster;
    artist.textContent = songArtist;
  }
});

const playButton = document.getElementById('playButton');

playButton.addEventListener('click', () => {
  const index = 0;

  music.src = `/audio/${songs[index].id}.mp3`;

  let posterPath;
  const song = songs.find((s) => s.id === songs[index].id);
  if (song) {
    const { songName, songArtist, poster } = song;
    title.innerHTML = songName;
    artist.textContent = songArtist;

    for (let ext of formats) {
      const path = `/img/${songs[index].id}.${ext}`;
      const img = new Image();
      img.src = path;
      img.onload = () => {
        posterPath = path;
        poster_song.src = posterPath;
      };
    }
  }

  music.play();
  masterPlay.classList.remove('bi-play-fill');
  masterPlay.classList.add('bi-pause-fill');
});

vol.addEventListener('change', () => {
  if (vol.value == 0) {
    vol_icon.classList.remove('bi-volume-up-fill');
    vol_icon.classList.remove('bi-volume-down-fill');
    vol_icon.classList.add('bi-volume-mute-fill');
  }

  if (vol.value > 0) {
    vol_icon.classList.remove('bi-volume-up-fill');
    vol_icon.classList.add('bi-volume-down-fill');
    vol_icon.classList.remove('bi-volume-mute-fill');
  }

  if (vol.value > 50) {
    vol_icon.classList.add('bi-volume-up-fill');
    vol_icon.classList.remove('bi-volume-down-fill');
    vol_icon.classList.remove('bi-volume-mute-fill');
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
  index--;
  console.log(index + ' back');
  if (index < 0) {
    index = songs.length - 1;
  }

  music.src = `/audio/${songs[index].id}.mp3`;
  poster_song.src = `/img/${songs[index].id}.${formats}`;
  music.play();
  masterPlay.classList.remove('bi-play-fill');
  masterPlay.classList.add('bi-pause-fill');

  let song = songs.find((s) => s.id === songs[index].id);

  if (song) {
    const { songName, songArtist, poster } = song;
    title.innerHTML = songName;
    poster_song.src = poster;
    artist.textContent = songArtist;
  }
});

next.addEventListener('click', () => {
  index++;
  console.log(index + ' next');
  if (index >= songs.length) {
    index = 0;
  }

  music.src = `/audio/${songs[index].id}.mp3`;
  poster_song.src = `/img/${songs[index].id}.${formats}`;
  music.play();
  masterPlay.classList.remove('bi-play-fill');
  masterPlay.classList.add('bi-pause-fill');

  let song = songs.find((s) => s.id === songs[index].id);

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

arrow_rights.addEventListener('click', () => {
  ost_song.scrollLeft += 330;
});

arrow_lefts.addEventListener('click', () => {
  ost_song.scrollLeft -= 330;
});

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
  e.getElementsByTagName('img')[0].src = songs[i].poster;
  e.getElementsByTagName('h5')[0].textContent = songs[i].songName;
  e.getElementsByTagName('a')[0].textContent = songs[i].songArtist;
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    event.preventDefault();
    if (music.paused || music.currentTime < 0) {
      music.play();
      masterPlay.classList.remove('bi-play-fill');
      masterPlay.classList.add('bi-pause-fill');
    } else {
      music.pause();
      masterPlay.classList.add('bi-play-fill');
      masterPlay.classList.remove('bi-pause-fill');
    }
  }
});
