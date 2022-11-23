import muscleicon from '../../assets/deadlift-unscreen.gif'
import SlideCard from './SlideCard'
import SlideCardData from '../Datas/SlideCardData'
import {Swiper,SwiperSlide} from 'swiper/react'
import{Navigation,EffectCoverflow,Pagination} from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css'
export default function ExerciseCateg(){
    const productscarddata=SlideCardData.map((cards)=>{
        return(
        <div className="product">
            <SwiperSlide>
            <SlideCard
            key={cards.id}
            {...cards}/>
            </SwiperSlide>
        </div>
        )
    })
    return(
    <div className="exercise--categ m-5 p-2 d-flex">
        <div className="products--categ--context">
        <h1 className='category--context text-left text-light d-flex'>Reach your goals with our products <img src={muscleicon} className="m-5 d-flex icon"width="150"/></h1>
        <p className="w-100 pt-5 text-light">Satisfied more than thousand professional athletes and body-builders and 
            we are happy to share our products to increase more satisfied athletes and professional builders.
            Client satisfaction is our priority.</p>
            <div className="products--categ-btn d-flex">
            <button className="btn btn-dark p-2 mt-5 w-25 ">SEE MORE</button>
            <button className="btn btn-success  p-2 w-25 mt-5">BUY NOW</button>
            </div>
        </div>
        <div className='products--categ--slider p-1 d-flex '>
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
























// import SlideCard from './SlideCard'
// import SlideCardData from '../Datas/SlideCardData'
// import {Swiper,SwiperSlide} from 'swiper/react'
// import{Navigation, EffectFade} from 'swiper'
// import 'swiper/css/navigation'
// import 'swiper/css/effect-fade'
// import 'swiper/css'
// export default function ExerciseCateg(){
//     const carddata= SlideCardData.map((data)=>{
//         return( 
//         <SwiperSlide>
//           <SlideCard
//           key={data.id}
//           {...data}/>
//         </SwiperSlide>
//         )
//       })
//     //   slidetext btn

//     function slidenos(){
//         let slidenos=document.querySelectorAll('.slide--nos span')
//         slidenos.forEach((slidenoindex)=>{
//             slidenoindex.addEventListener('click',function(e){
//                 if(e){
//                     console.log('click')
//                     $('.slide--card').css({marginRight:'200%',transition:'all .5s ease-in-out'})
//                 }
//             })
//         })
//     }

//     return(
//         <div className="exercise--categ">
//             <section className='slide--context p-5'>
//                 <div>
//                 <div className='slide--card--category p-5 d-flex'>
//                 <Swiper 
//                 modules={[Navigation]}
//                 effect
//                 speed={800}
//                 slidesPerView={2}
//                 breakpoints={{
//                     // when window width is >= 640px
//                     0: {
//                         slidesPerView: 1,
//                       },
//                     840: {
//                       slidesPerView: 2,
//                     },
//                     // when window width is >= 768px
//                     968: {
//                       slidesPerView: 2,
//                     },
//                   }}
//                 >
//                     {carddata}
//                 </Swiper>
//                 </div>
//                 </div>
//             </section>
//         </div>
//     )
// }