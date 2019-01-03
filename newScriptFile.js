window.onload = () => {
    prepareFrame()

    alert("Hello World! onload");

}
alert("Hello World!");
prepareFrame();

function prepareFrame() {
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://fr.wikipedia.org/wiki/Main_Page");
    ifrm.style.width = "640px";
    ifrm.style.height = "480px";
    document.body.appendChild(ifrm);
}