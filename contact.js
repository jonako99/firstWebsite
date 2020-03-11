function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
function validation(){
    var card = document.getElementsByClassName("wrapper");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";
    card[0].style.maxHeight = "500px";

    $(error_message).show();

    if(name.length<1){
        text = "Please Enter Your Name";
        error_message.innerHTML = text;
        setTimeout(function(){
            $(error_message).hide();
            card[0].style.maxHeight = "450px";
        }, 3000);
        return false;
    }

    if(email.indexOf("@") == -1 || email.length<1){
        text = "Please Enter A Valid Email";
        error_message.innerHTML = text;
        setTimeout(function(){
            $(error_message).hide();
            card[0].style.maxHeight = "450px";
        }, 3000);
        return false;
    }

    if(message.length<1){
        text = "Please Enter Your Message";
        error_message.innerHTML = text;
        setTimeout(function(){
            $(error_message).hide();
            card[0].style.maxHeight = "450px";
        }, 3000);
        return false;
    }
    $(error_message).hide();
    card[0].style.maxHeight = "450px";
    alert("Your message has been sent.");
    wait(5000);
    console.log('hehe');
    return false;
}

function go(){
    let messages = [];
    const addMessage = (ev)=>{
        console.log('fejwiao');
        ev.preventDefault();
        let msg = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
        }
        messages.push(msg);
        document.querySelector('form').reset(); //to clear the form for the next entries

        console.warn('added', {messages});

        //saving to localStorage
        localStorage.setItem('MyMessages', JSON.stringify(messages));
    }

    document.addEventListener('DOMContentLoaded', ()=>{
        document.getElementsById('msgSubmit').addEventListener('click', addMessage);
    })

}
window.onload = go;