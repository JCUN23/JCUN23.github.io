window.onload = (function () {
    num = Math.floor(Math.random() * 4);
    const pages = ["../templates/about.html", "../templates/wiki.html", "../templates/resume.html", "../templates/portfolio.html"];
    document.getElementById("lucky").setAttribute("href", pages[num]);
    return false;
});