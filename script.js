function validate(){
    var usr=document.getElementById("username").value;
    var pas=document.getElementById("password").value;
    if(usr=="Thanveer-dev" && pas=="PASS123"){
        window.open('https://thanveer-dev.github.io/Portfolio/menu.html');
    }
    else{
        alert("incorrect password or user id");
    }
}

function showhide(){
    const hide1=document.getElementById('hide1');
    const hide2=document.getElementById('hide2');
    const password=document.getElementById('password');
    if(password.type=='password'){
        password.setAttribute('type','text');
        hide1.style.display="none";
        hide2.style.display="block";
    }
    else{
        password.setAttribute('type','password');
        hide1.style.display="block";
        hide2.style.display="none";
    }
}

function openpopup(){
    let popup=document.getElementById("popup");
    popup.classList.add("open-popup");
    let blur=document.getElementById("blur");
    blur.classList.add("blur");
    let color=document.getElementById("color");
    color.classList.add("col");
}

function closepopup(){
    let popup=document.getElementById("popup");
    popup.classList.remove("open-popup");
    let blur=document.getElementById("blur");
    blur.classList.remove("blur");
}