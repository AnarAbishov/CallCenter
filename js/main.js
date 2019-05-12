let login_btn = document.querySelector(".btn_login");
let callcenterParent = document.querySelector(".callcenter");
let loginedUsername = document.querySelector(".logined_user");
let wrapper = document.querySelector(".wrapper");
let deleteBtn = document.querySelector(".delete");

let images = ["images/callcenter.png", "images/callcenterboy.png"]



class Message {
    constructor(_message, _tagName, _userImg, _reSelect) {
        this.message = _message;
        this.tagName = _tagName;
        this.userImg = _userImg;
        this.reSelect = _reSelect;
        this.parent = this.creaetMsg();
        this.createImg();
        this.createTxt();
    }
    creaetMsg() {
        let msgTag = document.createElement(this.tagName);
        msgTag.className = "message";
        wrapper.appendChild(msgTag);
        return msgTag;
    }
    createImg() {
        let image = document.createElement("img");
        image.addEventListener("click", function () {
            console.log(this.reSelect);
            if (this.reSelect == true) {
                this.parentElement.classList.remove("selected");
                this.reSelect = false;
            } else {
                this.parentElement.classList.add("selected");
                this.reSelect = true;
            }
            deleteBtn.style.display = "block";
        })
        if (this.userImg) {
            image.src = images[0];
        } else {
            image.src = images[1];
        }
        this.parent.appendChild(image);
    }
    createTxt() {
        let text = document.createElement("p");
        text.innerText = this.message;
        this.parent.appendChild(text);
    }
}

login_btn.addEventListener("click", function () {
    let username = document.querySelector(".input_email").value;
    login_btn.parentElement.setAttribute("hidden", "hidden");
    callcenterParent.removeAttribute("hidden");
    loginedUsername.innerHTML = username;

})

let sendMessage = document.querySelector(".send_message");

sendMessage.addEventListener("click", function () {
    let message = document.querySelector(".text_input").value;
    let checking = message == message.toLowerCase() ? true : false;
    let newMessage = new Message(message, "div", checking, true);

})

deleteBtn.addEventListener("click", function () {
    let selected = document.querySelectorAll(".selected");
    for (let elem of selected) {
        elem.remove();
    }
    this.style.display = "none";
})

