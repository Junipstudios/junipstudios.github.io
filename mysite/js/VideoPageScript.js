const videoSelectors = document.getElementById("videosPage");
class Video
{
    constructor(VideoTag, Description)
    {
        this.Description = Description
        this.Link = "https://www.youtube.com/watch/" + VideoTag
        this.EmbedLink = "https://www.youtube.com/embed/" + VideoTag
    }
}
videos = 
[
    new Video("Y7AXqaAkl0c", "One of my video projects from spring 2022. It is basically a review of my dad's car."),
    new Video("mBLkEHKtyXo", "A dumb video I made about making a vroid"),
    new Video("cQUsTgbJTDU", "A video of my take on 21st century humor. I submitted this for a project in my senior year if you can believe that")
]
console.log(videos);

updateVideos()

function updateVideos(){
    videoSelectors.innerHTML=""
    for (let i = 0; i < videos.length; i++)
    {
        currentVid = videos[i]
        console.log(currentVid)
        
        let NewVideo =`
        <div class="stripe"></div>
        <div class="row">
          <iframe src="${currentVid.EmbedLink}" title="YouTube video player" height="200" class="col-6" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p class="col-6">${currentVid.Description}</p>
        </div>
        `
        console.log(NewVideo);
        videoSelectors.innerHTML += NewVideo
    }
}