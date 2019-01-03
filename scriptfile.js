window.onload = () => {
    prepareFrame()
}

prepareFrame = () => {
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://fr.wikipedia.org/wiki/Main_Page");
    ifrm.style.width = "640px";
    ifrm.style.height = "480px";
    document.body.appendChild(ifrm);
}