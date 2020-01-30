$(document).ready(function(){
    loadImages();
})

function loadImages(){
    var team =[
        {
          name:"Patito",
          src:"assets/patito.jpg",
          position:"CEO",
          type: "active"
        },
        {
            name:"Luna",
            src:"assets/luna.jpg",
            position:"CFO"
          },
          {
            name:"Sony",
            src:"assets/sony.jpg",
            position:"CTO"
          },
          {
            name:"Sky",
            src:"assets/sky.jpg",
            position:"web developer"
          },
          {
            name:"Trufa",
            src:"assets/trufa.jpg",
            position:"backend developer"
          }
    ]
    for(i=0; i<=team.length; i++){
        console.log(team.length)
        $("#carrousel-in").append(`
        <div class="carousel-item ${team[i].type}"> 
        <div class="card" style="width: 15rem;">
        <img class="card-img-top" src=${team[i].src}>
        <div class="card-body">
            <h5 class="card-title">${team[i].name}</h5>
            <p class="card-text">${team[i].position}</p></a>
        </div>
        </div>
        </div>`);
    }
}

$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
    $('.navbar').css('background','linear-gradient(45deg,   rgba(86,208,240,1)  10%,  rgba(93,123,240,1)65%, rgba(183,76,219,1)  100%)');

    } else {
        $('.navbar').css('background','transparent');

    }
});