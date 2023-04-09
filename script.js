const element_container = document.getElementById("container");
const vanImage = document.getElementById("background_image");
const element_formContainer = document.getElementById("form-container");
const element_signature = document.getElementById("signature");

var container_width = element_container.offsetWidth;

function height_container(val){
    var h = 0;
    var h_string = "";
    if (val > 1200) {
        h = 746;
    } else if (val <= 1200 && val >= 500){
        h = (val - (454-(1200-val)*(203/700)));
    } else {
        h = 251;
    }
    h_string = h + "px";
    element_container.style.height=h_string;
    return h;
}

function top_Container(val){
    var t = 0;
    var t_string = "";
    t = (746 - val)/2;
    t_string = t + "px";
    element_container.style.top = t_string;
}

function opacity_container(val){
    var o_container = 0;
    if (val >= 1000){
        o_container = 1;
    } else {
        o_container = 1-(400/val);
    }
    
    vanImage.style.opacity=o_container;
}

function left_formContainer(val){
    var l = 0;
    var l_string = "";
    if (val >=1000) {
        l = 500;
    } else if (val < 1000 && val >= 500){
        l = val-500;
    } else {
        l = 0;
    }
    l_string = l + "px";
    element_formContainer.style.left=l_string;
}

function width_formContainer(val){
    var widthFormContainer = 0;
    if (val >= 1000){
        widthFormContainer = (val-1000)+500;
    } else {
        widthFormContainer = 500;
    }
    var width_formContainer_string = widthFormContainer + "px";
    element_formContainer.style.width=width_formContainer_string;
}

function opacity_formContainer(val){
    var o = 0;
    if (val >= 1000){
        o = 1;
    } else {
        o = 1-(400/val);
    }
    
    element_formContainer.style.opacity=o;
}


function left_signature(val){
    var ls = 0;
    var ls_string = "";
    if (val >=670) {
        ls = 220;
    } else {
        ls = 60;
    }
    ls_string = ls + "px";
    element_signature.style.left=ls_string;
}


function resize() {
    container_width = element_container.offsetWidth;
    // t = height_container(container_width);
    // top_Container(t);
    // console.log(container_width);
    left_formContainer(container_width); 
    width_formContainer(container_width);
    // opacity_formContainer(container_width);  
    opacity_container(container_width); 
    left_signature(container_width);
}

left_formContainer(container_width);
width_formContainer(container_width);
opacity_container(container_width);
left_signature(container_width);
// t = heightValue(w);
// topValue_Container(t); 

const elements = document.getElementById("signature");
var w_2 = elements.offsetWidth;
let text_w = "width:";
console.log(text_w+w_2);
var h_2 = elements.offsetHeight;
let text_h = "hight:";
console.log(text_h+h_2);


function phone_validation() {
    let number = document.getElementById("phone_number").value;
    console.log(number.length);
    let text;
    if (isNaN(number)) {
      text = "Only numbers allowed";
    } else if (number.length>0 && number.length<9){
        text = "Must be 9 numbers";
    } else if (number.length===0 || number.length==="" || number.length===9){
        text = "";
    } else if (number.length>=10){
        text = "Must be 9 numbers";
    }
    document.getElementById("error").innerHTML = text;
}

var password_array = [];

function password_1() {
    let password = document.getElementById("password").value;
    password_array.push(password);
}

function password_validation() {
    const compareArrays = (a, b) => {
        return JSON.stringify(a) === JSON.stringify(b);
      };
    let passwordConfirm = document.getElementById("confirm_password").value;
    var passwordConfirm_array = [];
    let error;
    passwordConfirm_array.push(passwordConfirm);
    console.log(passwordConfirm.length)
    if (passwordConfirm.length >0){
        let password_1 = password_array.slice(-1);
        let password_2 = passwordConfirm_array.slice(-1);
        text = compareArrays(password_1,password_2);
        if (text === false){
            error = "password doesn't match";
        }
        else if (text === true){
            error = "";
        }
    } else if (passwordConfirm.length === 0){
        error = "";
    }
    document.getElementById("password_error").innerHTML = error;
}


