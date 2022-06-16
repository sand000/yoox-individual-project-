// womanpage
function woman(){
    window.location.href="woman.html";
}

// proceed function
   function proceed(){
       window.location.href="address.html";
   }


// selected data
var itemcount =+ 0;
let procount=+ 0;

let arr1 =JSON.parse(localStorage.getItem("dress")) || [];

let arr2 = JSON.parse(localStorage.getItem("total")) || [];

// mapping data

let Procount = document.getElementById("procount");
let arr4 = JSON.parse(localStorage.getItem("procount")) || [];
arr1.map(function(e,i){

   procount = procount+1;
   Procount.innerText = `Bag (${procount})`;

   arr4.push(Procount);
   localStorage.setItem("procount",JSON.stringify(arr4))

   let added = document.getElementById("added");
 
   var box = document.createElement("div");
   box.setAttribute("id","box")
   
   var image = document.createElement("img");
   image.src = e.img;
   image.setAttribute("id","dressimg")

   var brand = document.createElement("h4");
   brand.innerText = e.brand;
   // brand.setAttribute("id","brand")

   var type = document.createElement("p");
   type.innerText = e.type
   // type.setAttribute("id","type")

   var innerBox = document.createElement("div");
   innerBox.setAttribute("id", "innerBox")

   var price = document.createElement("h5");
   price.innerText = `US$ ${e.price}`;

   // totalcount
   itemcount =+ itemcount+e.price;
  
   var div = document.createElement("div");
   div.setAttribute("id","div")

   var size = document.createElement("div");
   size.innerText = "S";

   // remove
   var remove = document.createElement("button");
   remove.innerText = "REMOVE";
   remove.setAttribute("id","remove");
   remove.addEventListener("click",function(){
       remove1(e,i);
       
   });

   var limited = document.createElement("h5");
   limited.innerText = "LIMITED AVAILABILITY";

   let total = document.getElementById("total").innerText= `US$ ${itemcount}`;
   let taxes = document.getElementById("taxes").innerText= `US$ ${102.00}`;
   let shipping = document.getElementById("shipping").innerText= `US$ ${26.00}`;
  
   // total
   let grandtotal = document.getElementById("grandtotal").innerText= `US$  ${itemcount+128}`;

   innerBox.append(brand, type, price, limited,remove);
   box.append(image);

   div.append(box, innerBox);

   added.append(div);

   arr2.push(itemcount+128);
   console.log(arr2)
   localStorage.setItem("total",JSON.stringify(arr2));
});




// remove function 
function remove1(e,i){
  
   arr1.splice(i,1);
   localStorage.setItem("dress",JSON.stringify(arr1));
   window.location.reload();
}