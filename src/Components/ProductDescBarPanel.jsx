import React from 'react';

export default function ProductsDescBar(props){
    return(
        <div className="products--desc--panel" >
            <div className="products--desc--main d-flex">
                <div className="products--desc--main--context d-grid">
                    <h1 className="text-light text-left text-uppercase">{props.ProductName}<br></br>{props.kg}</h1>
                    <div className="products--desc--main--context--pc d-flex">
                    <span className="text-dark bg-warning p-2 mt-2">{props.Price}</span>
                    <button  className='btn btn-danger text-center d-flex text-light mt-2 p-2'>ADD TO CART</button>
                    </div>     
                </div>
                <div className='p-2'>
                    <img src={props.card_img_src} width='300' height='340'></img>
                </div>
             </div>
             <div className='product--main--sliders position-relative p-5'>
                <div class="product--main--sliders--context">
                    <div className="d-grid">
                        <h2 className="text-primary text-light">Need for?</h2>
                        <span className="text-light display-4">{props.Madefor}</span>
                    </div>
                </div>
             </div>
        </div>
    )
}