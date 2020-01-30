$(document).ready(function(){
    loadVideos();
});
$(document).on("click", ".videos", function () {
    var x = this.id;
    $("#modal-body").html(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${x}" 
    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);     
    $('#modal').modal('show');
   });

$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
    $('.navbar').css('background','linear-gradient(45deg,   rgba(86,208,240,1)  10%,  rgba(93,123,240,1)65%, rgba(183,76,219,1)  100%)');

    } else {
        $('.navbar').css('background','transparent');

    }
});


function fill(category, info){
    console.log(info)
    for(let i=0; i<4; i++){
        console.log(`${info.items[i].id}`)
        $(`#${category}`).append(`
        <a type="button" data-toggle="modal" class="cursor-pointer videos" data-target="#exampleModal" id=${info.items[i].id}>
        <div class="card" style="width: 15rem;">
        <img class="card-img-top" src=${info.items[i].snippet.thumbnails.standard.url} alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${info.items[i].snippet.channelTitle}</h5>
            <p class="card-text">${info.items[i].snippet.title}</p></a>
        </div>
      </div></a>`);
    }
}
function loadVideos() {
    getVideosApi(17, function(res){
        console.log(res)
        fill("sports", res)
    })
    getVideosApi(28, function(res){
        fill("news", res)
        // el codigo de noticias es 25 pero no me esta regresando nada desde YT lo cambie por el 28 que es ciencia
    })
    getVideosApi(23, function(res){
        fill("comedy", res)
    })
   
}

  function getVideosApi(categoryId, onSuccess) {
    jQuery.get({url: `https://www.googleapis.com/youtube/v3/videos?part=snippet,player&chart=mostPopular&videoCategoryId=${categoryId}&key=AIzaSyBIwhHZFYWd6i1CUQjZEP7ySuGFGkeDh7E`,
     success: onSuccess});
  }