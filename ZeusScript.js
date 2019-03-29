import { resolve } from "url";

function getSize() {
    if (window.innerWidth < 450) {
        return true;
    } else {
        return false;
    }
}

function alterSize() {
    if (this.getSize()) {
        document.getElementsByClassName('zeus-chat')[0].style.width = "100%";
        document.getElementsByClassName('zeus-chat')[0].style.height = "100%";
    } else {
        document.getElementsByClassName('zeus-chat')[0].style.width = "850px";
        document.getElementsByClassName('zeus-chat')[0].style.height = "800px";
    }
    console.log("Hello from function")
}

function reduceSize() {
    document.getElementsByClassName('zeus-chat')[0].style.width = "100px";
    document.getElementsByClassName('zeus-chat')[0].style.height = "100px";
}

function getDomain(){
    return new Promise((resolve, reject) => {
        const listOfScripts = document.getElementsByTagName('script')
        console.log("scripts", listOfScripts)
        listOfScripts.forEach(script => {
            console.log(script)
            if(script.includes("ZeusScript.js")){
                const urlParams = new URLSearchParams(script);
                const domain = urlParams.get('shop');
                resolve(domain)
            }
        })
    })
}

    function CreateIframe(){
     return new Promise(function(resolve, reject) {
         console.log("Inside function")
                let iframe = document.createElement('iframe');
                iframe.src = 'https://hyberchat.com/online/chat/';
                iframe.className = 'zeus-chat';
                iframe.scrolling = 'no';
                iframe.id = "myiframe";
                iframe.style.cssText += 'width: 100px; height: 100px; position: fixed; z-index: 1000;border: 0; right: 0; bottom: 0;'
                document.body.appendChild(iframe);
            setTimeout(function() {
                resolve(true)
            }, 1000);
          });
    }
set()

function set(){
     CreateIframe().then(created => {
         getDomain().then(domain => {
            console.log("Iframe Created", created)
            let count = 0;
            const message = {
                domain: domain,
                custom: window.location.domain
            }
            var iframe = document.getElementById('myiframe');
            console.log(iframe)
            if (count == 0) {
                console.log("message emited")
                iframe.contentWindow.postMessage(message, "*");
                count = 1
            }
            let receiveMessage = function(event) {
                console.log(event.data)
                let isOpen = JSON.parse(event.data.isOpen)
                console.log(isOpen.isOpen, "value")
                if (isOpen === true) {
                    this.alterSize();
                } else if (isOpen === false) {
                    this.reduceSize()
                }
            }
            window.addEventListener("message", receiveMessage, true);
         })
    })
}
