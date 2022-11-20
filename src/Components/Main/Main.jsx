import gympic from '../../assets/image-removebg-preview.png'
export default function Main(){
    return(
        <div className="main  d-flex text-light text-center">
            <div className="main--content p-4">
                <div className="main--toggle">
                    <span className="p-3"><span className="p-2">THE BEST</span> FITNESS CLUB IN THE TOWN</span>
                </div>
                <div className="main--context">
                    <span><span className="text-stroke">SHAPE</span>YOUR IDEAL BODY</span>
                    <p className="">In here we will help you to shape and build
                    your ideal body and we'll live up your life to the fullest</p>
                </div>
                <div className="main--btns d-flex">
                    <button class='btn p-3 mb-2'>
                        <a>GET STARTED</a>
                    </button>
                    <button class='btn p-3 mb-2'>
                        <a>LEARN MORE..</a>
                    </button>
                </div>
            </div>      
    </div>
    )
}