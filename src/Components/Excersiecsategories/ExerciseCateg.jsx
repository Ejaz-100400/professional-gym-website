import SlideCard from './SlideCard'
import SlideCardData from '../Datas/SlideCardData'
import {Swiper,SwiperSlide} from 'swiper/react'
import{Navigation, EffectFade} from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css'
export default function ExerciseCateg(){
    const carddata= SlideCardData.map((data)=>{
        return( 
        <SwiperSlide>
          <SlideCard
          key={data.id}
          {...data}/>
        </SwiperSlide>
        )
      })
    //   slidetext btn
      function slidetxtbtn(){
        let slide_btn=document.querySelectorAll('.slide--text span')
        slide_btn.forEach((slideindex)=>{
            slideindex.addEventListener('click',function(e){
                if(e.target.innerText=='Lower Body'){
                    // this.target.classList.add('green-box')
                    // e.childNodes.classList='';
                    e.target.classList='green-box'
                    e.target.parentNode.childNodes[0].classList=''
                    e.target.parentNode.childNodes[2].classList=''

                    $('.slide--card').css({transform:'translateX(-280%)',transition:'all .5s ease-in-out'})
                }
                else if(e.target.innerText=='Leg Day'){
                    // this.target.classList.add('green-box')
                    // e.childNodes.classList='';
                    e.target.classList='green-box'
                    e.target.parentNode.childNodes[0].classList=''
                    e.target.parentNode.childNodes[1].classList=''
                    $('.slide--card').css({transform:'translateX(-900%)',transition:'all .5s ease-in-out'})
                }
                else if(e.target.innerText=='Upper Body'){
                    // this.target.classList.add('green-box')
                    // e.childNodes.classList='';
                    e.target.classList='green-box'
                    e.target.parentNode.childNodes[1].classList=''
                    e.target.parentNode.childNodes[2].classList=''
                    $('.slide--card').css({transform:'translateX(0%)',transition:'all .5s ease-in-out'})
                }
            })
        })       
    }
    function slidenos(){
        let slidenos=document.querySelectorAll('.slide--nos span')
        slidenos.forEach((slidenoindex)=>{
            slidenoindex.addEventListener('click',function(e){
                if(e){
                    console.log('click')
                    $('.slide--card').css({marginRight:'200%',transition:'all .5s ease-in-out'})
                }
            })
        })
    }

    return(
        <div className="exercise--categ">
            <h1 className='category--context text-center text-light p-4'>For those of you who want to be<br></br> appear confident</h1>
            <section className='slide--context p-5'>
                <div className='slide--text d-flex text-light'>
                    <span className='green-box' onClick={slidetxtbtn}>Upper Body</span>
                    <span className=''onClick={slidetxtbtn}>Lower Body</span>
                    <span className='' onClick={slidetxtbtn}>Leg Day</span>
                </div>
                <div>
                <div className='slide--card--category p-5 d-flex'>
                <Swiper 
                modules={[Navigation]}
                effect
                speed={800}
                slidesPerView={2}
                breakpoints={{
                    // when window width is >= 640px
                    0: {
                        slidesPerView: 1,
                      },
                    840: {
                      slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    968: {
                      slidesPerView: 2,
                    },
                  }}
                >
                    {carddata}
                </Swiper>
                </div>
                </div>
            </section>
        </div>
    )
}