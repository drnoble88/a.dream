import React from "react";
import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios';

function Destination() {
    const [Image, setImage] = useState("")
    const [Figname, setFigname] = useState("London")

    const fetchImage = {
        method: 'GET',
        url: 'http://localhost:8000/destination',
        params: { query: Figname },
    }

    useEffect(() =>{
        const fetchEvent2 = async () => {
        axios.get(fetchImage.url).then((response) => {
            setImage(response.data)
        }).catch((error) => {
            console.error(error)
        })
    }
    fetchEvent2()
}, []);

    return (
        <>

<div>

<h2 className="destination-vibes">Destination Vibes</h2>
<div id="myCarousel" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Image} className="d-block" id="first-phil" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="./philhub2.png" className="d-block" id="second-phil" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="./philhub3.png" className="d-block" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div id="myCarousel1" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="./philhub1.png"  className="d-block" id="first-phil" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="./philhub2.png" className="d-block" id="second-phil" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="./philhub3.png" className="d-block" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
         
</div>

</>
    );

}

export default Destination;