// bag
function bag(){
    window.location.href="addToCart.html"
}
// signup button
function signup(){
     window.location.href="register.html";
}



// database

let arr =[
    {
        img : "https://www.yoox.com/images/items/12/12793777DM_14_f.jpg?impolicy=crop&width=306&height=390",
        brand : "SEE BY CHLOE",
        type : "T-shirt",
        price : 354.00
    },

    {
        img:"https://www.yoox.com/images/items/46/46851471DU_14_f.jpg?impolicy=crop&width=306&height=390",
        brand :"8 by YOOX",
        type :"Sunglasses",
        price : 8500,
    },

    {
        img:"https://www.yoox.com/images/items/13/13792883EJ_14_f.jpg?impolicy=crop&width=306&height=390",
        brand :"MISSIONI",
        type :"Maxi Skirts",
        price : 1049.00,
    },

    // {
    //     img:"https://www.yoox.com/images/items/12/12779290QW_14_f.jpg?impolicy=crop&width=306&height=390",
    //     brand :"SELF-PORTRAIT",
    //     type :"TOP",
    //     price : "US$ 362,00",
    // },

    // {
    //     img:"https://www.yoox.com/images/items/15/15204227CD_14_f.jpg?impolicy=crop&width=306&height=390",
    //     brand :"VERSACE",
    //     type :"Short dress",
    //     price : "US$ 1.779,00",
    // },

    // {
    //     img:"https://www.yoox.com/images/items/13/13780367GR_14_f.jpg?impolicy=crop&width=306&height=390",
    //     brand :"PAUL & JOE",
    //     type :"Midi skirt",
    //     price : "US$ 207,00",
    // },


    // {
    //     img:"https://www.yoox.com/images/items/12/12700141NG_14_f.jpg?impolicy=crop&width=306&height=390",
    //     brand :"SELF-PORTRAIT",
    //     type :"TOP",
    //     price : "US$ 362,00",
    // },
];



// dress
    arr.map(function (e,i){

        console.log("hii");

    var box = document.createElement("div");
    box.setAttribute("id","box")
    box.addEventListener("click",function(){
        add(e,i)
    });
    

    var image = document.createElement("img");
    image.src = e.img;

    var brand = document.createElement("h5");
    brand.innerText = e.brand;
    brand.setAttribute("id","brand")

    var type = document.createElement("p");
    type.innerText = e.type
    type.setAttribute("id","type")

    var innerBox = document.createElement("div");
    innerBox.setAttribute("id", "innerBox")

    var price = document.createElement("p");
    price.innerText = `US$ ${e.price}`;
    
      innerBox.append(brand, type, price)
      box.append(image,innerBox)

     document.querySelector("#dress").append(box);
     
});

let arr1 =JSON.parse(localStorage.getItem("dress")) || [];

function add(e,i){
    arr1.push(e);
    localStorage.setItem("dress",JSON.stringify(arr1));
}
