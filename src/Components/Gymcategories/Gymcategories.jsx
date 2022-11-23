import  Cards from './Cards'
import Carddetails from '../Datas/Carddetails'
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
          <Cards
          key={data.id}
          {...data}/>
        )
      })
    return(
        <div className="gym--category p-5">
            <h1 className='category--context text-center p-4'>For those of you who want to be<br></br> appear confident</h1>
            <div className="card--items d-flex">
                {carddata}
            </div>
            <p className='text-center p-3'>"Everyone starts from a different starting line, what do you want to start with🔥"</p>
        </div>
    )
}