let arr = JSON.parse(localStorage.getItem("details")) || [];
let emailadd = document.getElementById("emailadd");
for(let i=0; i<arr.length; i++){
   emailadd.innerText = arr[i].email
}


// count data
let arr4 = JSON.parse(localStorage.getItem("procount")) || [];
let procount = document.getElementById("procount");
for(let a=0; a<arr4.length; a++){
    procount.innerText = `${arr4.length} items`;
   
    }

let arr3 = JSON.parse(localStorage.getItem("ship"));
console.log(arr3);

let  nameOfAddressee = document.getElementById("nameOfAddressee"); 
let addOfAddressee = document.getElementById("addOfAddressee");

for(let a=0; a<arr3.length; a++){
    
    nameOfAddressee.innerText = arr3[a].fname +" "+arr3[a].lname;
    addOfAddressee.innerText = arr3[a].address;
}


// RIGHT
let arr2 = JSON.parse(localStorage.getItem("total"));

    let amount = document.getElementById("amount");
    let gtotal = document.getElementById("gtotal");

    for(let a=0; a<arr2.length; a++){
    amount.innerText = `US$ ${arr2[a]}`;
    gtotal.innerText = `US$ ${arr2[a]}`;
    }


function proceed(){


//     let obj1 = {

//         fname : document.getElementById("fname").value,
//         lname : document.getElementById("lname").value,
//         address : document.getElementById("address").value,
//         zipcode : document.getElementById("zipcode").value,
//         city : document.getElementById("city").value,
//         state : document.getElementById("state").value,
//         country : document.getElementById("country").value,

//    }
   alert("Thank you for successfully placing order!");
   window.location.href="home.html";
   
}