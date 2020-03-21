const sr = ScrollReveal();

sr.reveal('.jumbotron', {
    duration: 2000,
    distance: '40%',
    scale: 1.5
});

sr.reveal('.texte-pause', {
    duration: 2000,
    distance: '50%',
    delay: 600,
    scale: 0.8
})

sr.reveal('.perso', {
    origin: 'left',
    duration: 1500,
    distance: '50%',
    delay: 600
});

sr.reveal('.voiture', {
    origin: 'right',
    duration: 1500,
    distance: '50%',
    delay: 1000
});