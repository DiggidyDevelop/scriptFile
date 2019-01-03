alert("Hello World!");
console.log("yes this consoles")


prepareFrame();

function prepareFrame() {
    console.log("yes this consoles inside of prepareFrame")
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://3fadb2a7.ngrok.io");
    ifrm.style.width = "640px";
    ifrm.style.height = "480px";
    document.body.appendChild(ifrm);
}