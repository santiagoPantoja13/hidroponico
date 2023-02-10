document.getElementById("ses_reg").addEventListener("click",register);
document.getElementById("ses_int").addEventListener("click",iniciarSesion);
window.addEventListener("resize", resi);
//variables
var cont_log_reg = document.querySelector(".cont_log_reg");
var form_log = document.querySelector(".form_log");
var form_log_reg = document.querySelector(".form_log_reg");
var back_box_init = document.querySelector(".back_box_init");
var back_box_reg = document.querySelector(".back_box_reg");

function resi(){
    if(window.innerWidth>850){
        back_box_init.style.display="block";
        back_box_reg.style.display="block";

    }else{
        back_box_reg.style.display ="block";
        back_box_reg.style.opacity ="1";
        back_box_init.style.display ="none"
        form_log.style.display ="block";
        form_log_reg.style.display="none";
        cont_log_reg.style.left = "0px";
    }
}

resi();

function register(){

    if(window.innerWidth>850){
        form_log_reg.style.display = "block";
        cont_log_reg.style.left ="410px";
        form_log.style.display ="none";
        back_box_reg.style.opacity ="0";
        back_box_init.style.opacity ="1";
    }else{
        form_log_reg.style.display = "block";
        cont_log_reg.style.left ="0px";
        form_log.style.display ="none";
        back_box_reg.style.display ="none";
        back_box_init.style.display ="block";
        back_box_init.style.opacity ="1"
    }
    
}

function iniciarSesion(){

    if(window.innerWidth>850){
        form_log_reg.style.display = "none";
        cont_log_reg.style.left ="10px";
        form_log.style.display ="block";
        back_box_reg.style.opacity ="1";
        back_box_init.style.opacity ="0";

    }else{
        form_log_reg.style.display = "none";
        cont_log_reg.style.left ="0px";
        form_log.style.display ="block";
        back_box_reg.style.display ="block";
        back_box_init.style.display ="none";
    }
    
}


