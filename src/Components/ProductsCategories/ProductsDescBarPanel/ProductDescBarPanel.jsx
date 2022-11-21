import React from 'react';
import ProductReviews from './Reviews/ProductReviews';
export default function ProductsDescBar(props){
    return(
        <div className="products--desc--panel" >
            <div className="products--desc--main d-flex">
                <div className="products--desc--main--context d-grid">
                    <h2 className="text-light text-left text-uppercase w-100">{props.ProductName}<br></br>{props.kg}</h2>
                    <div className="products--desc--main--context--pc d-flex">
                    <span className="text-dark bg-warning p-2 mt-2">{props.Price}</span>
                    <button  className='btn btn-danger text-center d-flex text-light mt-2 p-2'>ADD TO CART<i class=" fa-solid fa-cart-shopping fa-2x"></i></button>
                    </div>     
                </div>
                <div className='p-5'>
                    <img src={props.card_img_src} width='300' height='340'></img>
                </div>
             </div>
             <div className='product--main--sliders position-relative p-3'>
                <div class="product--main--sliders--context">
                    <div className="d-grid">
                        <div className="d-flex product--main--desc">
                        <div className='product--desc--group'>
                        <h2 className="text-primary text-light">Need for?</h2>
                        <span className="text-light">{props.Madefor}</span>
                        </div>
                        <div className='product--desc--group'>
                        <h2 className="text-primary text-light">Manufactured By</h2>
                        <span className="text-light">{props.Manufactured_by}</span>
                        </div>
                        <div className="bg-success product--desc--group mt-4 p-3">
                        <h2 className="text-primary text-light text-center">NUTRITIONAL FACT</h2>
                        <p className='text-dark'>{props.Nutritional_Facts}</p>
                        </div>
                        </div>
                    <div className="product--review--section">
                        <ProductReviews/>
                    </div>
                    </div>
                </div>
             </div>
        </div>
    )
}