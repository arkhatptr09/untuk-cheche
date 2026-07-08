function scrollToSection(id){

    document.getElementById(id)
    .scrollIntoView({
        behavior:"smooth"
    });

}

/* ANIMASI KETIK */

const message = `

Yang Mulia...

Saya mengakui bahwa mungkin ada
perkataan atau tindakan saya
yang bikin Cheche kesel.

Dan untuk itu...

saya minta maaf.

Saya tidak minta langsung dimaafin.

Tapi saya harap Cheche tahu
kalau saya benar-benar nyesel.

🥺

`;

const typingText =
document.getElementById("typingText");

let i = 0;

function typeWriter(){

    if(i < message.length){

        typingText.innerHTML +=
        message.charAt(i);

        i++;

        setTimeout(typeWriter,40);
    }
}

window.onload = () => {
    typeWriter();
};

/* TOMBOL KABUR */

const runBtn =
document.getElementById("runBtn");

runBtn.addEventListener("mouseenter", () => {

    const randomX =
    Math.random() * (window.innerWidth - 200);

    const randomY =
    Math.random() * 250;

    runBtn.style.left =
    randomX + "px";

    runBtn.style.top =
    randomY + "px";

});

/* TOMBOL MAAFIN */

const forgiveBtn =
document.getElementById("forgiveBtn");

forgiveBtn.addEventListener("click", () => {

    /* Confetti */

    for(let i = 0; i < 220; i++){

        const confetti =
        document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left =
        Math.random() * 100 + "vw";

        confetti.style.width =
        Math.random() * 10 + 5 + "px";

        confetti.style.height =
        confetti.style.width;

        const colors = [
            "#ffd54f",
            "#ffe082",
            "#fff59d",
            "#ffca28",
            "#ffec80"
        ];

        confetti.style.background =
        colors[
            Math.floor(
                Math.random() * colors.length
            )
        ];

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }

    /* Stempel */

    const stamp =
    document.createElement("div");

    stamp.classList.add("stamp");

    stamp.innerHTML =
    "✅ PERMINTAAN MAAF DITERIMA";

    document.body.appendChild(stamp);

    setTimeout(() => {

        stamp.remove();

    }, 3000);

    /* Popup */

    setTimeout(() => {

        alert(
`🎉 SIDANG SELESAI 🎉

Status Cheche : Tidak Ngambek ✅

Status Terdakwa : Lega ✅

Status Hubungan : Aman Terkendali ✅

Terima kasih Cheche 🌻🤍`
        );

    }, 500);

});
