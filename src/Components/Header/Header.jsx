import imglogo from "../../../public/assets/power_CRP-removebg-preview.png"
import React from "react";
export  default function Header(){
    const[mobbar,setmobbar]=React.useState(false);
    function handlemobbar(){
        setmobbar(prevstate=>!prevstate);
    }
    return(
        <div className="Header">
            <div className="d-flex navbar--main">
                <a class='text-decoration-none p-2' href='index.html'>
                    <img width='200'src={imglogo}></img>
                </a>
                <ul className="d-flex list-unstyled nav--menu  p-4">
                    <li>Home</li>
                    <li>Our Training Goals</li>
                    <li>Our Community</li>
                    <li>Our Products</li>
                    <li>Pricing</li>
                </ul>
                <button class='btn btn-join p-2 mb-2'>
                    <a>
                        JOIN NOW
                    </a>
                </button>
                <div class='navbar--main--mobile p-2'>
                    <i onClick={handlemobbar} className="fa-solid fa-bars fa-2x text-light"></i>
                </div>
            </div>
            <div class='header--mobile--wrapper' style={{display:mobbar?'block':'none'}}>
                <ul class='nav--menu--mobile list-unstyled d-grid'>
                    <li>Home</li>
                    <li>Our Training Goals</li>
                    <li>Our Community</li>
                    <li>Our Products</li>
                    <li>Pricing</li>
                </ul>
            </div>

        </div>
    )
}