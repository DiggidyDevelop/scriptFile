alert("Hello World!");
console.log("yes this consoles")


prepareFrame();

function prepareFrame() {
    // Creating the iframe here George
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
// Appending the iframe to the page
    document.body.appendChild(ifrm);

    //Here I tried adding an event listener for a click on the actual iframe,
    //probably eventually quite ineffective, as even if we enlargened the iframe here
    //We would then need to append a div in the area that the close button was
    //To then reduce the iFrame again with another event listener, not impossible
    //but wouldnt be effective for mobile for instance.
    document.getElementById("ifrm").contentDocument.addEventListener("click", function(event){click1();}, false);

}
// an attempt at receiving an event from hyber-mvp client, so when the launcher
// was accessed.. events could occur after the proper clicks of the 
// launcher and close button.

// var socket = new easyXDM.Socket({
//     remote: "https://5efae1b1.ngrok.io", // the path to the provider
//     onMessage:function(message, origin) {
//     console.log('received message')   
//  }
// });


//this function, connected to the event listener would have been used to increase the size of 
//the iframe.
function click1 () {
    console.log('colour check' + colorcheck);

    alert("calling");   
    document.getElementById("ifrm").style.backgroundColor = '#ff0000';
    colorcheck = document.getElementById("ifrm").style.backgroundColor;
    console.log('colour check' + colorcheck);
  };

// document.getElementById("ifrm").contentDocument.addEventListener('click', function(event) {clic(this.id);}, false);;