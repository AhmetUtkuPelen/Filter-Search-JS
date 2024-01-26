let products = {

    data : [

{
    productName : "Product1",
    category : "Section1",
    price : "10",
    image:"jacket.png",
},

{
    productName : "Product2",
    category : "Section2",
    price : "11",
    image:"jean.png",
},

{
    productName : "Product3",
    category : "Section3",
    price : "12",
    image:"shirt.png",
},

{
    productName : "Product4",
    category : "Section4",
    price : "13",
    image:"shoes.png",
},

    ],

}


for(let i of products.data){

    let card = document.createElement("div")

    // ! CARD HAS CATEGORY BUT STAYS HIDDEN ! (css) \\

    card.classList.add("card",i.category,"hide")

    // ! IMAGE DIV ! \\

    let imgContainer = document.createElement("div")

    imgContainer.classList.add("image-container")

    let image = document.createElement("img")

    image.setAttribute("src",i.image)

    imgContainer.appendChild(image)

    card.appendChild(imgContainer)

    let container = document.createElement("div")

    container.classList.add("container")

    // ! NAME ! \\ 

    let name = document.createElement("h5")

    name.classList.add("product-name")

    name.innerText = i.productName.toUpperCase()

    container.appendChild(name)

    // ! PRICE ! \\

    let price = document.createElement("h6")

    price.innerText = i.price + "TL"

    container.appendChild(price)


    card.appendChild(container)

    document.getElementById("products").appendChild(card)

}


// ! PARAMETRES FROM BUTTONS  - SAME AS CATEGORY

function filter(value){

    let buttons = document.querySelectorAll("button-value")

    buttons.forEach(button =>{

        if(value.toUpperCase() == button.innerText.toUpperCase()){

            button.classList.add("active")

        }

        else{

            button.classList.remove("active")

        }

    })



    let elements = document.querySelectorAll(".card")

    elements.forEach(element =>{

        if(value == 'All'){

            element.classList.remove("hide")

        }

        else{

            if(element.classList.contains(value)){

                // ! DİSPLAY BASED ON CATEGORY ! \\

            element.classList.remove("hide")                

            }

            else{

                // ! HIDE OTHER CATEGORİES ! \\

                element.classList.add("hide")

            }

        }

    })


}
filter()



document.getElementById("search").addEventListener('click',() => {

    let search = document.getElementById("search-input").value

    let elements = document.querySelectorAll(".product-name")

    let cards =  document.querySelectorAll(".card")

    elements.forEach((element,index)=>{

        if(element.innerText.includes(search.toUpperCase())){

            cards[index].classList.remove("hide")

        }

        else{

            cards[index].classList.add("hide")

        }

    })


})



// ! FOR DISPLAYING THE PRODUCTS ! \\
window.onload = () => {

    filter('All')

}