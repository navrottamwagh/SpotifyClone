
let  songIndex= 0;
let audioElement = new Audio('/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let btn = document.getElementsByClassName("songItemPlay");
let currentName = document.getElementById("currentName");
let song = [
    { songName: "Believer", filePath: "1.mp3", coverPath: "/2.jpg" },
    { songName: "Decpacito", filePath: "2.mp3", coverPath: "https://i.scdn.co/image/ab67616d0000b273ef0d4234e1a645740f77d59c" },
    { songName: "Peaches", filePath: "3.mp3", coverPath: "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/nwd5pvclgnrjizmagf1b/justin-bieber-justice-album-cover?fimg-ssr-default" },
    { songName: "No Love", filePath: "4.mp3", coverPath: "https://i.ytimg.com/vi/6RrEQJNZwPQ/maxresdefault.jpg" },
    { songName: "Senorita", filePath: "5.mp3", coverPath: "https://i.ytimg.com/vi/tcrTQUVkUe0/maxresdefault.jpg" }
]

 songItems.forEach((element, i)=>{
     console.log(element, i);
    element.getElementsByTagName("img")[0].src = song[i].coverPath;
     element.getElementsByClassName("songName1")[0].innerText = song[i].songName; //songItemPlay
    
})

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        btn.classList.remove('fa-circle-play');
        btn.classList.add('fa-circle-pause');
       
        gif.style.opacity = 1;
    } else {
         audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
         btn.classList.add('fa-circle-play');
        btn.classList.remove('fa-circle-pause');
      
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
   
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('click', ()=> {
    audioElement.currentTime = audioElement.duration * myProgressBar.value / 100;
})
playAllSomgs = () => {
   Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove('fa-circle-pause');
       element.classList.add('fa-circle-play');
       
    })
}

//audioElement.play();
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        playAllSomgs();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
      
        audioElement.src = `/${songIndex + 1}.mp3`;
        currentName.innerText = song[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');
    })
})

document.getElementById("next").addEventListener('click', () => {
    if (songIndex >= 5) {
        songIndex = 0;
    } else {
        songIndex += 1;
        
    }
        audioElement.src = `/${songIndex + 1}.mp3`;
        currentName.innerText = song[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');
        btn.classList.add('fa-circle-pause');
        btn.classList.remove('fa-circle-play');
       
})

document.getElementById("previous").addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
      
    }
        audioElement.src = `/${songIndex + 1}.mp3`;
        currentName.innerText = song[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');
        btn.classList.add('fa-circle-pause');
        btn.classList.remove('fa-circle-play');
})

