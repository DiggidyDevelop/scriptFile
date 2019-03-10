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
            // setTimeout(function() {
            //   resolve('foo');
            // }, 300);
            resolve(true)
          });
    }

}
