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
    console.log("Hello from function1")
}

function reduceSize() {
    document.getElementsByClassName('zeus-chat')[0].style.width = "100px";
    document.getElementsByClassName('zeus-chat')[0].style.height = "100px";
}
    function CreateIframe(){
     return new Promise(function(resolve, reject) {
        let domain = null;
        const listOfScripts = document.getElementsByTagName('script')
        console.log("scripts", listOfScripts)
        for(let i = 0; i < listOfScripts.length; i++){
            console.log(listOfScripts[i])
            if(listOfScripts[i].src.includes("ZeusScript.js")){
                console.log("match and inside if",listOfScripts[i].src)
                const url = new URL(listOfScripts[i].src);
                domain = url.searchParams.get("shop")
                
            }
        }
         console.log("Inside function")
                let iframe = document.createElement('iframe');
                iframe.src = 'https://hyberchat.com/online/chat/';
                iframe.className = 'zeus-chat';
                iframe.scrolling = 'no';
                iframe.id = "myiframe";
                iframe.style.cssText += 'width: 100px; height: 100px; position: fixed; z-index: 1000;border: 0; right: 0; bottom: 0;'
                document.body.appendChild(iframe);
            setTimeout(function() {
                console.log("domain before timeout", domain)
                resolve({mounted: true, domain: domain})
            }, 1000);
          });
    }
set()

function set(){
        CreateIframe().then(created => {
            console.log("Iframe Created", created)
            let count = 0;
            const message = {
                domain: created.domain,
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
            // var chatwindow = document.getElementById('sc-chat-window');
            // chatwindow.style.cssText += ' left: 40px;'

            // var launcher = document.getElementById('sc-launcher');
            // launcher.style.cssText += ' left: 10px;'

            window.addEventListener("message", receiveMessage, true);
        })
}

