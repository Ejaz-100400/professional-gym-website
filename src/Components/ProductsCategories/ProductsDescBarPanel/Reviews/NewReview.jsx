import React from "react"
export default function NewReview(){
    const[star,setstar]=React.useState(false)
    const [closeform,setcloseform]=React.useState(false)
    function closebtnform(){
        setcloseform(prevState=>!prevState)
    } 
    return(
        <div className="products-newreview" style={{display:closeform?'block':'none'}}>
        <div className="products--newreview--panel" id='newreview'>
                <i onClick={closebtnform}class="fa-solid fa-xmark position-absolute fa-2x"></i>
                <h4 className="text-center">WRITE REVIEW, PUBLISH</h4>
                <hr></hr>
                <form className="form--review d-grid p-2">
                    <div className="input-group d-flex">
                    <h5>Rating</h5>
                    <div className="star-rating d-flex">
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    </div>
                    </div>
                    <div className="input-group p-2 d-grid">
                        <h5>Review Title</h5>
                        <input type='textarea' className="p-2" placeholder='Review Title' name='reviewTitle' required w-50/>
                    </div>
                    <div className="input-group p-2 d-grid">
                        <h5>Comment</h5>
                        <input type='textarea' className="p-2" placeholder='Comment here' name='reviewTitle' required w-50/>
                    </div>
                    <input type='submit' className="btn btn-primary w-50" value='SUBMIT' name='submit'></input>
                </form>
        </div>
        </div>
    )
}