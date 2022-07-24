//Snowscarf
//Preload images
for (i=2;i<=14;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Snowscarf/SnowscarfEyeL${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
for (i=2;i<=14;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Snowscarf/SnowscarfEyeR${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
for (i=2;i<=14;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Snowscarf/SnowscarfMouth${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
var SnowscarfEyeLVari = document.getElementById("SnowscarfEyeLVari")
var SnowscarfEyeRVari = document.getElementById("SnowscarfEyeRVari")
var SnowscarfMouthVari = document.getElementById("SnowscarfMouthVari")

SnowscarfEyeLVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("SnowscarfEyeL").src = "resources/faces/Snowscarf/SnowscarfEyeL1.png"
    }
    else if (this.value == 2) {
        document.getElementById("SnowscarfEyeL").src = "resources/faces/Snowscarf/SnowscarfEyeL2.png"
    }
    else if (this.value == 3) {
        document.getElementById("SnowscarfEyeL").src = "resources/faces/Snowscarf/SnowscarfEyeL3.png"
    }
    else if (this.value == 4) {
        document.getElementById("SnowscarfEyeL").src = "resources/faces/Snowscarf/SnowscarfEyeL4.png"
    }
    else if (this.value == 5) {
        document.getElementById("SnowscarfEyeL").src = "resources/faces/Snowscarf/SnowscarfEyeL5.png"
    }
    else if (this.value == 6) {
        document.getElementById("SnowscarfEyeL").src = "resources/faces/Snowscarf/SnowscarfEyeL6.png"
    }
    else if (this.value == 7) {
        document.getElementById("SnowscarfEyeL").src = "resources/faces/Snowscarf/SnowscarfEyeL7.png"
    }
    else if (this.value == 8) {
        document.getElementById("SnowscarfEyeL").src = "resources/faces/Snowscarf/SnowscarfEyeL8.png"
    }
    else if (this.value == 9) {
        document.getElementById("SnowscarfEyeL").src = "resources/faces/Snowscarf/SnowscarfEyeL9.png"
    }
    else if (this.value == 10) {
        document.getElementById("SnowscarfEyeL").src = "resources/faces/Snowscarf/SnowscarfEyeL10.png"
    }
    else if (this.value == 11) {
        document.getElementById("SnowscarfEyeL").src = "resources/faces/Snowscarf/SnowscarfEyeL11.png"
    }
    else if (this.value == 12) {
        document.getElementById("SnowscarfEyeL").src = "resources/faces/Snowscarf/SnowscarfEyeL12.png"
    }
    else if (this.value == 13) {
        document.getElementById("SnowscarfEyeL").src = "resources/faces/Snowscarf/SnowscarfEyeL13.png"
    }
    else {
        document.getElementById("SnowscarfEyeL").src = "resources/faces/Snowscarf/SnowscarfEyeL14.png"
    }
}

SnowscarfEyeRVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("SnowscarfEyeR").src = "resources/faces/Snowscarf/SnowscarfEyeR1.png"
    }
    else if (this.value == 2) {
        document.getElementById("SnowscarfEyeR").src = "resources/faces/Snowscarf/SnowscarfEyeR2.png"
    }
    else if (this.value == 3) {
        document.getElementById("SnowscarfEyeR").src = "resources/faces/Snowscarf/SnowscarfEyeR3.png"
    }
    else if (this.value == 4) {
        document.getElementById("SnowscarfEyeR").src = "resources/faces/Snowscarf/SnowscarfEyeR4.png"
    }
    else if (this.value == 5) {
        document.getElementById("SnowscarfEyeR").src = "resources/faces/Snowscarf/SnowscarfEyeR5.png"
    }
    else if (this.value == 6) {
        document.getElementById("SnowscarfEyeR").src = "resources/faces/Snowscarf/SnowscarfEyeR6.png"
    }
    else if (this.value == 7) {
        document.getElementById("SnowscarfEyeR").src = "resources/faces/Snowscarf/SnowscarfEyeR7.png"
    }
    else if (this.value == 8) {
        document.getElementById("SnowscarfEyeR").src = "resources/faces/Snowscarf/SnowscarfEyeR8.png"
    }
    else if (this.value == 9) {
        document.getElementById("SnowscarfEyeR").src = "resources/faces/Snowscarf/SnowscarfEyeR9.png"
    }
    else if (this.value == 10) {
        document.getElementById("SnowscarfEyeR").src = "resources/faces/Snowscarf/SnowscarfEyeR10.png"
    }
    else if (this.value == 11) {
        document.getElementById("SnowscarfEyeR").src = "resources/faces/Snowscarf/SnowscarfEyeR11.png"
    }
    else if (this.value == 12) {
        document.getElementById("SnowscarfEyeR").src = "resources/faces/Snowscarf/SnowscarfEyeR12.png"
    }
    else if (this.value == 13) {
        document.getElementById("SnowscarfEyeR").src = "resources/faces/Snowscarf/SnowscarfEyeR13.png"
    }
    else {
        document.getElementById("SnowscarfEyeR").src = "resources/faces/Snowscarf/SnowscarfEyeR14.png"
    }
}

SnowscarfMouthVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("SnowscarfMouth").src = "resources/faces/Snowscarf/SnowscarfMouth1.png"
    }
    else if (this.value == 2) {
        document.getElementById("SnowscarfMouth").src = "resources/faces/Snowscarf/SnowscarfMouth2.png"
    }
    else if (this.value == 3) {
        document.getElementById("SnowscarfMouth").src = "resources/faces/Snowscarf/SnowscarfMouth3.png"
    }
    else if (this.value == 4) {
        document.getElementById("SnowscarfMouth").src = "resources/faces/Snowscarf/SnowscarfMouth4.png"
    }
    else if (this.value == 5) {
        document.getElementById("SnowscarfMouth").src = "resources/faces/Snowscarf/SnowscarfMouth5.png"
    }
    else if (this.value == 6) {
        document.getElementById("SnowscarfMouth").src = "resources/faces/Snowscarf/SnowscarfMouth6.png"
    }
    else if (this.value == 7) {
        document.getElementById("SnowscarfMouth").src = "resources/faces/Snowscarf/SnowscarfMouth7.png"
    }
    else if (this.value == 8) {
        document.getElementById("SnowscarfMouth").src = "resources/faces/Snowscarf/SnowscarfMouth8.png"
    }
    else if (this.value == 9) {
        document.getElementById("SnowscarfMouth").src = "resources/faces/Snowscarf/SnowscarfMouth9.png"
    }
    else if (this.value == 10) {
        document.getElementById("SnowscarfMouth").src = "resources/faces/Snowscarf/SnowscarfMouth10.png"
    }
    else if (this.value == 11) {
        document.getElementById("SnowscarfMouth").src = "resources/faces/Snowscarf/SnowscarfMouth11.png"
    }
    else if (this.value == 12) {
        document.getElementById("SnowscarfMouth").src = "resources/faces/Snowscarf/SnowscarfMouth12.png"
    }
    else if (this.value == 13) {
        document.getElementById("SnowscarfMouth").src = "resources/faces/Snowscarf/SnowscarfMouth13.png"
    }
    else {
        document.getElementById("SnowscarfMouth").src = "resources/faces/Snowscarf/SnowscarfMouth14.png"
    }
}
//Joshy
//Preload images
for (i=2;i<=10;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Joshy/JoshyEyeL${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
for (i=2;i<=10;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Joshy/JoshyEyeR${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
for (i=2;i<=10;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Joshy/JoshyMouth${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
var JoshyEyeLVari = document.getElementById("JoshyEyeLVari")
var JoshyEyeRVari = document.getElementById("JoshyEyeRVari")
var JoshyMouthVari = document.getElementById("JoshyMouthVari")

JoshyEyeLVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("JoshyEyeL").src = "resources/faces/Joshy/JoshyEyeL1.png"
    }
    else if (this.value == 2) {
        document.getElementById("JoshyEyeL").src = "resources/faces/Joshy/JoshyEyeL2.png"
    }
    else if (this.value == 3) {
        document.getElementById("JoshyEyeL").src = "resources/faces/Joshy/JoshyEyeL3.png"
    }
    else if (this.value == 4) {
        document.getElementById("JoshyEyeL").src = "resources/faces/Joshy/JoshyEyeL4.png"
    }
    else if (this.value == 5) {
        document.getElementById("JoshyEyeL").src = "resources/faces/Joshy/JoshyEyeL5.png"
    }
    else if (this.value == 6) {
        document.getElementById("JoshyEyeL").src = "resources/faces/Joshy/JoshyEyeL6.png"
    }
    else if (this.value == 7) {
        document.getElementById("JoshyEyeL").src = "resources/faces/Joshy/JoshyEyeL7.png"
    }
    else if (this.value == 8) {
        document.getElementById("JoshyEyeL").src = "resources/faces/Joshy/JoshyEyeL8.png"
    }
    else if (this.value == 9) {
        document.getElementById("JoshyEyeL").src = "resources/faces/Joshy/JoshyEyeL9.png"
    }
    else {
        document.getElementById("JoshyEyeL").src = "resources/faces/Joshy/JoshyEyeL10.png"
    }
}

JoshyEyeRVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("JoshyEyeR").src = "resources/faces/Joshy/JoshyEyeR1.png"
    }
    else if (this.value == 2) {
        document.getElementById("JoshyEyeR").src = "resources/faces/Joshy/JoshyEyeR2.png"
    }
    else if (this.value == 3) {
        document.getElementById("JoshyEyeR").src = "resources/faces/Joshy/JoshyEyeR3.png"
    }
    else if (this.value == 4) {
        document.getElementById("JoshyEyeR").src = "resources/faces/Joshy/JoshyEyeR4.png"
    }
    else if (this.value == 5) {
        document.getElementById("JoshyEyeR").src = "resources/faces/Joshy/JoshyEyeR5.png"
    }
    else if (this.value == 6) {
        document.getElementById("JoshyEyeR").src = "resources/faces/Joshy/JoshyEyeR6.png"
    }
    else if (this.value == 7) {
        document.getElementById("JoshyEyeR").src = "resources/faces/Joshy/JoshyEyeR7.png"
    }
    else if (this.value == 8) {
        document.getElementById("JoshyEyeR").src = "resources/faces/Joshy/JoshyEyeR8.png"
    }
    else if (this.value == 9) {
        document.getElementById("JoshyEyeR").src = "resources/faces/Joshy/JoshyEyeR9.png"
    }
    else {
        document.getElementById("JoshyEyeR").src = "resources/faces/Joshy/JoshyEyeR10.png"
    }
}

JoshyMouthVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("JoshyMouth").src = "resources/faces/Joshy/JoshyMouth1.png"
    }
    else if (this.value == 2) {
        document.getElementById("JoshyMouth").src = "resources/faces/Joshy/JoshyMouth2.png"
    }
    else if (this.value == 3) {
        document.getElementById("JoshyMouth").src = "resources/faces/Joshy/JoshyMouth3.png"
    }
    else if (this.value == 4) {
        document.getElementById("JoshyMouth").src = "resources/faces/Joshy/JoshyMouth4.png"
    }
    else if (this.value == 5) {
        document.getElementById("JoshyMouth").src = "resources/faces/Joshy/JoshyMouth5.png"
    }
    else if (this.value == 6) {
        document.getElementById("JoshyMouth").src = "resources/faces/Joshy/JoshyMouth6.png"
    }
    else if (this.value == 7) {
        document.getElementById("JoshyMouth").src = "resources/faces/Joshy/JoshyMouth7.png"
    }
    else if (this.value == 8) {
        document.getElementById("JoshyMouth").src = "resources/faces/Joshy/JoshyMouth8.png"
    }
    else if (this.value == 9) {
        document.getElementById("JoshyMouth").src = "resources/faces/Joshy/JoshyMouth9.png"
    }
    else {
        document.getElementById("JoshyMouth").src = "resources/faces/Joshy/JoshyMouth10.png"
    }
}
//Faux
//Preload images
for (i=2;i<=8;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Faux/FauxEye${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
for (i=2;i<=8;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Faux/FauxMouth${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
var FauxEyeVari = document.getElementById("FauxEyeVari")
var FauxMouthVari = document.getElementById("FauxMouthVari")

FauxEyeVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("FauxEye").src = "resources/faces/Faux/FauxEye1.png"
    }
    else if (this.value == 2) {
        document.getElementById("FauxEye").src = "resources/faces/Faux/FauxEye2.png"
    }
    else if (this.value == 3) {
        document.getElementById("FauxEye").src = "resources/faces/Faux/FauxEye3.png"
    }
    else if (this.value == 4) {
        document.getElementById("FauxEye").src = "resources/faces/Faux/FauxEye4.png"
    }
    else if (this.value == 5) {
        document.getElementById("FauxEye").src = "resources/faces/Faux/FauxEye5.png"
    }
    else if (this.value == 6) {
        document.getElementById("FauxEye").src = "resources/faces/Faux/FauxEye6.png"
    }
    else if (this.value == 7) {
        document.getElementById("FauxEye").src = "resources/faces/Faux/FauxEye7.png"
    }
    else {
        document.getElementById("FauxEye").src = "resources/faces/Faux/FauxEye8.png"
    }
}

FauxMouthVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("FauxMouth").src = "resources/faces/Faux/FauxMouth1.png"
    }
    else if (this.value == 2) {
        document.getElementById("FauxMouth").src = "resources/faces/Faux/FauxMouth2.png"
    }
    else if (this.value == 3) {
        document.getElementById("FauxMouth").src = "resources/faces/Faux/FauxMouth3.png"
    }
    else if (this.value == 4) {
        document.getElementById("FauxMouth").src = "resources/faces/Faux/FauxMouth4.png"
    }
    else if (this.value == 5) {
        document.getElementById("FauxMouth").src = "resources/faces/Faux/FauxMouth5.png"
    }
    else if (this.value == 6) {
        document.getElementById("FauxMouth").src = "resources/faces/Faux/FauxMouth6.png"
    }
    else if (this.value == 7) {
        document.getElementById("FauxMouth").src = "resources/faces/Faux/FauxMouth7.png"
    }
    else {
        document.getElementById("FauxMouth").src = "resources/faces/Faux/FauxMouth8.png"
    }
}
//Snowball
//Preload images
for (i=2;i<=8;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Snowball/SnowballEye${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
for (i=2;i<=8;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Snowball/SnowballMouth${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
var SnowballEyeVari = document.getElementById("SnowballEyeVari")
var SnowballMouthVari = document.getElementById("SnowballMouthVari")

SnowballEyeVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("SnowballEye").src = "resources/faces/Snowball/SnowballEye1.png"
    }
    else if (this.value == 2) {
        document.getElementById("SnowballEye").src = "resources/faces/Snowball/SnowballEye2.png"
    }
    else if (this.value == 3) {
        document.getElementById("SnowballEye").src = "resources/faces/Snowball/SnowballEye3.png"
    }
    else if (this.value == 4) {
        document.getElementById("SnowballEye").src = "resources/faces/Snowball/SnowballEye4.png"
    }
    else if (this.value == 5) {
        document.getElementById("SnowballEye").src = "resources/faces/Snowball/SnowballEye5.png"
    }
    else if (this.value == 6) {
        document.getElementById("SnowballEye").src = "resources/faces/Snowball/SnowballEye6.png"
    }
    else if (this.value == 7) {
        document.getElementById("SnowballEye").src = "resources/faces/Snowball/SnowballEye7.png"
    }
    else {
        document.getElementById("SnowballEye").src = "resources/faces/Snowball/SnowballEye8.png"
    }
}

SnowballMouthVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("SnowballMouth").src = "resources/faces/Snowball/SnowballMouth1.png"
    }
    else if (this.value == 2) {
        document.getElementById("SnowballMouth").src = "resources/faces/Snowball/SnowballMouth2.png"
    }
    else if (this.value == 3) {
        document.getElementById("SnowballMouth").src = "resources/faces/Snowball/SnowballMouth3.png"
    }
    else if (this.value == 4) {
        document.getElementById("SnowballMouth").src = "resources/faces/Snowball/SnowballMouth4.png"
    }
    else if (this.value == 5) {
        document.getElementById("SnowballMouth").src = "resources/faces/Snowball/SnowballMouth5.png"
    }
    else if (this.value == 6) {
        document.getElementById("SnowballMouth").src = "resources/faces/Snowball/SnowballMouth6.png"
    }
    else if (this.value == 7) {
        document.getElementById("SnowballMouth").src = "resources/faces/Snowball/SnowballMouth7.png"
    }
    else {
        document.getElementById("SnowballMouth").src = "resources/faces/Snowball/SnowballMouth8.png"
    }
}
//Aqha
//Preload images
for (i=2;i<=8;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Aqha/AqhaEye${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
for (i=2;i<=8;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Aqha/AqhaMouth${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
var AqhaEyeVari = document.getElementById("AqhaEyeVari")
var AqhaMouthVari = document.getElementById("AqhaMouthVari")

AqhaEyeVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("AqhaEye").src = "resources/faces/Aqha/AqhaEye1.png"
    }
    else if (this.value == 2) {
        document.getElementById("AqhaEye").src = "resources/faces/Aqha/AqhaEye2.png"
    }
    else if (this.value == 3) {
        document.getElementById("AqhaEye").src = "resources/faces/Aqha/AqhaEye3.png"
    }
    else if (this.value == 4) {
        document.getElementById("AqhaEye").src = "resources/faces/Aqha/AqhaEye4.png"
    }
    else if (this.value == 5) {
        document.getElementById("AqhaEye").src = "resources/faces/Aqha/AqhaEye5.png"
    }
    else if (this.value == 6) {
        document.getElementById("AqhaEye").src = "resources/faces/Aqha/AqhaEye6.png"
    }
    else if (this.value == 7) {
        document.getElementById("AqhaEye").src = "resources/faces/Aqha/AqhaEye7.png"
    }
    else {
        document.getElementById("AqhaEye").src = "resources/faces/Aqha/AqhaEye8.png"
    }
}

AqhaMouthVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("AqhaMouth").src = "resources/faces/Aqha/AqhaMouth1.png"
    }
    else if (this.value == 2) {
        document.getElementById("AqhaMouth").src = "resources/faces/Aqha/AqhaMouth2.png"
    }
    else if (this.value == 3) {
        document.getElementById("AqhaMouth").src = "resources/faces/Aqha/AqhaMouth3.png"
    }
    else if (this.value == 4) {
        document.getElementById("AqhaMouth").src = "resources/faces/Aqha/AqhaMouth4.png"
    }
    else if (this.value == 5) {
        document.getElementById("AqhaMouth").src = "resources/faces/Aqha/AqhaMouth5.png"
    }
    else if (this.value == 6) {
        document.getElementById("AqhaMouth").src = "resources/faces/Aqha/AqhaMouth6.png"
    }
    else if (this.value == 7) {
        document.getElementById("AqhaMouth").src = "resources/faces/Aqha/AqhaMouth7.png"
    }
    else {
        document.getElementById("AqhaMouth").src = "resources/faces/Aqha/AqhaMouth8.png"
    }
}
//Jam
//Preload images
for (i=2;i<=8;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Jam/JamEye${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
for (i=2;i<=8;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Jam/JamMouth${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
var JamEyeVari = document.getElementById("JamEyeVari")
var JamMouthVari = document.getElementById("JamMouthVari")

JamEyeVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("JamEye").src = "resources/faces/Jam/JamEye1.png"
    }
    else if (this.value == 2) {
        document.getElementById("JamEye").src = "resources/faces/Jam/JamEye2.png"
    }
    else if (this.value == 3) {
        document.getElementById("JamEye").src = "resources/faces/Jam/JamEye3.png"
    }
    else if (this.value == 4) {
        document.getElementById("JamEye").src = "resources/faces/Jam/JamEye4.png"
    }
    else if (this.value == 5) {
        document.getElementById("JamEye").src = "resources/faces/Jam/JamEye5.png"
    }
    else if (this.value == 6) {
        document.getElementById("JamEye").src = "resources/faces/Jam/JamEye6.png"
    }
    else if (this.value == 7) {
        document.getElementById("JamEye").src = "resources/faces/Jam/JamEye7.png"
    }
    else {
        document.getElementById("JamEye").src = "resources/faces/Jam/JamEye8.png"
    }
}

JamMouthVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("JamMouth").src = "resources/faces/Jam/JamMouth1.png"
    }
    else if (this.value == 2) {
        document.getElementById("JamMouth").src = "resources/faces/Jam/JamMouth2.png"
    }
    else if (this.value == 3) {
        document.getElementById("JamMouth").src = "resources/faces/Jam/JamMouth3.png"
    }
    else if (this.value == 4) {
        document.getElementById("JamMouth").src = "resources/faces/Jam/JamMouth4.png"
    }
    else if (this.value == 5) {
        document.getElementById("JamMouth").src = "resources/faces/Jam/JamMouth5.png"
    }
    else if (this.value == 6) {
        document.getElementById("JamMouth").src = "resources/faces/Jam/JamMouth6.png"
    }
    else if (this.value == 7) {
        document.getElementById("JamMouth").src = "resources/faces/Jam/JamMouth7.png"
    }
    else {
        document.getElementById("JamMouth").src = "resources/faces/Jam/JamMouth8.png"
    }
}
//Auto
//Preload images
for (i=2;i<=8;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Auto/AutoEye${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
for (i=2;i<=8;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Auto/AutoMouth${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
var AutoEyeVari = document.getElementById("AutoEyeVari")
var AutoMouthVari = document.getElementById("AutoMouthVari")

AutoEyeVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("AutoEye").src = "resources/faces/Auto/AutoEye1.png"
    }
    else if (this.value == 2) {
        document.getElementById("AutoEye").src = "resources/faces/Auto/AutoEye2.png"
    }
    else if (this.value == 3) {
        document.getElementById("AutoEye").src = "resources/faces/Auto/AutoEye3.png"
    }
    else if (this.value == 4) {
        document.getElementById("AutoEye").src = "resources/faces/Auto/AutoEye4.png"
    }
    else if (this.value == 5) {
        document.getElementById("AutoEye").src = "resources/faces/Auto/AutoEye5.png"
    }
    else if (this.value == 6) {
        document.getElementById("AutoEye").src = "resources/faces/Auto/AutoEye6.png"
    }
    else if (this.value == 7) {
        document.getElementById("AutoEye").src = "resources/faces/Auto/AutoEye7.png"
    }
    else {
        document.getElementById("AutoEye").src = "resources/faces/Auto/AutoEye8.png"
    }
}

AutoMouthVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("AutoMouth").src = "resources/faces/Auto/AutoMouth1.png"
    }
    else if (this.value == 2) {
        document.getElementById("AutoMouth").src = "resources/faces/Auto/AutoMouth2.png"
    }
    else if (this.value == 3) {
        document.getElementById("AutoMouth").src = "resources/faces/Auto/AutoMouth3.png"
    }
    else if (this.value == 4) {
        document.getElementById("AutoMouth").src = "resources/faces/Auto/AutoMouth4.png"
    }
    else if (this.value == 5) {
        document.getElementById("AutoMouth").src = "resources/faces/Auto/AutoMouth5.png"
    }
    else if (this.value == 6) {
        document.getElementById("AutoMouth").src = "resources/faces/Auto/AutoMouth6.png"
    }
    else if (this.value == 7) {
        document.getElementById("AutoMouth").src = "resources/faces/Auto/AutoMouth7.png"
    }
    else {
        document.getElementById("AutoMouth").src = "resources/faces/Auto/AutoMouth8.png"
    }
}
//Wooly
//Preload images
for (i=2;i<=8;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Wooly/WoolyEye${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
for (i=2;i<=8;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Wooly/WoolyMouth${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
var WoolyEyeVari = document.getElementById("WoolyEyeVari")
var WoolyMouthVari = document.getElementById("WoolyMouthVari")

WoolyEyeVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("WoolyEye").src = "resources/faces/Wooly/WoolyEye1.png"
    }
    else if (this.value == 2) {
        document.getElementById("WoolyEye").src = "resources/faces/Wooly/WoolyEye2.png"
    }
    else if (this.value == 3) {
        document.getElementById("WoolyEye").src = "resources/faces/Wooly/WoolyEye3.png"
    }
    else if (this.value == 4) {
        document.getElementById("WoolyEye").src = "resources/faces/Wooly/WoolyEye4.png"
    }
    else if (this.value == 5) {
        document.getElementById("WoolyEye").src = "resources/faces/Wooly/WoolyEye5.png"
    }
    else if (this.value == 6) {
        document.getElementById("WoolyEye").src = "resources/faces/Wooly/WoolyEye6.png"
    }
    else if (this.value == 7) {
        document.getElementById("WoolyEye").src = "resources/faces/Wooly/WoolyEye7.png"
    }
    else {
        document.getElementById("WoolyEye").src = "resources/faces/Wooly/WoolyEye8.png"
    }
}

WoolyMouthVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("WoolyMouth").src = "resources/faces/Wooly/WoolyMouth1.png"
    }
    else if (this.value == 2) {
        document.getElementById("WoolyMouth").src = "resources/faces/Wooly/WoolyMouth2.png"
    }
    else if (this.value == 3) {
        document.getElementById("WoolyMouth").src = "resources/faces/Wooly/WoolyMouth3.png"
    }
    else if (this.value == 4) {
        document.getElementById("WoolyMouth").src = "resources/faces/Wooly/WoolyMouth4.png"
    }
    else if (this.value == 5) {
        document.getElementById("WoolyMouth").src = "resources/faces/Wooly/WoolyMouth5.png"
    }
    else if (this.value == 6) {
        document.getElementById("WoolyMouth").src = "resources/faces/Wooly/WoolyMouth6.png"
    }
    else if (this.value == 7) {
        document.getElementById("WoolyMouth").src = "resources/faces/Wooly/WoolyMouth7.png"
    }
    else {
        document.getElementById("WoolyMouth").src = "resources/faces/Wooly/WoolyMouth8.png"
    }
}
//Stevie
//Preload images
for (i=2;i<=8;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Stevie/StevieEyeL${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
for (i=2;i<=8;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Stevie/StevieEyeR${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
for (i=2;i<=8;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Stevie/StevieMouth${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
var StevieEyeLVari = document.getElementById("StevieEyeLVari")
var StevieEyeRVari = document.getElementById("StevieEyeRVari")
var StevieMouthVari = document.getElementById("StevieMouthVari")

StevieEyeLVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("StevieEyeL").src = "resources/faces/Stevie/StevieEyeL1.png"
    }
    else if (this.value == 2) {
        document.getElementById("StevieEyeL").src = "resources/faces/Stevie/StevieEyeL2.png"
    }
    else if (this.value == 3) {
        document.getElementById("StevieEyeL").src = "resources/faces/Stevie/StevieEyeL3.png"
    }
    else if (this.value == 4) {
        document.getElementById("StevieEyeL").src = "resources/faces/Stevie/StevieEyeL4.png"
    }
    else if (this.value == 5) {
        document.getElementById("StevieEyeL").src = "resources/faces/Stevie/StevieEyeL5.png"
    }
    else if (this.value == 6) {
        document.getElementById("StevieEyeL").src = "resources/faces/Stevie/StevieEyeL6.png"
    }
    else if (this.value == 7) {
        document.getElementById("StevieEyeL").src = "resources/faces/Stevie/StevieEyeL7.png"
    }
    else {
        document.getElementById("StevieEyeL").src = "resources/faces/Stevie/StevieEyeL8.png"
    }
}

StevieEyeRVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("StevieEyeR").src = "resources/faces/Stevie/StevieEyeR1.png"
    }
    else if (this.value == 2) {
        document.getElementById("StevieEyeR").src = "resources/faces/Stevie/StevieEyeR2.png"
    }
    else if (this.value == 3) {
        document.getElementById("StevieEyeR").src = "resources/faces/Stevie/StevieEyeR3.png"
    }
    else if (this.value == 4) {
        document.getElementById("StevieEyeR").src = "resources/faces/Stevie/StevieEyeR4.png"
    }
    else if (this.value == 5) {
        document.getElementById("StevieEyeR").src = "resources/faces/Stevie/StevieEyeR5.png"
    }
    else if (this.value == 6) {
        document.getElementById("StevieEyeR").src = "resources/faces/Stevie/StevieEyeR6.png"
    }
    else if (this.value == 7) {
        document.getElementById("StevieEyeR").src = "resources/faces/Stevie/StevieEyeR7.png"
    }
    else {
        document.getElementById("StevieEyeR").src = "resources/faces/Stevie/StevieEyeR8.png"
    }
}

StevieMouthVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("StevieMouth").src = "resources/faces/Stevie/StevieMouth1.png"
    }
    else if (this.value == 2) {
        document.getElementById("StevieMouth").src = "resources/faces/Stevie/StevieMouth2.png"
    }
    else if (this.value == 3) {
        document.getElementById("StevieMouth").src = "resources/faces/Stevie/StevieMouth3.png"
    }
    else if (this.value == 4) {
        document.getElementById("StevieMouth").src = "resources/faces/Stevie/StevieMouth4.png"
    }
    else if (this.value == 5) {
        document.getElementById("StevieMouth").src = "resources/faces/Stevie/StevieMouth5.png"
    }
    else if (this.value == 6) {
        document.getElementById("StevieMouth").src = "resources/faces/Stevie/StevieMouth6.png"
    }
    else if (this.value == 7) {
        document.getElementById("StevieMouth").src = "resources/faces/Stevie/StevieMouth7.png"
    }
    else {
        document.getElementById("StevieMouth").src = "resources/faces/Stevie/StevieMouth8.png"
    }
}
//Boingy
//Preload images
for (i=2;i<=8;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Boingy/BoingyEye${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
for (i=2;i<=8;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Boingy/BoingyMouth${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
var BoingyEyeVari = document.getElementById("BoingyEyeVari")
var BoingyMouthVari = document.getElementById("BoingyMouthVari")

BoingyEyeVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("BoingyEye").src = "resources/faces/Boingy/BoingyEye1.png"
    }
    else if (this.value == 2) {
        document.getElementById("BoingyEye").src = "resources/faces/Boingy/BoingyEye2.png"
    }
    else if (this.value == 3) {
        document.getElementById("BoingyEye").src = "resources/faces/Boingy/BoingyEye3.png"
    }
    else if (this.value == 4) {
        document.getElementById("BoingyEye").src = "resources/faces/Boingy/BoingyEye4.png"
    }
    else if (this.value == 5) {
        document.getElementById("BoingyEye").src = "resources/faces/Boingy/BoingyEye5.png"
    }
    else if (this.value == 6) {
        document.getElementById("BoingyEye").src = "resources/faces/Boingy/BoingyEye6.png"
    }
    else if (this.value == 7) {
        document.getElementById("BoingyEye").src = "resources/faces/Boingy/BoingyEye7.png"
    }
    else {
        document.getElementById("BoingyEye").src = "resources/faces/Boingy/BoingyEye8.png"
    }
}

BoingyMouthVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("BoingyMouth").src = "resources/faces/Boingy/BoingyMouth1.png"
    }
    else if (this.value == 2) {
        document.getElementById("BoingyMouth").src = "resources/faces/Boingy/BoingyMouth2.png"
    }
    else if (this.value == 3) {
        document.getElementById("BoingyMouth").src = "resources/faces/Boingy/BoingyMouth3.png"
    }
    else if (this.value == 4) {
        document.getElementById("BoingyMouth").src = "resources/faces/Boingy/BoingyMouth4.png"
    }
    else if (this.value == 5) {
        document.getElementById("BoingyMouth").src = "resources/faces/Boingy/BoingyMouth5.png"
    }
    else if (this.value == 6) {
        document.getElementById("BoingyMouth").src = "resources/faces/Boingy/BoingyMouth6.png"
    }
    else if (this.value == 7) {
        document.getElementById("BoingyMouth").src = "resources/faces/Boingy/BoingyMouth7.png"
    }
    else {
        document.getElementById("BoingyMouth").src = "resources/faces/Boingy/BoingyMouth8.png"
    }
}
//Minea
//Preload images
for (i=2;i<=8;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Minea/MineaEye${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
for (i=2;i<=8;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Minea/MineaMouth${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
var MineaEyeVari = document.getElementById("MineaEyeVari")
var MineaMouthVari = document.getElementById("MineaMouthVari")

MineaEyeVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("MineaEye").src = "resources/faces/Minea/MineaEye1.png"
    }
    else if (this.value == 2) {
        document.getElementById("MineaEye").src = "resources/faces/Minea/MineaEye2.png"
    }
    else if (this.value == 3) {
        document.getElementById("MineaEye").src = "resources/faces/Minea/MineaEye3.png"
    }
    else if (this.value == 4) {
        document.getElementById("MineaEye").src = "resources/faces/Minea/MineaEye4.png"
    }
    else if (this.value == 5) {
        document.getElementById("MineaEye").src = "resources/faces/Minea/MineaEye5.png"
    }
    else if (this.value == 6) {
        document.getElementById("MineaEye").src = "resources/faces/Minea/MineaEye6.png"
    }
    else if (this.value == 7) {
        document.getElementById("MineaEye").src = "resources/faces/Minea/MineaEye7.png"
    }
    else {
        document.getElementById("MineaEye").src = "resources/faces/Minea/MineaEye8.png"
    }
}

MineaMouthVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("MineaMouth").src = "resources/faces/Minea/MineaMouth1.png"
    }
    else if (this.value == 2) {
        document.getElementById("MineaMouth").src = "resources/faces/Minea/MineaMouth2.png"
    }
    else if (this.value == 3) {
        document.getElementById("MineaMouth").src = "resources/faces/Minea/MineaMouth3.png"
    }
    else if (this.value == 4) {
        document.getElementById("MineaMouth").src = "resources/faces/Minea/MineaMouth4.png"
    }
    else if (this.value == 5) {
        document.getElementById("MineaMouth").src = "resources/faces/Minea/MineaMouth5.png"
    }
    else if (this.value == 6) {
        document.getElementById("MineaMouth").src = "resources/faces/Minea/MineaMouth6.png"
    }
    else if (this.value == 7) {
        document.getElementById("MineaMouth").src = "resources/faces/Minea/MineaMouth7.png"
    }
    else {
        document.getElementById("MineaMouth").src = "resources/faces/Minea/MineaMouth8.png"
    }
}
//Magnitchi
//Preload images
for (i=2;i<=8;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Magnitchi/MagnitchiEye${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
for (i=2;i<=8;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Magnitchi/MagnitchiMouth${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
var MagnitchiEyeVari = document.getElementById("MagnitchiEyeVari")
var MagnitchiMouthVari = document.getElementById("MagnitchiMouthVari")

MagnitchiEyeVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("MagnitchiEye").src = "resources/faces/Magnitchi/MagnitchiEye1.png"
    }
    else if (this.value == 2) {
        document.getElementById("MagnitchiEye").src = "resources/faces/Magnitchi/MagnitchiEye2.png"
    }
    else if (this.value == 3) {
        document.getElementById("MagnitchiEye").src = "resources/faces/Magnitchi/MagnitchiEye3.png"
    }
    else if (this.value == 4) {
        document.getElementById("MagnitchiEye").src = "resources/faces/Magnitchi/MagnitchiEye4.png"
    }
    else if (this.value == 5) {
        document.getElementById("MagnitchiEye").src = "resources/faces/Magnitchi/MagnitchiEye5.png"
    }
    else if (this.value == 6) {
        document.getElementById("MagnitchiEye").src = "resources/faces/Magnitchi/MagnitchiEye6.png"
    }
    else if (this.value == 7) {
        document.getElementById("MagnitchiEye").src = "resources/faces/Magnitchi/MagnitchiEye7.png"
    }
    else {
        document.getElementById("MagnitchiEye").src = "resources/faces/Magnitchi/MagnitchiEye8.png"
    }
}

MagnitchiMouthVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("MagnitchiMouth").src = "resources/faces/Magnitchi/MagnitchiMouth1.png"
    }
    else if (this.value == 2) {
        document.getElementById("MagnitchiMouth").src = "resources/faces/Magnitchi/MagnitchiMouth2.png"
    }
    else if (this.value == 3) {
        document.getElementById("MagnitchiMouth").src = "resources/faces/Magnitchi/MagnitchiMouth3.png"
    }
    else if (this.value == 4) {
        document.getElementById("MagnitchiMouth").src = "resources/faces/Magnitchi/MagnitchiMouth4.png"
    }
    else if (this.value == 5) {
        document.getElementById("MagnitchiMouth").src = "resources/faces/Magnitchi/MagnitchiMouth5.png"
    }
    else if (this.value == 6) {
        document.getElementById("MagnitchiMouth").src = "resources/faces/Magnitchi/MagnitchiMouth6.png"
    }
    else if (this.value == 7) {
        document.getElementById("MagnitchiMouth").src = "resources/faces/Magnitchi/MagnitchiMouth7.png"
    }
    else {
        document.getElementById("MagnitchiMouth").src = "resources/faces/Magnitchi/MagnitchiMouth8.png"
    }
}
//Puff
//Preload images
for (i=2;i<=8;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Puff/PuffEye${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
for (i=2;i<=8;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Puff/PuffMouth${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
var PuffEyeVari = document.getElementById("PuffEyeVari")
var PuffMouthVari = document.getElementById("PuffMouthVari")

PuffEyeVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("PuffEye").src = "resources/faces/Puff/PuffEye1.png"
    }
    else if (this.value == 2) {
        document.getElementById("PuffEye").src = "resources/faces/Puff/PuffEye2.png"
    }
    else if (this.value == 3) {
        document.getElementById("PuffEye").src = "resources/faces/Puff/PuffEye3.png"
    }
    else if (this.value == 4) {
        document.getElementById("PuffEye").src = "resources/faces/Puff/PuffEye4.png"
    }
    else if (this.value == 5) {
        document.getElementById("PuffEye").src = "resources/faces/Puff/PuffEye5.png"
    }
    else if (this.value == 6) {
        document.getElementById("PuffEye").src = "resources/faces/Puff/PuffEye6.png"
    }
    else if (this.value == 7) {
        document.getElementById("PuffEye").src = "resources/faces/Puff/PuffEye7.png"
    }
    else {
        document.getElementById("PuffEye").src = "resources/faces/Puff/PuffEye8.png"
    }
}

PuffMouthVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("PuffMouth").src = "resources/faces/Puff/PuffMouth1.png"
    }
    else if (this.value == 2) {
        document.getElementById("PuffMouth").src = "resources/faces/Puff/PuffMouth2.png"
    }
    else if (this.value == 3) {
        document.getElementById("PuffMouth").src = "resources/faces/Puff/PuffMouth3.png"
    }
    else if (this.value == 4) {
        document.getElementById("PuffMouth").src = "resources/faces/Puff/PuffMouth4.png"
    }
    else if (this.value == 5) {
        document.getElementById("PuffMouth").src = "resources/faces/Puff/PuffMouth5.png"
    }
    else if (this.value == 6) {
        document.getElementById("PuffMouth").src = "resources/faces/Puff/PuffMouth6.png"
    }
    else if (this.value == 7) {
        document.getElementById("PuffMouth").src = "resources/faces/Puff/PuffMouth7.png"
    }
    else {
        document.getElementById("PuffMouth").src = "resources/faces/Puff/PuffMouth8.png"
    }
}
//Takhwif
//Preload images
for (i=2;i<=15;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Takhwif/TakhwifFace${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
var TakhwifFaceVari = document.getElementById("TakhwifFaceVari")

TakhwifFaceVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("TakhwifFace").src = "resources/faces/Takhwif/TakhwifFace1.png"
    }
    else if (this.value == 2) {
        document.getElementById("TakhwifFace").src = "resources/faces/Takhwif/TakhwifFace2.png"
    }
    else if (this.value == 3) {
        document.getElementById("TakhwifFace").src = "resources/faces/Takhwif/TakhwifFace3.png"
    }
    else if (this.value == 4) {
        document.getElementById("TakhwifFace").src = "resources/faces/Takhwif/TakhwifFace4.png"
    }
    else if (this.value == 5) {
        document.getElementById("TakhwifFace").src = "resources/faces/Takhwif/TakhwifFace5.png"
    }
    else if (this.value == 6) {
        document.getElementById("TakhwifFace").src = "resources/faces/Takhwif/TakhwifFace6.png"
    }
    else if (this.value == 7) {
        document.getElementById("TakhwifFace").src = "resources/faces/Takhwif/TakhwifFace7.png"
    }
    else if (this.value == 8) {
        document.getElementById("TakhwifFace").src = "resources/faces/Takhwif/TakhwifFace8.png"
    }
    else if (this.value == 9) {
        document.getElementById("TakhwifFace").src = "resources/faces/Takhwif/TakhwifFace9.png"
    }
    else if (this.value == 10) {
        document.getElementById("TakhwifFace").src = "resources/faces/Takhwif/TakhwifFace10.png"
    }
    else if (this.value == 11) {
        document.getElementById("TakhwifFace").src = "resources/faces/Takhwif/TakhwifFace11.png"
    }
    else if (this.value == 12) {
        document.getElementById("TakhwifFace").src = "resources/faces/Takhwif/TakhwifFace12.png"
    }
    else if (this.value == 13) {
        document.getElementById("TakhwifFace").src = "resources/faces/Takhwif/TakhwifFace13.png"
    }
    else if (this.value == 14) {
        document.getElementById("TakhwifFace").src = "resources/faces/Takhwif/TakhwifFace14.png"
    }
    else {
        document.getElementById("TakhwifFace").src = "resources/faces/Takhwif/TakhwifFace15.png"
    }
}
//AlAkhdar
//Preload images
for (i=2;i<=10;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/AlAkhdar/AlAkhdarFace${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
var AlAkhdarFaceVari = document.getElementById("AlAkhdarFaceVari")

AlAkhdarFaceVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("AlAkhdarFace").src = "resources/faces/AlAkhdar/AlAkhdarFace1.png"
    }
    else if (this.value == 2) {
        document.getElementById("AlAkhdarFace").src = "resources/faces/AlAkhdar/AlAkhdarFace2.png"
    }
    else if (this.value == 3) {
        document.getElementById("AlAkhdarFace").src = "resources/faces/AlAkhdar/AlAkhdarFace3.png"
    }
    else if (this.value == 4) {
        document.getElementById("AlAkhdarFace").src = "resources/faces/AlAkhdar/AlAkhdarFace4.png"
    }
    else if (this.value == 5) {
        document.getElementById("AlAkhdarFace").src = "resources/faces/AlAkhdar/AlAkhdarFace5.png"
    }
    else if (this.value == 6) {
        document.getElementById("AlAkhdarFace").src = "resources/faces/AlAkhdar/AlAkhdarFace6.png"
    }
    else if (this.value == 7) {
        document.getElementById("AlAkhdarFace").src = "resources/faces/AlAkhdar/AlAkhdarFace7.png"
    }
    else if (this.value == 8) {
        document.getElementById("AlAkhdarFace").src = "resources/faces/AlAkhdar/AlAkhdarFace8.png"
    }
    else if (this.value == 9) {
        document.getElementById("AlAkhdarFace").src = "resources/faces/AlAkhdar/AlAkhdarFace9.png"
    }
    else {
        document.getElementById("AlAkhdarFace").src = "resources/faces/AlAkhdar/AlAkhdarFace10.png"
    }
}
//Jordan
//Preload images
for (i=2;i<=11;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Jordan/JordanEye${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
for (i=2;i<=11;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Jordan/JordanMouth${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
} 
var JordanEyeVari = document.getElementById("JordanEyeVari")
var JordanMouthVari = document.getElementById("JordanMouthVari")

JordanEyeVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("JordanEye").src = "resources/faces/Jordan/JordanEye1.png"
    }
    else if (this.value == 2) {
        document.getElementById("JordanEye").src = "resources/faces/Jordan/JordanEye2.png"
    }
    else if (this.value == 3) {
        document.getElementById("JordanEye").src = "resources/faces/Jordan/JordanEye3.png"
    }
    else if (this.value == 4) {
        document.getElementById("JordanEye").src = "resources/faces/Jordan/JordanEye4.png"
    }
    else if (this.value == 5) {
        document.getElementById("JordanEye").src = "resources/faces/Jordan/JordanEye5.png"
    }
    else if (this.value == 6) {
        document.getElementById("JordanEye").src = "resources/faces/Jordan/JordanEye6.png"
    }
    else if (this.value == 7) {
        document.getElementById("JordanEye").src = "resources/faces/Jordan/JordanEye7.png"
    }
    else if (this.value == 8) {
        document.getElementById("JordanEye").src = "resources/faces/Jordan/JordanEye8.png"
    }
    else if (this.value == 9) {
        document.getElementById("JordanEye").src = "resources/faces/Jordan/JordanEye9.png"
    }
    else if (this.value == 10) {
        document.getElementById("JordanEye").src = "resources/faces/Jordan/JordanEye10.png"
    }
    else {
        document.getElementById("JordanEye").src = "resources/faces/Jordan/JordanEye11.png"
    }
}

JordanMouthVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("JordanMouth").src = "resources/faces/Jordan/JordanMouth1.png"
    }
    else if (this.value == 2) {
        document.getElementById("JordanMouth").src = "resources/faces/Jordan/JordanMouth2.png"
    }
    else if (this.value == 3) {
        document.getElementById("JordanMouth").src = "resources/faces/Jordan/JordanMouth3.png"
    }
    else if (this.value == 4) {
        document.getElementById("JordanMouth").src = "resources/faces/Jordan/JordanMouth4.png"
    }
    else if (this.value == 5) {
        document.getElementById("JordanMouth").src = "resources/faces/Jordan/JordanMouth5.png"
    }
    else if (this.value == 6) {
        document.getElementById("JordanMouth").src = "resources/faces/Jordan/JordanMouth6.png"
    }
    else if (this.value == 7) {
        document.getElementById("JordanMouth").src = "resources/faces/Jordan/JordanMouth7.png"
    }
    else if (this.value == 8) {
        document.getElementById("JordanMouth").src = "resources/faces/Jordan/JordanMouth8.png"
    }
    else if (this.value == 9) {
        document.getElementById("JordanMouth").src = "resources/faces/Jordan/JordanMouth9.png"
    }
    else if (this.value == 10) {
        document.getElementById("JordanMouth").src = "resources/faces/Jordan/JordanMouth10.png"
    }
    else {
        document.getElementById("JordanMouth").src = "resources/faces/Jordan/JordanMouth11.png"
    }
}
//Blueberri
//Preload images
for (i=2;i<=13;i++) {
    var preloadLink = document.createElement("link")
    preloadLink.href = `resources/faces/Blueberri/BlueberriFace${i}.png`
    preloadLink.rel = "preload"
    preloadLink.as = "image"
    document.head.appendChild(preloadLink)
}
var BlueberriFaceVari = document.getElementById("BlueberriFaceVari")

