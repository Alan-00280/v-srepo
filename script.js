const text = `Selamat hari valentine sayangku cintaku manisku. Semoga tetep sayang yaaa. Muachhh.... 💐💕`;

function fun1() {
    
}

document.querySelector('.button').addEventListener(
    'click', ()=>{
        document.querySelector('.card').innerHTML =
        `<p class="reg-text">${text}</p>
        <a class="button-2" href="../index.html">Click Me!</a>`;
    }
);