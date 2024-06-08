 window.addEventListener("scroll",function(){
            var header =document.querySelector("header");
            header.classList.toggle("sticky",window.scrollY >60)
        });
let cartItem = document.querySelector('.sidebar');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    searchForm.classList.remove('active');
}


let closeCart = document.querySelector('.close');

document.querySelector('.close').onclick = () =>{
    cartItem.classList.remove('active');
}


const product = [
 {
        "id": 1,
        "price": 17,
        "image": "images/offer1.jpeg",
        "describe":"",
        "name":"buffet",
    },
    {
        "id": 2,
        "price":50,
        "image": "images/offer2.jpeg",
        "describe":"The carcass of a fresh Somali sheep slaughtered in the slaughterhouse",
        "name":"A carcass with rice for 20 people",
    },
    {
        "id": 3,
        "price": 14,
        "image": "images/offer3.jpeg",
        "describe":"Flowers, candles, cake",
        "name":"Organizing a table",
    },
     {
        "id": 4,
        "price": 12,
        "image": "images/offer4.jpeg",
        "describe":"Chicken samosa, cheese samosa",
        "name":"Frozen box",
    },
    {
        "id": 1,
        "price": 17,
        "image": "images/img-1.jpeg",
        "describe":"qurus, honey",
        "name":"Qurus",
    },
    {
        "id": 2,
        "price": 13,
        "image": "images/img-2.jpeg",
        "describe":"balaleet, eggs, nuts, saffron",
        "name":"Balaleet",
    },
    {
        "id": 3,
        "price": 14,
        "image": "images/img-3.jpeg",
        "describe":"Luqaimat Stuffed with cheese",
        "name":"Luqaimat",
    },
     {
        "id": 4,
        "price": 12,
        "image": "images/img-4.jpeg",
        "describe":"Harris,Cow ghee",
        "name":"Harris",
    },
    {
        "id": 5,
        "price": 14,
        "image": "images/img-5.jpeg",
        "describe":"Arsia ,Tarshah",
        "name":"Arsia",
    },
       {
        "id": 6,
        "price": 18,
        "image": "images/img-6.jpeg",
        "describe":"muqli lahm , omani bread",
        "name":"Muqli Lahm  ",
    },
    {
        "id": 7,
        "price": 15,
        "image": "images/img-7.jpeg",
        "describe":"Muqli Lahm ",
        "name":"Muqli Lahm",
    },
    {
        "id": 8,
        "price": 17,
        "image": "images/img-8.jpeg",
        "describe":"",
        "name":"",
    },
    {
        "id": 9,
        "price": 11,
        "image": "images/img-9.jpeg",
        "describe":"Meat ,Rice,Authority,Chutney",
        "name":"Meat Machboos",
    },    
    {
        "id": 10,
        "price": 11,
        "image": "images/img-10.jpeg",
        "describe":"Chicken , Chips, Rice,Authority,Chutney",
        "name":"Chicken Machboos",
    },    {
        "id": 11,
        "price": 17,
        "image": "images/img-11.jpeg",
        "describe":"Khabeesa",
        "name":"Khabeesa",
    },   {
        "id": 12,
        "price": 15.99,
        "image": "images/img-12.jpeg",
        "describe":"rahash ,nuts",
        "name":"Rahash",
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image,price,name,describe} = item;
        return(
        `<div class='menu-items-left'>

            <div class='menu-item'>
             
                <img src=${image}></img>
                
                <h3 >${name} <p>${describe}</p> <span class="primary-text">${price}.00 RO</span></h3>
        <div class='content'>
        `+
        "<button class='cart-btn' onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>
        </div>`



    )
        }).join('')
var cart =[];
 var num =1;
function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}



function delElement(a){
    cart.splice(a, 1);

    displaycart();
}


function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        
        document.getElementById("total").innerHTML = 0+".00"+"RO";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = total+".00"+"RO";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
               
                <h2 style='font-size: 15px;'> ${price}.00RO</h2>`+
                /*"<div class='wrapper'><span id='minus'>-</span><span id='num' >01</span><span id='plus'onclick='plus' >+</span></div>"+*/
                "<i class='' onclick='delElement("+ (j++) +")'>X</i></div>"
            );
        }).join('');
    }

    
}
