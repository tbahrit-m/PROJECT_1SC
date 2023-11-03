var bouton = document.getElementById("monBouton");
var texteCaché = document.getElementById("texteCaché");

bouton.addEventListener("click", function() {
    bouton.style.backgroundColor = "#ff5733"; /* Change la couleur de fond lors du clic */
    texteCaché.textContent = "Joyeux 3ème anniversaire 🎂🎁🥳🎉💋, mon amour💕❤️ ! Trois années de bonheur, 🥹  de complicité et d'amour partagé avec toi. Chaque jour à tes côtés est un cadeau précieux 🤩💍👑💎, et je suis reconnaissant pour tout ce que nous avons construit ensemble.🏩🩷💖 Que cette journée soit aussi spéciale que nous, et que cette nouvelle année soit remplie de moments encore plus merveilleux. Je t'aime💝❤️‍🔥 plus que les mots ne peuvent l'exprimer, et je suis impatient de partager de nombreuses autres années d'amour et de bonheur à tes côtés. Mouhim bb ni fr7en orme bref bzef li Rana f rohba w ghdi ntjwou hed l3m nchlh w Yosra fih bref swlh chebin bzef bzef kima khotba w g3 omrii nchlh ya Rabi. W nchlh rajlek yroh y9ra fi kharij w Kenza mrtah mrth tlhgh w g3 , w bb tsgdt bzef bref w ana  rai ghi nid n3ch9 fihaaa merci li raki f hyati omriii anti trésor t3i anti perle t3i omriiii anti g3 ch3ndi w meilleur haja sratli f  hyati entier w li jamais mghdi tesra haja khir menha apart ki ntzwjou ana f la princesse t3i cheba f g3 hed le monde Kenza Merti❤️‍🔥❤️‍🔥💖🩷🔒 N3che9 fik ana omriii❤️‍🔥💘 ntiii hyatiiiiiiiiii w 3ech9i w houbiiiii w  mon présent w lavenir t3iii w. La joie te3iiii w 3ndiiiii bzeeeeef zhar li 3rftk omriii wlh❤️ merciiiiii bb li jiti fi hyatiiiii w fr7tinii. ntiiiii 3yniaaaa w bentiiiii w mertiiiiiii w princesse t3iiiii w poupiyaaaaa t3iiiiiii w chebaaaaaaa g3 f hed denyaaa👸😍 w lhlouwaaaaaaaa  w galbiiiiii w koulchiiiiiiii ntiiiii denyti bb🫀❤️‍🔥 mn9dch n3ich bla biiiiiik bb ❤️. Mout 3lik  benti cheba🥰❤️💝3lblki bli jamais mn9d ntkhyl hyati bla bik omrij metixstich, ana wiyek bnadem wehd jamais ntfr9ou omrii jamais ❤️‍🔥🙈 nti werda 🥀 zyntili hyati omrii w 9mer 🌓 dwali hyati,Merci bcp omriii 3la les efforts li rai diirhoum 3la jeliii bch nfoutou g3 les prblms w n3ichou fr7enin w mhanyin omriii , chaque moment nfteh m3k chien bref orme jamais nensah ,n3ch9 fin kibida t3i 3eynia Merti halali, je t’aime omri 🩷💝💘❤️‍🔥🔒Joyeux anniversaire, mon amour ! ";
    texteCaché.style.display = "block";
});

document.addEventListener("DOMContentLoaded", function () {
    var message = document.getElementById("messageAnniversaire");
    message.style.display = "block"; // Affiche l'élément

    // Supprime la classe "animation" pour réinitialiser l'animation
    message.addEventListener("animationiteration", function () {
        message.classList.remove("animation");
        void message.offsetWidth; // Force une réinitialisation de l'animation
        message.classList.add("animation");
    });
});
