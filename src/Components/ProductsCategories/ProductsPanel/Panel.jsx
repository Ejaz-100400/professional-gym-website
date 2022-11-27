import ProductDesc from "../../Datas/ProductDesc"
import PanelDesc from "./PanelDesc"
import {Swiper,SwiperSlide} from 'swiper/react'
import { Pagination,Navigation} from "swiper";
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css'
export default function Panel(){
    const Paneldatas=ProductDesc.map((panel)=>{
        return(
            <SwiperSlide>
                <PanelDesc
                key={panel.id}
                {...panel}/>
            </SwiperSlide>
        )
    })
    function closepanel(){
        document.querySelector('.products--panel').style.display ='none';
    }
    return(
        <div className="products--panel position-absolute w-100">
            <div className='position-relative'>
            <i onClick={closepanel} class="fa-solid fa-xmark text-danger position-absolute fa-2x"></i>
            </div>
            <div className="d-flex overflow-hidden w-100">
            <Swiper
             style={{
                "--swiper-navigation-size": "50px",
                "--swiper-pagination-bullet-size":"13px",
                "--swiper-navigation-fontWeight":"bold",
                "--swiper-navigation-color":"red",
              }}
            navigation={true} 
            modules={[Navigation]} 
            className="mySwiper">
                {Paneldatas}
            </Swiper>
            </div>
        </div>
    )
}