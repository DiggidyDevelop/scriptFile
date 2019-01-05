alert("Hello World!");
console.log("yes this consoles")


prepareFrame();

function prepareFrame() {
    console.log("yes this consoles inside of prepareFrame")
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://5efae1b1.ngrok.io");
    ifrm.style.width = "100px";
    ifrm.style.height = "100px";
    ifrm.style.position="fixed";
    ifrm.style.right="0";
    ifrm.style.bottom="0";
    ifrm.style.border="0";
    ifrm.setAttribute("id", "ifrm"); 

    document.body.appendChild(ifrm);

    document.getElementById("ifrm").contentDocument.addEventListener("click", function(){click1(1);}, false);

}

function click1() {
    console.log('colour check' + colorcheck);

    alert("calling");   
    document.getElementById("ifrm").style.backgroundColor = '#ff0000';
    colorcheck = document.getElementById("ifrm").style.backgroundColor;
    console.log('colour check' + colorcheck);
  };

// document.getElementById("ifrm").contentDocument.addEventListener('click', function(event) {clic(this.id);}, false);;