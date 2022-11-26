import React from "react"
export default function NewReview(){
    // star rating states
    const[rating,setrating]=React.useState(null)
    const[hoverrating,sethoverrating]=React.useState(null)
    // formdata states
    const[formData,setformData]=React.useState(
        {
            reviewtitle:'',
             comments:'',
             rating:'',
        }
    )

    function handleReview(event){
        const [name,value,type,checked]=event.target
        setformData(prevforData=>{
        event.preventDefault()
          return{
            ...prevforData,
            [name]:type === 'checkbox' ? checked : value
          }
        })

    }
    return(
        <div className="products-newreview ml-3 mr-3">
        <div className="products--newreview--panel" id='newreview'>
                <i onClick={closebtnform} class="fa-solid fa-xmark position-absolute fa-2x text-danger"></i>
                <h4 className="text-center">WRITE REVIEW, PUBLISH</h4>
                <hr></hr>
                <form className="form--review d-grid p-2 m-1">
                    <div className="input-group d-flex">
                    <h5>Rating</h5>
                    <div className="star-rating d-flex">
                        {[...Array(5)].map((star,i) =>{
                            const ratingval=i+1
                            return (
                            <label for='rating'>
                                <input type='radio' 
                                       name='rating' 
                                       checked={formData.rating}
                                       value={ratingval}
                                       onClick={()=>setrating(ratingval)}
                                       onChange={handleReview} />
                                <i className="fa-solid fa-star fa-1x"
                                    onMouseEnter={()=>sethoverrating(ratingval)}
                                    onMouseLeave={()=>sethoverrating( null )}
                                    style={{color:ratingval<=(hoverrating ||rating)?'yellow':'silver'}}></i>
                            </label>
                            )
                        })}
                    </div>
                    </div>
                    <div className="input-group p-2 d-grid">
                        <h5>Review Title</h5>
                        <input type='textarea' className="p-2" placeholder='Review Title' name='reviewtitle' required w-50 onChange={handleReview}/>
                    </div>
                    <div className="input-group p-2 d-grid">
                        <h5>Comment</h5>
                        <input type='textarea' height='200' className="p-2" placeholder='Comment here' name='comments' onChange={handleReview}  required w-50/>
                    </div>
                    <input type='submit' className="btn btn-primary w-50" value='SUBMIT' name='submit'></input>
                </form>
        </div>
        </div>
    )
    function closebtnform(){
        document.querySelector('.products-newreview').style.display = 'none';
    } 
}