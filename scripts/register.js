// woman
function womanpage(){
    window.location.href="woman.html"
}



let arr = JSON.parse(localStorage.getItem("details")) || [];

function register(){

    console.log("hii")
    let obj ={
        firstname : document.getElementById("firstname").value,
        lastname : document.getElementById("lastname").value,
        email : document.getElementById("email").value,
        pass : document.getElementById("pass").value,
        dob : document.getElementById("dob").value,
        mobl : document.getElementById("mobl").value,
    }
    
    arr.push(obj);
    localStorage.setItem("details",JSON.stringify(arr));
    window.location.reload();
    window.location.href="woman.html";
}