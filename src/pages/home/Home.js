import React from 'react'
import './home.css'

export const Home = () => {
  return (
    <section id="home" className="home">
        
        <div className="intro_sec d-block d-lg-flex align-items-center ">
            <div
                className="h_bg-image order-1 order-lg-1"
                style={{ backgroundImage: `url(${'/hero.png'})` }}>
            </div>

            <div className="text order-2 order-lg-2 d-lg-flex justify-content-center">
                <div className="align-self-center ">
                <div className="intro mx-auto">
                    <div>
                    
                    <h2>I'm Thien Le</h2>
                    <h1>"I'm currently studying at ITMO University"</h1>
                    </div>
                    <p>"description"</p>
                </div>
            </div>
            </div>

        </div>
    </section>
  )
}
