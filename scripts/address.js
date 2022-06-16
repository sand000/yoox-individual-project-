// count data
let arr4 = JSON.parse(localStorage.getItem("procount")) || [];
let procount = document.getElementById("procount");
for(let a=0; a<arr4.length; a++){
    procount.innerText = `${arr4.length} items`;
   
    }

// getting data
    let arr1 =JSON.parse(localStorage.getItem("dress"));

    let arr2 = JSON.parse(localStorage.getItem("total"));

    let amount = document.getElementById("amount");
    let gtotal = document.getElementById("gtotal");

    for(let a=0; a<arr2.length; a++){
    amount.innerText = `US$ ${arr2[a]}`;
    gtotal.innerText = `US$ ${arr2[a]}`;
    }



    // function ship to address

    let arr3 = JSON.parse(localStorage.getItem("ship")) || [];

    function shipToAddress(){
       
        let obj1 = {

            fname : document.getElementById("fname").value,
            lname : document.getElementById("lname").value,
            tele : document.getElementById("tele").value,
            address : document.getElementById("address").value,
            zipcode : document.getElementById("zipcode").value,
            city : document.getElementById("city").value,
            state : document.getElementById("state").value,
            country : document.getElementById("country").value,

        }

        arr3.push(obj1);
        localStorage.setItem("ship",JSON.stringify(arr3));


        window.location.href="cardDetails.html"
    }