alert("Hello World!");
console.log("yes this consoles")


prepareFrame();

function prepareFrame() {
    console.log("yes this consoles inside of prepareFrame")
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://fb23e954.ngrok.io");
    ifrm.style.width = "640px";
    ifrm.style.height = "480px";
    ifrm.style.position="fixed";
    ifrm.style.right="0";
    ifrm.style.bottom="0";

    document.body.appendChild(ifrm);
}