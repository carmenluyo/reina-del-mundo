let preload = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750,
})

preload.add({
    targets: '.preload div',
    width:'12.5%',
    backgroundColor: 'rgb(221, 114, 121)',
    delay: anime.stagger(100),
    duration:700,
})
preload.add({
   targets: '.preload div',  
   backgroundColor: 'rgb(200, 60, 65)',
   width:'12.5%',
   duration:300,
})
preload.add({
   targets: '.preload div',  
   backgroundColor: 'rgb(234, 183, 32)',
   translateY: [ { value: '100%', easing: 'easeOutExpo'}],
   delay: anime.stagger(100 / 2),
   duration:650,
})


let preloadBlanco = anime({
   targets: '.preload',
   backgroundColor: 'rgba(255, 255, 255, 0)',
    zIndex: {
        value: [99999,-1],
    },
    opacity: [ { value:1 } , { value:0, delay:1650}],
   delay:1300,

});