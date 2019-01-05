alert("Hello World!");
console.log("yes this consoles")


prepareFrame();

function prepareFrame() {
    console.log("yes this consoles inside of prepareFrame")
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://fb23e954.ngrok.io");
    ifrm.style.width = "100px";
    ifrm.style.height = "100px";
    ifrm.style.position="fixed";
    ifrm.style.right="0";
    ifrm.style.bottom="0";
    ifrm.style.border="0";
    document.body.appendChild(ifrm);
}


function click1() {
    alert("calling");   
    document.getElementById("ifrm").style.backgroundColor = '#ff0000';
    colorcheck = document.getElementById("ifrm").style.backgroundColor;
    console.log('colour check' + colorcheck);
  };
  document.getElementsByTagName("iframe")[0].setAttribute("id", "ifrm"); 

  document.getElementById("ifrm").addEventListener("click", function(){click1(1);}, false);

// document.getElementById("ifrm").contentDocument.addEventListener('click', function(event) {clic(this.id);}, false);;
