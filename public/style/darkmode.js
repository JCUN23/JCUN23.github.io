// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('#dark-mode-toggle');

var path = window.location.pathname;
var page = path.split("/").pop();
console.log( page );
const enableDarkMode = () => {
    if (page === "index.html" || path === "/") {
        var t = document.getElementById("dark-mode-toggle");
        var logo = document.getElementById("myVideo");
        var body = document.body;
        var buttons = document.getElementsByClassName("lucky");
        var message = document.getElementsByClassName("moving-text");
        var type = document.getElementsByClassName("wrap");
        var mag = document.getElementsByClassName("mag");
        document.getElementsByClassName("mag")[0].src = "assets/bar-dark.png";

        body.style.background = "black";
        body.style.color = "white";
        message[0].style.color = "white";
        t.innerText = "Toggle Light Mode";
        logo.src = "assets/DD-unscreen.mp4";
        buttons[0].style.transition = "all .5s ease-out";
        buttons[0].style.transition = "0.4s ease-out";
        buttons[0].style.background = "#636364";
        buttons[0].style.color = "white";
        buttons[1].style.background = "#636364";
        buttons[1].style.transition = "all .5s ease-out";
        buttons[1].style.transition = "0.4s ease-out";
        buttons[1].style.color = "white";
    }
    else {
        var t = document.getElementById("dark-mode-toggle");
        var logo = document.getElementById("myVideo");
        var body = document.body;
        var top_row = document.getElementById("myHeader");
        document.getElementsByClassName("bar")[0].src = "../assets/bar-dark.png";
        body.style.background = "black";
        body.style.color = "white";
        
        t.innerText = "Toggle Light Mode";
        
        logo.src = "../assets/DD-unscreen.mp4";
        
        top_row.style.background = "black";
        top_row.style.color = "white";

        if (page === "about.html") {
            var content = document.getElementById("content");
            var urls = document.getElementsByClassName("url");
            document.getElementById("github").src = "../assets/github-white.png";
            
            content.style.color = "white";
            
            for (let i = 0; i < urls.length; i++) {
                urls[i].style.color = "#b4b4b4";
            }
        }
        else if (page === "contact.html") {
            var x = document.getElementById("myVideo2");
            var idk = document.getElementsByClassName("table");
            var idk2 = document.getElementsByClassName("url");
            var mar = document.getElementsByClassName("marquee-content");
    
            x.src = "../assets/joshx.mp4";
            for (let i = 0; i < idk.length; i++) {
                idk[i].style.border = "1px solid white";
            }
            for (let i = 0; i < idk2.length; i++) {
                idk2[i].style.color = "white";
            }
            mar[0].style.color = "#44aa4b";
        }
        else if (page === "portfolio.html") {
            var tube = document.getElementById("myVideo2");
    
            tube.src = "../assets/joshtube-dark.mp4";
        }
        else if (page === "resume.html" || page === "transcript.html" || page === "certificate.html") {
            var right = document.getElementById("right");
            right.style.background = "rgb(61, 61, 61)";

            document.getElementsByClassName("bar")[0].src = "../../assets/bar-dark.png";
            var logo = document.getElementById("myVideo");
            logo.src = "../../assets/DD-unscreen.mp4";
        }
        else if (page === "wiki.html") {
            var img = document.getElementById("myVideo2")
            var contents = document.getElementById("contents");
            var right = document.getElementById("right")
            var table = document.getElementsByClassName("table");
    
            img.src = "../assets/joshipedia-dark.png";
    
            contents.style.border = "1px solid white";
            right.style.border = "1px solid white";
    
            for (let i = 0; i < table.size; i++) {
              table[i].style.border = "1px solid white";
            }
        }
    }
    localStorage.setItem('darkMode', 'enabled');

}

const disableDarkMode = () => {
    if (page === "index.html" || page === "") {
        var t = document.getElementById("dark-mode-toggle");
        var logo = document.getElementById("myVideo");
        var body = document.body;
        var buttons = document.getElementsByClassName("lucky");
        var message = document.getElementsByClassName("moving-text");
        var type = document.getElementsByClassName("wrap");
        var mag = document.getElementsByClassName("mag");
        document.getElementsByClassName("mag")[0].src = "assets/bar-light.png";

        body.style.background = "white";
        body.style.color = "black";
        
        message[0].style.color = "black";
        
        t.innerText = "Toggle Dark Mode";
        
        logo.src = "assets/logo-light.mp4";
        
        buttons[0].style.transition = "all .5s ease-out";
        buttons[0].style.transition = "0.4s ease-out";
        buttons[0].style.background = "#D1D1D1";
        buttons[0].style.color = "black";
        buttons[1].style.background = "#D1D1D1";
        buttons[1].style.transition = "all .5s ease-out";
        buttons[1].style.transition = "0.4s ease-out";
        buttons[1].style.color = "black";
    }
    else {
        var t = document.getElementById("dark-mode-toggle");
        var logo = document.getElementById("myVideo");
        var body = document.body;
        var top_row = document.getElementById("myHeader");
        document.getElementsByClassName("bar")[0].src = "../assets/bar-light.png";
        body.style.background = "white";
        body.style.color = "black";
        
        t.innerText = "Toggle Dark Mode";
        
        logo.src = "../assets/logo-light.mp4";
        
        top_row.style.background = "white";
        top_row.style.color = "black";

        if (page === "about.html") {
            var content = document.getElementById("content");
            var urls = document.getElementsByClassName("url");
            document.getElementById("github").src = "../assets/github.png";
            
            content.style.color = "black";
            
            for (let i = 0; i < urls.length; i++) {
                urls[i].style.color = "green";
            }
        }
        else if (page === "contact.html") {
            var x = document.getElementById("myVideo2");
            var idk = document.getElementsByClassName("table");
            var idk2 = document.getElementsByClassName("url");
            var mar = document.getElementsByClassName("marquee-content");
    
            x.src = "../assets/joshx-light.mp4";
            for (let i = 0; i < idk.length; i++) {
                idk[i].style.border = "1px solid black";
            }
            for (let i = 0; i < idk2.length; i++) {
                idk2[i].style.color = "black";
            }
    
            mar[0].style.color = "white";
        }
        else if (page === "portfolio.html") {
            var tube = document.getElementById("myVideo2");
    
            tube.src = "../assets/joshtube.mp4";
        }
        else if (page === "resume.html" || page === "transcript.html" || page === "certificate.html") {
            var right = document.getElementById("right");
            right.style.background = "#E6E5E5";
            document.getElementsByClassName("bar")[0].src = "../../assets/bar-light.png";
            var logo = document.getElementById("myVideo");
            logo.src = "../../assets/logo-light.mp4";
        }
        else if (page === "wiki.html") {
            var img = document.getElementById("myVideo2")
            var contents = document.getElementById("contents");
            var right = document.getElementById("right")
            var table = document.getElementsByClassName("table");
    
            img.src = "../assets/joshipedia-light.png";
    
            contents.style.border = "1px solid black";
            right.style.border = "1px solid black";
    
            for (let i = 0; i < table.size; i++) {
              table[i].style.border = "1px solid black";
            }
        }
    }
    localStorage.setItem('darkMode', null);
    
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'null') {
  disableDarkMode();
}
else {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});