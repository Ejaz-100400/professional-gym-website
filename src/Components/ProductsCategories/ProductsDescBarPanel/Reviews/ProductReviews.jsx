import ReviewData from "C:/Users/Ejaz Ahmed/OneDrive/Desktop/gym-ecommerce/src/Components/Datas/ReviewData"
import ReviewDesc from "./ReviewDesc"
export default function ProductReviews(props){
    const reviewdata=ReviewData.map((review)=>{
        return(
            <ReviewDesc key={review.id}
            {...review}/>
        )
    })
    return(
    <div className="product-review">
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
                <div className="progress--fill">
                <span></span>
                </div>
                </div>
                <span className="text-light pb-3">6 responses</span>
            </div>
            <div className="review--panel d-flex mt-3">
                <span className="text-light pb-3">4<i class="fa-solid p-1 fa-star "></i></span>
                <div className="progress">
                <div className="progress--fill">
                <span></span>
                </div>
                </div>
                <span className="text-light pb-3">6 responses</span>
            </div>
            <div className="review--panel d-flex mt-3">
                <span className="text-light pb-3">3<i class="fa-solid p-1 fa-star "></i></span>
                <div className="progress">
                <div className="progress--fill">
                <span></span>
                </div>
                </div>
                <span className="text-light pb-3">6 responses</span>
            </div>
            <div className="review--panel d-flex mt-3">
                <span className="text-light pb-3">4<i class="fa-solid p-1 fa-star "></i></span>
                <div className="progress">
                <div className="progress--fill">
                <span></span>
                </div>
                </div>
                <span className="text-light pb-3">6 responses</span>
            </div>
            <div className="review--panel d-flex mt-3">
                <span className="text-light pb-3">1<i class="fa-solid p-1 fa-star "></i></span>
                <div className="progress">
                <div className="progress--fill">
                <span></span>
                </div>
                </div>
                <span className="text-light pb-3">6 responses</span>
            </div>
        </div>
        <button onClick={revi} id='rever' className="btn btn-primary review-btn text-uppercase text-light mt-3 d-flex" >WRITE A REVIEW</button>
    </div>
    <div className="review">
        {reviewdata}
    </div>
    </div>
    )
    function revi(){
    const but=document.getElementById('rever')
    but.addEventListener('click',function(){
        document.querySelector('.products-newreview').style.display="block";
    })
}
}