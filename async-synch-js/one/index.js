
const inp = document.getElementById('inp');
const htwo = document.getElementById('htwo');

inp.addEventListener('keyup', (e) => {
    htwo.innerText = e.target.value
})

