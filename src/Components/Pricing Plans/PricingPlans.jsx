import PricingCards from './PricingCards'
import PricingDatas from '../Datas/PricingDatas'
export default  function PricingPlans(){
    const pricingdatas=PricingDatas.map((datas)=>{
        return(
            <PricingCards key={datas.id}
            {...datas}
            />
        )
    })
    return(
        <div className="pricing-section postion-absolute p-5 d-grid"> 
         <h2 className='category--context text-center text-light'>Ready to get started? 🥳🥳</h2>
         <span className="p-2">Choose a plan to tailor your needs</span>
         <div className="toggle-section d-flex">
            <span className="offer position-absolute  p-1">20%off</span>
            <span className="disoka">Monthly</span>
            <label class="switch">
                <input type="checkbox"/>
                <span class="slider round"></span>
                </label>
            <span>Yearly</span>
         </div>
         <div className="pricing--card--section position-relative d-flex">
            {pricingdatas}
         </div>
        </div>
    )
}