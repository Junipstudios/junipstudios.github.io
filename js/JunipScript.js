const nav = document.getElementById("newNav");
const currPageName = document.getElementById("pageInd").innerHTML;
const currPageDDName = document.getElementById("dropdownInd").innerHTML;

const inactiveSelectionDDClasses = "dropdown-item navlinkcustom text-white"
const activeSelectionDDClasses = "dropdown-item activecustom text-white"

const inactiveSelectionNavClasses = "nav-link navlinkcustom text-white"
const activeSelectionNavClasses = "nav-link activecustom text-white"

document.getElementById("footerText").innerHTML = "2023 Juniper Lasky";


class NavSelection
{
    constructor(selectionName, isDropDown, pagelink, dropDownLinks)
    {
        this.selectionName = selectionName;
        this.isDropDown = isDropDown;
        this.pagelink = pagelink;
        this.dropDownLinks = dropDownLinks;
    }
}
class dropDownSelection
{
    constructor(selectionName, pagelink)
    {
        this.selectionName = selectionName;
        this.pagelink = pagelink;
    }
}
NavBar = 
[
    new NavSelection("My Projects", true, "", 
        [
            new dropDownSelection("All Projects", "projects.html"), 
            new dropDownSelection("My Videos", "videos.html"), 
			new dropDownSelection("My Music", "music.html"),
            //new dropDownSelection("My Drawings", "drawings.html"),
            new dropDownSelection("Random Chimp Event", "randomchimpevent/index.html"),
            new dropDownSelection("Class Organizer", "www/index.html")
        ]),
    new NavSelection("About Me", false, "about.html", []),
    new NavSelection("My Socials", false, "socials.html", [])
]
//console.log(NavBar);

updateNav()

function updateNav()
{
    nav.innerHTML = "";
    for(let i = 0; i < NavBar.length; i++)
    {
        if (NavBar[i].isDropDown == true)
        {
            if (NavBar[i].selectionName == currPageDDName)
            {
                //console.log("ding ding ding")
                activeDropDown = true
            }
            else
            {
                activeDropDown = false
            }
            nav.innerHTML += 
            `<li class="nav-item dropdown"> 
            <a class="nav-link dropdown-toggle navlinkcustom text-white" data-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded="false">${NavBar[i].selectionName}</a>
           <div class="dropdown-menu" id="selection${i}"></div></li>`;
           let dropDownDoc = document.getElementById("selection" + i);
           let DropDown = NavBar[i].dropDownLinks;

           
           for(let ii = 0; ii < DropDown.length; ii++)
           {
                if(activeDropDown && DropDown[ii].selectionName == currPageName)
                {
                    classForDD = activeSelectionDDClasses
                    linkForDD = "";
                }
                else
                {
                    classForDD = inactiveSelectionDDClasses
                    linkForDD = DropDown[ii].pagelink;
                }

                dropDownDoc.innerHTML += `<a class="${classForDD}" href="${linkForDD}">${DropDown[ii].selectionName}</a>`
           }
        }
        else
        {
            if (NavBar[i].selectionName == currPageName)
            {
                classForNav = activeSelectionNavClasses
                linkForNav = "";
            }
            else
            {
                classForNav = inactiveSelectionNavClasses
                linkForNav = NavBar[i].pagelink;
            }
            nav.innerHTML += `<li class="nav-item"> <a class="${classForNav}" href="${linkForNav}">${NavBar[i].selectionName}</a></li>`
            
            //nav.innerHTML +=
        }
        /*console.log(NavBar[i].isDropDown)*/
    }
    /*`
	      <li class="nav-item dropdown"> 
			 <a class="nav-link dropdown-toggle navlinkcustom text-white" data-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded="false">My Projects</a>
            <div class="dropdown-menu">
				<a class="dropdown-item navlinkcustom text-white" href="">All Projects</a>
				<a class="dropdown-item navlinkcustom text-white" href="subpages/videos.html">My Videos</a>
				<a class="dropdown-item navlinkcustom text-white" href="subpages/websites.html">My Music</a> 
				<a class="dropdown-item navlinkcustom text-white" href="subpages/photoedit.html">My Drawings</a>
				<a class="dropdown-item navlinkcustom text-white" href="subpages/photoedit.html">Random Chimp Event</a>
				<a class="dropdown-item navlinkcustom text-white" href="subpages/photoedit.html">My Drawings</a>
			  </div>
          </li>
			
			<li class="nav-item"> <a class="nav-link text-white activecustom" href="">About Me</a></li>
      		<li class="nav-item"> <a class="nav-link navlinkcustom text-white" href="socials.html">My Socials</a></li>
        */
       //console.log(nav.innerHTML)
}

/*

*/