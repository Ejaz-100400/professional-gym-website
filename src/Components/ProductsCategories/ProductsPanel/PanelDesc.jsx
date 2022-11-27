import  gympic from '../../../../public/assets/wp5643116.jpg'
export default function PanelDesc(props){
    return(
        <div>
            <div className="products--main--section position-relative d-flex p-2">
                <div className="products--context">
                    <span className="prod-title">{props.ProductName}</span>
                    <div className="prod--context--actions mt-5 d-flex">
                        <span className="cost">{props.Price}</span>
                        <span  className="cost">{props.kg}</span>
                        <button className="btn cart p-2">Add to Cart <i class="fa-solid fa-cart-shopping"></i></button>
                    </div>
                </div>
                <img src={gympic}  width='250'></img>
            </div>
            <div className="products--panel--description d-grid">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, accusantium. Eos eius quis iure voluptatibus, 
                    labore, animi omnis dolore explicabo hic, deleniti eveniet 
                    quia quam tenetur repellendus autem veritatis nisi.</p>
            </div>
        </div>
    )
}