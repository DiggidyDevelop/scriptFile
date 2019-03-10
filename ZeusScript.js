window.onload = () => {


    function CreateIframe(){
     return new Promise(function(resolve, reject) {
         console.log("Inside function")
                let iframe = document.createElement('iframe');
                iframe.src = 'https://hyberchat.com/online/chat/';
                iframe.className = 'zeus-chat';
                iframe.scrolling = 'no';
                iframe.id = "myiframe";
                document.body.appendChild(iframe);
            setTimeout(function() {
                resolve(true)
            }, 300);
          });
    }

    CreateIframe().then(created => {
        console.log("Iframe Created", created)
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
    })

}
