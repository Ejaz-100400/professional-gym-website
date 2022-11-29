import React from 'react'
import  gympic from '../../../../public/assets/wp5643116.jpg'
export default function PanelDesc(props){
    const[cart,setcart]=React.useState(false)

    function handlecart(){
        setcart(prevstate=>!prevstate)
    }


    return(
        <div>
            <div className="products--main--section position-relative d-flex p-2" id={props.idname}>
                <div className="products--context">
                    <span className="prod-title">{props.ProductName}</span>
                    <div className="prod--context--actions mt-5 d-flex">
                        <span className="cost">₹{props.Price}</span>
                        <span  className="kg">{props.kg}</span>
                        <button  onClick={handlecart} className="btn cart btn-cart p-2">{cart?'Remove from cart':'Add to cart'}<i class="fa-solid fa-cart-shopping"></i></button>
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