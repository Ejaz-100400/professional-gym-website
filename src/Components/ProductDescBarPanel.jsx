import React from 'react';

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
             <div className='product--main--sliders position-relative p-5'>
                <div class="product--main--sliders--context">
                    <div className="d-grid">
                        <h2 className="text-primary text-light">Need for?</h2>
                        <span className="text-light display-4">{props.Madefor}</span>
                        <div className="product--main--review pt-5 d-flex">
                            <div className="review--main--nos text-warning pt-3 d-grid">
                                <h1>Reviews</h1>
                                <h1>4.1</h1>
                                <span>15 verified reviews</span>
                            </div>
                            <div className="review--main--progress  mt-1 d-grid">
                                <div className="review--panel d-flex mt-5">
                                    <span className="text-light pb-3">5<i class="fa-solid p-1 fa-star "></i></span>
                                    <div className="progress">
                                    <span></span>
                                    </div>
                                    <span className="text-light pb-3">6 responses</span>
                                </div>
                                <div className="review--panel d-flex mt-3">
                                    <span className="text-light pb-3">4<i class="fa-solid p-1 fa-star "></i></span>
                                    <div className="progress">
                                    <span></span>
                                    </div>
                                    <span className="text-light pb-3">6 responses</span>
                                </div>
                                <div className="review--panel d-flex mt-3">
                                    <span className="text-light pb-3">3<i class="fa-solid p-1 fa-star "></i></span>
                                    <div className="progress">
                                    <span></span>
                                    </div>
                                    <span className="text-light pb-3">6 responses</span>
                                </div>
                                <div className="review--panel d-flex mt-3">
                                    <span className="text-light pb-3">4<i class="fa-solid p-1 fa-star "></i></span>
                                    <div className="progress">
                                    <span></span>
                                    </div>
                                    <span className="text-light pb-3">6 responses</span>
                                </div>
                                <div className="review--panel d-flex mt-3">
                                    <span className="text-light pb-3">1<i class="fa-solid p-1 fa-star "></i></span>
                                    <div className="progress">
                                    <span></span>
                                    </div>
                                    <span className="text-light pb-3">6 responses</span>
                                </div>
                            </div>
                            <button className="btn btn-primary review-btn text-uppercase text-light mt-3 d-flex" >WRITE A REVIEW</button>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    )
}