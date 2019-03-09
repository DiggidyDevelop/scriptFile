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
window.onload = () => {

//         var iframe = document.createElement('iframe');
//         iframe.src = 'https://hyberchat.com/online/chat/';
//         iframe.className = 'zeus-chat';
//         iframe.scrolling = 'no';
//         iframe.id = "myiframe";
//         document.body.appendChild(iframe);
        let count = 0;
        const message = {
            domain: window.location.hostname
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
    } 