BlueberriFaceVari.oninput = function () {
    if (this.value == 1) {
        document.getElementById("BlueberriFace").src = "resources/faces/Blueberri/BlueberriFace1.png"
    }
    else if (this.value == 2) {
        document.getElementById("BlueberriFace").src = "resources/faces/Blueberri/BlueberriFace2.png"
    }
    else if (this.value == 3) {
        document.getElementById("BlueberriFace").src = "resources/faces/Blueberri/BlueberriFace3.png"
    }
    else if (this.value == 4) {
        document.getElementById("BlueberriFace").src = "resources/faces/Blueberri/BlueberriFace4.png"
    }
    else if (this.value == 5) {
        document.getElementById("BlueberriFace").src = "resources/faces/Blueberri/BlueberriFace5.png"
    }
    else if (this.value == 6) {
        document.getElementById("BlueberriFace").src = "resources/faces/Blueberri/BlueberriFace6.png"
    }
    else if (this.value == 7) {
        document.getElementById("BlueberriFace").src = "resources/faces/Blueberri/BlueberriFace7.png"
    }
    else if (this.value == 8) {
        document.getElementById("BlueberriFace").src = "resources/faces/Blueberri/BlueberriFace8.png"
    }
    else if (this.value == 9) {
        document.getElementById("BlueberriFace").src = "resources/faces/Blueberri/BlueberriFace9.png"
    }
    else if (this.value == 10) {
        document.getElementById("BlueberriFace").src = "resources/faces/Blueberri/BlueberriFace10.png"
    }
    else if (this.value == 11) {
        document.getElementById("BlueberriFace").src = "resources/faces/Blueberri/BlueberriFace11.png"
    }
    else if (this.value == 12) {
        document.getElementById("BlueberriFace").src = "resources/faces/Blueberri/BlueberriFace12.png"
    }
    else {
        document.getElementById("BlueberriFace").src = "resources/faces/Blueberri/BlueberriFace13.png"
    }
}