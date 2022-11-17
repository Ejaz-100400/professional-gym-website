export default function SlideCard(props){
    return(
        <div className='slide--card'>

            <div className='slide--img'>
            <img src={props.cardimg} width=''></img>
            </div>
            <div className='slide--desc d-flex p-3'>
                <h5 className="font-weight-bold text-light">{props.cardname}</h5>
                <button className="btn btn-dark p-2">LEARN MORE</button>
            </div>
        </div>
    )
}