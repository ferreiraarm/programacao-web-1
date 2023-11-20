let power = false;
let channel = 1;
let volume = 50;
let playing = true;
let prevandnext = 0;

function togglePower() {
    power = !power;
    updateScreen();
    updateRemoteButtons();
}

function handleRemoteClick(event) {
    const clickedElement = document.elementFromPoint(event.clientX, event.clientY);
    if (clickedElement.tagName === 'IMG') {
        // Simula o clique no botão de ligar/desligar ao clicar na imagem
        togglePower();
    }
}
/*
function maisv() {
    if (power) {
        const videoSource = document.getElementById('videoSource');
        console.log(videoSource);
        videoSource.currentTime += 10;
        updateScreen();
    }
}
function menosv() {
    if (power) {
        const videoSource = document.getElementById('videoSource');
        console.log(videoSource);
        videoSource.currentTime -= 10;
        updateScreen();
    }
}*/

function changeChannel(newChannel) {
    if (power) {
        channel = newChannel;
        updateScreen();
    }
}

function UpChannel() {
    if (power && channel < 9) {
        this.channel = channel++;
        console.log(channel);
        updateScreen();
    }
}

function DownChannel() {
    if (power && channel > 1) {
        this.channel = channel--;
        console.log(channel);
        updateScreen();
    }
}

function toggleVolume(direction) {
    if (power) {
        if (direction === 'up' && volume < 100) {
            volume += 10;
        } else if (direction === 'down' && volume > 0) {
            volume -= 10;
        }
        updateScreen();
    }
}

function togglePlayPause() {
    if (power) {
        playing = !playing;
        updateScreen();
    }
}

function updateScreen() {
    const videoSource = document.getElementById('videoSource');
    const videoScreen = document.getElementById('videoScreen');

    if (power) {
        const videoUrl = `/videos/vd${channel}.mp4`;
        videoSource.src = videoUrl;
        videoScreen.load();
        videoScreen.volume = volume / 100;
        playing ? videoScreen.play() : videoScreen.pause();
    } else {
        videoSource.src = '';
        videoScreen.load();
    }
}

function updateRemoteButtons() {
    const remoteButtons = document.querySelectorAll('.controls button');
    remoteButtons.forEach(button => {
        button.disabled = !power;
    });
}

// Função chamada ao clicar na imagem do controle remoto


updateScreen();
updateRemoteButtons();
