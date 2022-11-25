import imglogo from "../../assets/power_CRP-removebg-preview.png"


export  default function Header(){
       window.onscroll = function(){
           
        }
    return(
        <div className="Header">
            <div className="d-flex navbar--main">
                <a class='text-decoration-none'>
                    <img width='200'src={imglogo}></img>
                </a>
                <ul className="d-flex list-unstyled nav--menu  p-4">
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Community</li>
                    <li>Pricing</li>
                </ul>
                <button class='btn p-2 mb-2'>
                    <a>
                        JOIN NOW
                    </a>
                </button>
            </div>
        </div>
    )
}