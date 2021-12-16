let acim = document.getElementById('acim');
let skor = document.getElementById('score');
let btn = document.getElementById('btn')
let skore = 0
const biasa = './1.jpg'
const pop = new Audio('./pop.mp3')
const dipencet = './2.jpg'
btn.addEventListener('mousedown', gaIdle)
btn.addEventListener('mouseup', idle)
function gaIdle() {
    pencet()
    acim.src=dipencet
    pop.play()
}
function idle(){
    acim.src=biasa
    pop.play()
}
function pencet(){
    skore++
    skor.innerHTML = skore
}
btn.addEventListener("touchstart", function(e){
    e.preventDefault();
    gaIdle();
})
btn.addEventListener("touchend", function(e){
    e.preventDefault();
    idle();
})