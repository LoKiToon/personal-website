const audio1 = new Audio('resources/bytebeats/SierpinskiHarmonyRemix.wav')
var player1 = document.getElementById("player1")

audio1.onended = function () {
    document.getElementById("state1").src = "resources/PlayIcon.svg"
}

player1.onclick = function () {
    if (audio1.paused) {
        audio1.play()
        document.getElementById("state1").src = "resources/PauseIcon.svg"
    } else {
        audio1.pause()
        document.getElementById("state1").src = "resources/PlayIcon.svg"
    }
}

const audio2 = new Audio('resources/bytebeats/ArcadeGame.wav')
var player2 = document.getElementById("player2")

audio2.onended = function () {
    document.getElementById("state2").src = "resources/PlayIcon.svg"
}

player2.onclick = function () {
    if (audio2.paused) {
        audio2.play()
        document.getElementById("state2").src = "resources/PauseIcon.svg"
    } else {
        audio2.pause()
        document.getElementById("state2").src = "resources/PlayIcon.svg"
    }
}

const audio3 = new Audio('resources/bytebeats/MiniBossFight.wav')
var player3 = document.getElementById("player3")

audio3.onended = function () {
    document.getElementById("state3").src = "resources/PlayIcon.svg"
}

player3.onclick = function () {
    if (audio3.paused) {
        audio3.play()
        document.getElementById("state3").src = "resources/PauseIcon.svg"
    } else {
        audio3.pause()
        document.getElementById("state3").src = "resources/PlayIcon.svg"
    }
}

const audio4 = new Audio('resources/bytebeats/SawGalore.wav')
var player4 = document.getElementById("player4")

audio4.onended = function () {
    document.getElementById("state4").src = "resources/PlayIcon.svg"
}

player4.onclick = function () {
    if (audio4.paused) {
        audio4.play()
        document.getElementById("state4").src = "resources/PauseIcon.svg"
    } else {
        audio4.pause()
        document.getElementById("state4").src = "resources/PlayIcon.svg"
    }
}

const audio5 = new Audio('resources/bytebeats/HarmonicTrance.wav')
var player5 = document.getElementById("player5")

audio5.onended = function () {
    document.getElementById("state5").src = "resources/PlayIcon.svg"
}

player5.onclick = function () {
    if (audio5.paused) {
        audio5.play()
        document.getElementById("state5").src = "resources/PauseIcon.svg"
    } else {
        audio5.pause()
        document.getElementById("state5").src = "resources/PlayIcon.svg"
    }
}

const audio6 = new Audio('resources/bytebeats/FakeBassSidechain.wav')
var player6 = document.getElementById("player6")

audio6.onended = function () {
    document.getElementById("state6").src = "resources/PlayIcon.svg"
}

player6.onclick = function () {
    if (audio6.paused) {
        audio6.play()
        document.getElementById("state6").src = "resources/PauseIcon.svg"
    } else {
        audio6.pause()
        document.getElementById("state6").src = "resources/PlayIcon.svg"
    }
}

const audio7 = new Audio('resources/bytebeats/Overexcited.wav')
var player7 = document.getElementById("player7")

audio7.onended = function () {
    document.getElementById("state7").src = "resources/PlayIcon.svg"
}

player7.onclick = function () {
    if (audio7.paused) {
        audio7.play()
        document.getElementById("state7").src = "resources/PauseIcon.svg"
    } else {
        audio7.pause()
        document.getElementById("state7").src = "resources/PlayIcon.svg"
    }
}

const audio8 = new Audio('resources/bytebeats/FactoryMusic.wav')
var player8 = document.getElementById("player8")

audio8.onended = function () {
    document.getElementById("state8").src = "resources/PlayIcon.svg"
}

player8.onclick = function () {
    if (audio8.paused) {
        audio8.play()
        document.getElementById("state8").src = "resources/PauseIcon.svg"
    } else {
        audio8.pause()
        document.getElementById("state8").src = "resources/PlayIcon.svg"
    }
}

const audio9 = new Audio('resources/bytebeats/PWMMusic.wav')
var player9 = document.getElementById("player9")

audio9.onended = function () {
    document.getElementById("state9").src = "resources/PlayIcon.svg"
}

player9.onclick = function () {
    if (audio9.paused) {
        audio9.play()
        document.getElementById("state9").src = "resources/PauseIcon.svg"
    } else {
        audio9.pause()
        document.getElementById("state9").src = "resources/PlayIcon.svg"
    }
}

const audio10 = new Audio('resources/bytebeats/RetroTrance.wav')
var player10 = document.getElementById("player10")

audio10.onended = function () {
    document.getElementById("state10").src = "resources/PlayIcon.svg"
}

player10.onclick = function () {
    if (audio10.paused) {
        audio10.play()
        document.getElementById("state10").src = "resources/PauseIcon.svg"
    } else {
        audio10.pause()
        document.getElementById("state10").src = "resources/PlayIcon.svg"
    }
}

const audio11 = new Audio('resources/bytebeats/RockMusic.wav')
var player11 = document.getElementById("player11")

audio11.onended = function () {
    document.getElementById("state11").src = "resources/PlayIcon.svg"
}

player11.onclick = function () {
    if (audio11.paused) {
        audio11.play()
        document.getElementById("state11").src = "resources/PauseIcon.svg"
    } else {
        audio11.pause()
        document.getElementById("state11").src = "resources/PlayIcon.svg"
    }
}

const audio12 = new Audio('resources/bytebeats/FunnyTune.wav')
var player12 = document.getElementById("player12")

audio12.onended = function () {
    document.getElementById("state12").src = "resources/PlayIcon.svg"
}

player12.onclick = function () {
    if (audio12.paused) {
        audio12.play()
        document.getElementById("state12").src = "resources/PauseIcon.svg"
    } else {
        audio12.pause()
        document.getElementById("state12").src = "resources/PlayIcon.svg"
    }
}