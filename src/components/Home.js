import React from 'react'
import homePage from '../img/homePage.jpg'


export default function Home() {

    return (
        <>
            <div className="container homePage">
                <h1 className="welcome">WELCOME </h1>
                <span className="aboutUs">Adopting a rescued animal is one of the greatest feelings<br /> there is,
                    the little ones feel grateful and their way of saying<br /> thank you is with their unconditional love,
                        if you are thinking<br /> on having a pet, you should consider adopting first</span>
                <h4 className="quote">"Some things just fill <br /> your heart without trying"</h4>
                <span><img src={homePage} alt="dog and a child" width="90%" /></span>
            </div>

        </>
    )
}
