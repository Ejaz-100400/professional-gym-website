import  Cards from './Cards'
import Carddetails from '../Datas/Carddetails'
import {Swiper,SwiperSlide} from 'swiper/react'
import{Navigation,EffectCoverflow,Pagination} from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css'
export default function Gymcategories(){
    window.onscroll=function(){
        if(document.documentElement.scrollTop>600){
            document.querySelector('.scroll-anim').classList.remove('bg-main-scroll')
            document.querySelector('.scroll-anim').classList.add('black-bg-2')
        }
        else{
            document.querySelector('.scroll-anim').classList.remove('black-bg-2')
            document.querySelector('.scroll-anim').classList.add('bg-main-scroll')
        }
        if(document.documentElement.scrollTop>0){
            document.querySelector('.Header').style.backgroundColor="#ffffff42"
            document.querySelector('.Header').style.backdropFilter="blur(20px)"
        }
        else{
            document.querySelector('.Header').style.backgroundColor="transparent"
            document.querySelector('.Header').style.backdropFilter="none"
        }
        if(document.documentElement.scrollTop>1650){
            document.querySelector('.products--categ').classList.add('bg-primary')
        }
        else{
        document.querySelector('.products--categ').classList.remove('bg-primary')
        }
        if(document.documentElement.scrollTop>1300){
            document.querySelector('.exercise--categ').classList.add('bg-primary')
        }
        else{
            document.querySelector('.exercise--categ').classList.remove('bg-primary')
        }
    }


    const carddata= Carddetails.map((data)=>{
        return(
        <SwiperSlide>
          <Cards
          key={data.id}
          {...data}/>
        </SwiperSlide>
        )
      })
    return(
        <div className="gym--category ">
            <h1 className='category--context text-center p-5'>For those of you who want to be<br></br> appear confident</h1>
            {/* <p className="text-center pt-2">In here we will help you to shape and build
                    your ideal body and we'll live up your life to the fullest</p> */}
            <div className="card--items d-flex position-relative">
            <Swiper 
                modules={[Pagination,EffectCoverflow]}
                style={{
                    "--swiper-navigation-size": "10px",
                    "--swiper-pagination-bullet-size":"13px"
                  }}
                pagination={true}
                effect={"coverflow"}
                coverflowEffect={{
                    rotate:0,
                    stretch:0,
                    depth:100,
                    modifier:1,
                    slideShadows:false,
                }}
                slidesPerView={3}
                breakpoints={{
                    // when window width is >= 640px
                    0:{
                        slidesPerView:1,
                        width:380,               
                    },
                    640: {
                        slidesPerView:1,
                        width:380,   
                    },
                    // when window width is >= 768px
                  }}
                >
                {carddata}
                </Swiper>
            </div>
        </div>
    )
}