const musicSelector = document.getElementById("musicPage");
class Piece
{
    constructor(EmbedLink, Description)
    {
        this.Description = Description
        this.EmbedLink = EmbedLink
    }
}
Music = 
[
    new Piece("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1413969991&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "A piece I made 5 months ago, and is a mock-up for a chapter 3 piece"),
    new Piece("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1352495746&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "The title says all you need to know, got a pretty decent grade on it too"),
    new Piece("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1205867443&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "A remix I made of one of my favorite songs in Deltarune chapter 2")
]
//console.log(Music);

updateVideos()

function updateVideos(){
    musicSelector.innerHTML=""
    for (let i = 0; i < Music.length; i++)
    {
        currentPiece = Music[i]
        
        let NewPiece =`
        <div class="stripe"></div>
        <div class="row">
        <iframe height="200" width="50%" scrolling="no" frameborder="no" allow="autoplay" src="${currentPiece.EmbedLink}" class"col-6"></iframe>
          <p class="col-6">${currentPiece.Description}</p>
        </div>
        `
        //console.log(NewPiece);
        musicSelector.innerHTML += NewPiece
    }
}