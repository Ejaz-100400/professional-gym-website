import React from "react";

export default function ProductsSlideCard(props){
    const [display,setdisplay] =React.useState();
   
    return(
        <div className="products--slider">
        <div className="products--slide-card--item d-grid">
            <i class="fa-sharp fa-solid fa-bookmark "><span></span></i>
            <span class='bookmark--desc'>{props.Offer}% <br></br>OFF</span>
            
           <img className="card-img "src={props.card_img_src} width="403" height="415"></img>
           <div className="product--slide-card--item--desc text-light position-absolute p-3">
            <h4>{props.ProductName}</h4>
            <h3>{props.kg}/SERVING</h3>
            <button onClick={openpanel}className='btn btn-danger desc-btn text-center d-flex text-light p-2 m-3'>VIEW DESCRIPTION</button>
           </div>
        </div>
        </div>    
    )
    function openpanel(){
        document.querySelector('.products--panel').style.display = 'block';
    }
    // function dis(){
    //     setdisplay(prestate=>{
    //         prestate=document.querySelectorAll('.desc-btn')
    //         prestate.forEach((ele)=>{
    //             ele.addEventListener('click',function(){
    //                 let dispsec=document.querySelector('.prod-desc-disp')
    //                 if(dispsec.style.display=='none'){
    //                     dispsec.style.display="block"
    //                 }
    //                 else{
    //                     dispsec.style.display="none"
    //                 }
    //                 // $('.prod-desc-disp').slideDown(200);
    //             })
    //         })
    //     })
    // }

}