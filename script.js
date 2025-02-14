const text = `Selamat hari valentine sayangku cintaku manisku. Semoga tetep sayang yaaa. Muachhh.... 💐💕`;

const lyrics = `
Kita usahakan rumah itu<br>
Dari depan akan tampak sederhana<br>
Tapi kebunnya luas<br>
Tanamannya mewah, megah<br>
<br>
Kita usahakan rumah itu<br>
Dari depan akan tampak sederhana<br>
Tapi dibuat kuat<br>
Dirancang muat, lega<br>
<br>
Urusan perabotan dan wangi-wangian<br>
Kuserahkan pada s'leramu yang lebih maju<br>
Tapi tata ruang, aku ikut pertimbangkan<br>
Kar'na kalau nanti kita punya kesibukan<br>
<br>
Malam tetap kumpul di meja panjang<br>
Ruang makan kita<br>
Berbincang tentang hari yang panjang<br>
<br>
Kita usahakan rumah itu<br>
Dari depan akan tampak sederhana<br>
Tapi penerangannya<br>
Diracik begitu romantis<br>
<br>
Urusan perabotan dan wangi-wangian<br>
Kuserahkan pada s'leramu yang lebih maju<br>
Tapi tata ruang, aku ikut pertimbangkan<br>
Kar'na kalau nanti kita punya kesibukan<br>
<br>
Malam tetap kumpul di meja panjang<br>
Ruang makan kita<br>
Berbincang tentang hari yang panjang<br>
<br>
Boleh kamu keliling dunia<br>
Dan temukan banyak tempat-tempat 'tuk singgah<br>
Sementara<br>
<br>
Kamu boleh namai itu rumah<br>
Selama ada m'reka yang kamu cinta<br>
Di dalamnya<br>
<br>
Kita usahakan rumah itu<br>
`;

const beuText = `Aku Sayang Kamu 💕`;

function fun1() {
    document.querySelector('#main-img').classList.replace('normal', 'small');
    document.querySelector('.reg-text').classList.add('hide');
    document.querySelector('.card').innerHTML =
    `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1x9jnpPOAMSrr7DuIG5jMl?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" class="song"></iframe>
    <p class="lyric-text">${lyrics}</p>
    <button class="button-lyric" onclick="fun2()">hide</button>
    <p class="beu-text">${beuText}</p>
    <a class="button-2" href="./index.html">Back</a>`;
}

function fun2() {
    document.querySelector('.lyric-text').classList.toggle('hide');
    document.querySelector('.button-lyric').innerHTML = document.querySelector('.button-lyric').textContent === 'hide' ? 'show' : 'hide';
}

document.querySelector('.button').addEventListener(
    'click', ()=>{
        document.querySelector('.card').innerHTML =
        `<p class="reg-text">${text}</p>
        
        <button class="button" onclick="fun1()">Next</button>`;
    }
);