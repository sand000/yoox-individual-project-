// womanpage
function womanpage(){
    window.location.href="woman.html"
}


// selected data
    let arr1 =JSON.parse(localStorage.getItem("dress")) || [];

    console.log(arr1);

    arr1.map(function(e,i){

    
        let appendimg = document.getElementById("appendimg");
        let details = document.getElementById("details");

        // details.inn
        var box = document.createElement("div");
        box.setAttribute("id","box")
        

        var image = document.createElement("img");
        image.src = e.img;
        image.setAttribute("id","dressimg")

        var brand = document.createElement("h4");
        brand.innerText = e.brand;
        brand.setAttribute("id","brand")

        var type = document.createElement("p");
        type.innerText = e.type
        type.setAttribute("id","type")

        var innerBox = document.createElement("div");
        innerBox.setAttribute("id", "innerBox")

        var price = document.createElement("h5");
        price.innerText =`US$ ${e.price}`;

        let size = document.createElement("div");
        size.setAttribute("id","size")
        

        let xs = document.createElement("p");
        xs.innerText = "XS";
        let s = document.createElement("p");
        s.innerText = "S";
        let m = document.createElement("p");
        m.innerText = "M";

        let l = document.createElement("p");
        l.innerText = "L";

        // add to bag
        let add = document.createElement("button");
        add.innerText = "ADD TO SHOPPING BAG";
        add.setAttribute("id","add");
        add.addEventListener("click",function(){
             addtobag(e,i);
        })


        // ADD to dream box
        let addtodreambox = document.createElement("button");
        addtodreambox.innerText = "ADD TO DREAM BOX";
        addtodreambox.setAttribute("id","add1");

        let exclude = document.createElement("p");
        exclude.innerText = "This item is excluded from all promotional offers";
        exclude.setAttribute("id","exclude")

        size.append(xs,s,m,l);

        innerBox.append(brand, type, price, size, add, addtodreambox, exclude)
        box.append(image)


        appendimg.append(box);
        details.append(innerBox);
    });



    function addtobag(e,i){
        window.location.href="bag.html";
    }