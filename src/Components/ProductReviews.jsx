export default function ProductReviews(){
    return(
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
    )
}