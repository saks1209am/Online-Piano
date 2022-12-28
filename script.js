const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [];
let audio = new Audio("tunes/a.wav");

const playTune = (key) =>{
    audio.src = `tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active") //adding acive classes to  the clicked key element
    setTimeout(()=>{ //removing active classes after 150ms
        clickedKey.classList.remove("active")
    },150);
}


pianoKeys.forEach (key =>{
    allKeys.push(key.dataset.key)
    // calling playTune function with passing data-key value as an argument
    key.addEventListener("click", ()=> playTune(key.dataset.key));
});

const handleVolume = (e) => {
    audio.volume = e.target.value; //passing the range slider value as an audio volume
}

const showHideKeys = (e) =>{
    //toggling hide class from each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

const pressedKey = (e) =>{
    //if pressed key is in the allKeys array only call the playTune function
    if(allKeys.includes(e.key)) playTune(e.key)
}


keysCheckbox.addEventListener("click", showHideKeys)
volumeSlider.addEventListener("input",handleVolume)
document.addEventListener("keydown", pressedKey)
