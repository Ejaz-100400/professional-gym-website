import React from 'react'
import  gympic from '../../../../public/assets/wp5643116.jpg'
export default function PanelDesc(props){
    const[cart,setcart]=React.useState(1)
    function handlecart(){
         // counting the cart items
        setcart(cart=>cart+1)
        $('.cart-val').fadeOut(200).fadeIn(200);
        $('.btn-join').css({'animation':"scaling 0.2s ease-in-out"})
        $('.cart-msg').fadeOut(40);
        $('.cart-item').css({'display':'block'})
        // setprice(price=>price*2)
        document.querySelector(".cart-val").innerHTML = cart;      
        let itemname= document.getElementsByClassName('prod-title') //title of the product
        let price=document.getElementsByClassName('cost') //cost of the product
        //condition for product1 gain product
        if(props.ProductName=="Muscular Gain Protein"){
            console.log(itemname[1].innerHTML)
            console.log(price[1].innerHTML)
            console.log(props.idname)
            document.querySelector(".cart-list-name").innerHTML=itemname[0].innerHTML; 
            document.querySelector(".cart-list-price").innerHTML=price[0].innerHTML;
            document.querySelector(".cart-list-quantity").innerHTML=cart;
        }
        if(props.ProductName=="Muscular Whey Protein"){
            console.log(itemname[2].innerHTML)
            console.log(price[2].innerHTML)
            console.log(props.idname)
            document.querySelectorAll(".cart-list-name")[1].innerHTML=itemname[1].innerHTML; 
            document.querySelectorAll(".cart-list-price")[1].innerHTML=price[1].innerHTML;
            document.querySelectorAll(".cart-list-quantity")[1].innerHTML=cart;
        }
    }
   
    return(
        <div>
            <div className="products--main--section position-relative d-flex p-2" id={props.idname}>
                <div className="products--context">
                    <span className="prod-title">{props.ProductName}</span>
                    <div className="prod--context--actions mt-5 d-flex">
                        <span className="cost">₹{props.Price}</span>
                        <span  className="kg">{props.kg}</span>
                        <button onClick={handlecart} className="btn cart p-2">Add to Cart<i class="fa-solid fa-cart-shopping"></i></button>
                    </div>
                </div>
                <img src={gympic}  width='250'></img>
            </div>
            <div className="products--panel--description d-grid">
                <p>{props.Madefor}</p>
            </div>
        </div>
    )
}