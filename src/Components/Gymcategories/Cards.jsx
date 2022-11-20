

export default function Cards(props){
    return(
        <div className="card">
            <img className="card-img"src={props.cardimg} width="353" height="415"></img>
            <div className="card--context">
            <h3 className="card--context--desc text-light w-50">{props.cardname}</h3>
            <button className="btn btn-dark w-75">LEARN MORE <span className="font-weight-bold">+</span></button>
            </div>
        </div>
    )
}