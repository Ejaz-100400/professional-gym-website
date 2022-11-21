export default function PricingPlans(props){
    return(
        <div className="pricing--cards--month d-flex">
            <div className="pricing--card--item p-3">
                <h2 className="text-light text-center">⚡{props.cardname}</h2>
                <h5 className="text-light pt-3  text-center">Perfect to be get started!</h5>
                <div className="pricing d-flex p-2">
                <span className="text-success">₹1,200/-</span>
                </div>
                <button className="pricing-btn p-2 mt-3 w-100" >Try 7 days for free</button>
                <ul className="plan-list list-unstyled text-left pt-3">
                    <li>✅CMS INTERGRATION</li>
                    <li>✅CMS INTERGRATION</li>
                    <li>✅CMS INTERGRATION</li>
                </ul>
            </div>
        </div>
    )
}