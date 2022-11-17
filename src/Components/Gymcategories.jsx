import  Cards from './Cards'
import Carddetails from './Carddetails'
export default function Gymcategories(){

    window.onscroll=function(){
        if(document.documentElement.scrollTop>730){
            document.querySelector('.App').classList.remove('black-bg-1')
            document.querySelector('.App').classList.add('black-bg-2')
        }
        else{
            document.querySelector('.App').classList.remove('black-bg-2')
            document.querySelector('.App').classList.add('black-bg-1')
        }
        if(document.documentElement.scrollTop>0){
            document.querySelector('.Header').style.backgroundColor="#ffffff42"
            document.querySelector('.Header').style.backdropFilter="blur(20px)"
        }
        else{
            document.querySelector('.Header').style.backgroundColor="transparent"
            document.querySelector('.Header').style.backdropFilter="none"
        }
        if(document.documentElement.scrollTop>2300){
            document.querySelector('.products--categ').classList.add('bg-primary')
        }
        else{
        document.querySelector('.products--categ').classList.remove('bg-primary')
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
            <h1 className='category--context text-center text-light p-4'>For those of you who want to be<br></br> appear confident</h1>
            <div className="card--items d-flex">
                {carddata}
            </div>
            <p className='text-center text-light p-3'>"Everyone starts from a different starting line, what do you want to start with🔥"</p>
        </div>
    )
}