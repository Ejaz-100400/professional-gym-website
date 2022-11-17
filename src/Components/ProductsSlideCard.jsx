

export default function ProductsSlideCard(props){
    return(
        <div className="products--slide-card--item d-grid">
            <i class="fa-sharp fa-solid fa-bookmark "><span></span></i>
            <span class='bookmark--desc'>10% <br></br>OFF</span>
            
           <img className="card-img w-100"src={props.cardimg} width="403" height="415"></img>
           <div className="product--slide-card--item--desc text-light position-absolute p-3">
            <h3>WHEY PROTEIN</h3>
            <h3>40kg/SERVING</h3>
            <button className='btn btn-danger text-center d-flex text-light p-2 m-3'>VIEW DESCRIPTION</button>
           </div>
        </div>
    )

}