import muscleicon from '../../../public/assets/muscle-unscreen.gif'
import ProductsDesc from "../Datas/ProductDesc"
import Panel from "./ProductsPanel/Panel"
import ProductsSlideCard from "./ProductsSlideCard" 
import {Swiper,SwiperSlide} from 'swiper/react'
import{Navigation,EffectCoverflow,Pagination} from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css'
export default function ProductsCateg(props){
    const{cartItems,cartItemsactive}=props
    const productscarddata=ProductsDesc.map((products)=>{
        return(
        <div className="product">
            <SwiperSlide>
            <ProductsSlideCard
            key={products.id}
            {...products}/>
            </SwiperSlide>
        </div>
        )
    })
    
    return(
    <div className="products--categ position-relative m-5 p-2 d-flex">
        <Panel cartItems={cartItems} cartItemsactive={cartItemsactive} />
        <div className="products--categ--context">
        <h1 className='category--context text-left text-light d-flex'>Reach your goals with our products <img src={muscleicon} className="m-5 d-flex icon"width="100"/></h1>
        <p className="w-100 pt-5 text-light">Satisfied more than thousand professional athletes and body-builders and 
            we are happy to share our products to increase more satisfied athletes and professional builders.
            Client satisfaction is our priority.</p>
            <div className="products--categ-btn d-flex">
            <button className="btn btn-dark p-2 mt-5 w-25 ">SEE MORE</button>
            <button className="btn btn-success  p-2 w-25 mt-5">BUY NOW</button>
            </div>
        </div>
        <div className='products--categ--slider p-1 d-flex '>
        <h5 className="text-light text-center position-absolute p-3">DOUBLE CLICK TO VIEW DESCRTIPTION</h5>
        <Swiper 
                modules={[Pagination,EffectCoverflow,Navigation]}
                style={{
                    "--swiper-navigation-size": "10px",
                    "--swiper-pagination-bullet-size":"13px"
                  }}
                pagination={true}
                  navigation={true}
                effect={"coverflow"}
                coverflowEffect={{
                    rotate:0,
                    stretch:0,
                    depth:1100,
                    modifier:1,
                    slideShadows:false,
                }}
                slidesPerView={1}
                >
            {productscarddata}
            </Swiper>
        </div>
    </div>
    )
}