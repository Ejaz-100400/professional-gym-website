import React from 'react'
import  gympic from '../../../../public/assets/wp5643116.jpg'
export default function PanelDesc(props){
    const[cart,setcart]=React.useState(0)
    // const[partcart,setpartcart]=React.useState(1)
    function handlecart(){
        // setprice(price=>price*2)
        setcart(cart=>cart+1)
        $('.cart-val').fadeOut(200).fadeIn(200);
        $('.btn-join').css({'animation':"scaling 0.2s ease-in-out"})
        $('.cart-msg').fadeOut(40);
        $('.cart-item').css({'display':'block'}) 
        
        let itemname= document.getElementsByClassName('prod-title') //title of the product
        let price=document.getElementsByClassName('cost') //cost of the product
        let cartlist= document.querySelectorAll('.cart-list-name')
        let cartval=document.querySelector('.cart-val')
        //condition for product1 gain product
        if(props.ProductName=="Muscular Gain Protein"){
            document.querySelector(".cart-list-name").innerHTML=itemname[0].innerHTML; 
            document.querySelector(".cart-list-price").innerHTML=price[0].innerHTML;
            document.querySelector(".cart-list-quantity").innerHTML=cart+1;
        }
         //condition for product1 gain product
        if(props.ProductName=="Muscular Whey Protein"){
            document.querySelectorAll(".cart-list-name")[1].innerHTML=itemname[1].innerHTML; 
            document.querySelectorAll(".cart-list-price")[1].innerHTML=price[1].innerHTML;
            document.querySelectorAll(".cart-list-quantity")[1].innerHTML=cart+1;
        }
        if(props.ProductName=="Muscular Loss Weight"){
            document.querySelectorAll(".cart-list-name")[2].innerHTML=itemname[2].innerHTML; 
            document.querySelectorAll(".cart-list-price")[2].innerHTML=price[2].innerHTML;
            document.querySelectorAll(".cart-list-quantity")[2].innerHTML=cart+1;
        }
        if(props.ProductName=="Muscular For Kids"){
            document.querySelectorAll(".cart-list-name")[3].innerHTML=itemname[3].innerHTML; 
            document.querySelectorAll(".cart-list-price")[3].innerHTML=price[3].innerHTML;
            document.querySelectorAll(".cart-list-quantity")[3].innerHTML=cart+1;
        }
        // incrementing cart list
        if(cartlist[0].innerText =='Muscular Gain Protein'){
            cartval.innerHTML = '1'
        }
        if(cartlist[1].innerText =='Muscular Whey Protein'){
            cartval.innerHTML = '2'
        }
        if(cartlist[2].innerText =='Muscular Loss Weight'){
            cartval.innerHTML = '3'
        }
        if(cartlist[3].innerText =='Muscular For Kids'){
            cartval.innerHTML = '4'
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
                        <button onClick={handlecart} className="btn cart btn-cart p-2">Add to Cart<i class="fa-solid fa-cart-shopping"></i></button>
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