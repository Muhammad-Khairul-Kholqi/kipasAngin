const balingBaling = document.getElementById('baling')
const nyala = document.getElementsByClassName('on')[0];
const mati = document.getElementsByClassName('off')[0];
const satu = document.getElementsByClassName('one')[0];
const dua = document.getElementsByClassName('two')[0];
const tiga = document.getElementsByClassName('three')[0];

nyala.addEventListener('click', function() {
    balingBaling.classList.add('puter-baling-normal')
})

mati.addEventListener('click', function() {
    balingBaling.classList.remove('puter-baling-normal');
    balingBaling.classList.remove('puter-baling-satu')
    balingBaling.classList.remove('puter-baling-dua')
    balingBaling.classList.remove('puter-baling-tiga')
})

satu.addEventListener('click', function() {
    balingBaling.classList.add('puter-baling-satu')
})

dua.addEventListener('click', function () {
    balingBaling.classList.add('puter-baling-dua')
})

tiga.addEventListener('click', function () {
    balingBaling.classList.add('puter-baling-tiga')
})

