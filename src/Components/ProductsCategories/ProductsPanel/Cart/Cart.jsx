import React from 'react';
export default function Cart(props){
    const{cartItems,cartItemsactive}=props;
    const[deletecart,setdeletecart] = React.useState(false)
    function handledeletecart(){
        setdeletecart(prev=>!prev)
        document.querySelector('.cart-val').innerText='';
    }
    return(
     <div className="cart-container position-fixed">
        {cartItems.length==0 && <h1 className="cart-msg text-light w-100">You haven't added any carts yet :)</h1>}
                {[...Array(4)].map(()=>{
                    return(
                    <div className="cart-item">
                        <div className="cart-list d-flex p-2">
                            <div className="d-grid">
                                <span className="cart-list-name w-100" style={{display:deletecart?'none':'block'}}></span>
                                <div className="d-flex quantity w-100 pt-2">
                                <span className="add">+</span>
                                <span className="cart-list-quantity" style={{display:deletecart?'none':'block'}}></span>
                                <span className="minus">-</span>
                                <span className="cart-list-price" style={{display:deletecart?'none':'block'}}></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    )
                })}
                  <div className="d-flex btn-sec p-4">
                        <button className='btn btn-danger' onClick={handledeletecart}>
                        {deletecart ?<span>Restore All</span>:<span>Remove All</span>}
                        </button>
                    </div>
                 <div className="d-flex  buy-sec p-5">
                    <h2>Total</h2>
                    <span>value</span>
                    <button className="btn btn-primary p-2 w-25" onClick={()=>alert('Thank you for buying')}>Buy</button>
                </div>
       
{/*         
        <div className="cart-item">
            <div className="cart-list d-flex p-2">
                <div className="d-grid">
                <span className="cart-list-name"></span>
                <span className="cart-list-quantity"></span>
                </div>
                <div className="d-grid">
                    <span className="cart-list-price"></span>
                </div>
            </div>
        </div>
        
        <div className="cart-item">
            <div className="cart-list d-flex p-2">
                <div className="d-grid">
                <span className="cart-list-name"></span>
                <span className="cart-list-quantity"></span>
                </div>
                <div className="d-grid">
                    <span className="cart-list-price"></span>
                </div>
            </div>
        </div>
        
        <div className="cart-item">
            <div className="cart-list d-flex p-2">
                <div className="d-grid">
                <span className="cart-list-name"></span>
                <span className="cart-list-quantity"></span>
                </div>
                <div className="d-grid">
                    <span className="cart-list-price"></span>
                </div>
            </div>
        </div> */}
    </div>
    )
}