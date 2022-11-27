
export default function Main(){
    return(
        <div className="main  p-2 d-flex text-light text-center position-relative">
            {/* <img src={gympic} width="200" className='position-absolute'/> */}

            {/* CART SECTION */}
            <div className="cart-container position-fixed">
                <h1 className="cart-msg">You haven't added any carts yet :)</h1>
    
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
            </div>

            <div className="main--content">
                <div className="main--toggle">
                    <span className="p-3"><span className="p-2">THE BEST</span> FITNESS CLUB IN THE TOWN</span>
                </div>
                <div className="main--context">
                    <span><span className="text-stroke">SHAPE</span>YOUR IDEAL BODY</span>
                    <div className='text-center glow p-3'>Everyone starts from a different starting line, what do you want to start with🔥</div>
                </div>
                <div className="main--btns d-flex">
                    <button class='btn p-3 mb-2'>
                        <a>GET STARTED</a>
                    </button>
                    <button class='btn p-3 mb-2'>
                        <a>LEARN MORE..</a>
                    </button>
                </div>
            </div>      
    </div>
    )
}