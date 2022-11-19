
import ProductsDesc from "./ProductDesc"
import ProductsSlideCard from "./ProductsSlideCard"
import ProductsDescBar from "./ProductsDescBar"
import {Swiper,SwiperSlide} from 'swiper/react'
import{Navigation,EffectCoverflow,Pagination} from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css'
export default function ProductsCateg(){
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
    <div className="products--categ p-2 d-flex">
        <ProductsDescBar/>
        <div className="products--categ--context mt-5">
        <h1 className='category--context text-left text-light'>Reach your goals with our products</h1>
        <p className="w-100 pt-5 text-light">Satisfied more than thousand professional athletes and body-builders and 
            we are happy to share our products to increase more satisfied athletes and professional builders.
            Client satisfaction is our priority.</p>
            <div className="products--categ-btn d-flex">
            <button className="btn btn-dark p-2 mt-5 w-25 ">SEE MORE</button>
            <button className="btn btn-success  p-2 w-25 mt-5">BUY NOW</button>
            </div>
        </div>
        <div className='products--categ--slider p-1 d-flex '>
        <h5 className="text-light text-center position-absolute p-3">DOUBLE CLICK</h5>
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