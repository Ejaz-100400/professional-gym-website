import React from 'react'
import ProductDesc from "./ProductDesc"
import ProductDescBarPanel from "./ProductDescBarPanel"
import {Swiper,SwiperSlide} from 'swiper/react'
import{Navigation,Pagination} from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css'
export default function ProductsDescBar(){
    const [close,setclose]=React.useState(false)
    function closebtn(){
        setclose(prevState=>!prevState)
    } 
    // const disp=function(){
    //     close==true?'none':'block'
    // }
    const productsdescdata = ProductDesc.map((productsdescdat)=>{
        return(
        <SwiperSlide>
        <ProductDescBarPanel
        key={productsdescdat.id}
        {...productsdescdat}/>
        </SwiperSlide>
        )
    })
   
    return(
        // position-absolute
        <div className="overflow-hidden position-absolute w-100 prod-desc-disp" style={{display:close?'block':'none',transition:'all 2s ease-in'}}>
        <div className="products-desc-bar d-flex">
        <i onClick={closebtn} 
        class="fa-solid text-danger fa-xmark  fa-3x position-absolute"></i>
        <Swiper navigation={true} 
        modules={[Navigation]}  
        pagination={true} 
        style={{
            '--swiper-wrapper-zIndex': '3',
        }}
        className="mySwiper">  
            {productsdescdata}
        </Swiper>
        </div>
        </div>
    )
}