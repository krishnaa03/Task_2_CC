const music = new Audio("assets/audio/a1.mp3");
//music.play();

const songs = [
    {
        id:"1",
        songName: `Not Like Us <br>
        <div class="subtitle">Kendrick Lamar</div>`,
        poster:"assets/images/i2.jpeg",
    },
    {
        id:"2",
        songName: `Million Dollar Baby <br>
        <div class="subtitle">Tommy Richman</div>`,
        poster:"assets/images/i1.jpeg",
    },
    {
        id:"3",
        songName: `Hanuman Chalisa <br>
        <div class="subtitle">Hariharan</div>`,
        poster:"assets/images/i3.jpeg",
    },
    {
        id:"4",
        songName: `Wishes <br>
        <div class="subtitle">Umair ft.Talwiinder</div>`,
        poster:"assets/images/i4.jpeg",
    },
    {
        id:"5",
        songName: `Tujhko Jo Paaya <br>
        <div class="subtitle">Pritam , Mohit Chauhan</div>`,
        poster:"assets/images/i5.jpeg",
    },
    {
        id:"6",
        songName: `Godzilla(feat. Juice WRLD) <br>
        <div class="subtitle">Eminem , Juice WRLD</div>`,
        poster:"assets/images/i6.jpeg",
    },
    {
        id:"7",
        songName: `nadaaniyan <br>
        <div class="subtitle">Akshath</div>`,
        poster:"assets/images/i7.jpeg",
    },
    {
        id:"8",
        songName: `Tu Hai Kahan <br>
        <div class="subtitle">AUR</div>` ,
        poster:"assets/images/i8.jpeg",
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[10].songName;
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-pause-fill');
        
    }else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-pause-fill');

    }
})

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let popsong = document.getElementsByClassName('popsong')[0];

pop_song_right.addEventListener('click', () =>{
    pop_song.scrollLeft +=330;
})
pop_song_left.addEventListener('click', () =>{
    pop_song.scrollLeft -=330;
})

let index = 0;
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index = el.target.id;
        //console.log(index)
        music.src = `assets/audio/${index}.mp3`;
        poster_master_play.src=`assets/images/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        let songTitles = song.filter((els) =>{
            return els.id == index;
        })
        songTitles.forEach(elss =>{
            let{songName , poster} = elss;
            title.innerHTML = songName;
            poster_master_play.src = poster;
        })
    })
})
