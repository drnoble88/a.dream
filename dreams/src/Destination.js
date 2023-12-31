import React from "react";
import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios';

function Destination() {
    const [Image, setImage] = useState("")
    const [Image2, setImage2]= useState("")
    const [Place2, setPlace2]= useState("")
    const [Figname, setFigname] = useState("")
    const [Place, setPlace]= useState("")

    const fetchImage = {
        method: 'GET',
        url: 'http://localhost:8000/destination',
        // params: { query: Figname },
    }

    useEffect(() =>{
        const fetchEvent2 = async () => {
        axios.get(fetchImage.url).then((response) => {
            // setImage(response.data)
        }).catch((error) => {
            console.error(error)
        })
    }
    fetchEvent2()
}, []);


const fetchPlace1 = {
    method: 'GET',
    url: 'http://localhost:8800/places',
}
useEffect(() =>{
    const fetchPlace = async () => {
    axios.get(fetchPlace1.url).then((response) => {
        setPlace(response.data[11].name)
        setImage(response.data[11].picture)
        setImage2(response.data[10].picture)
        setPlace2(response.data[10].name)
        console.log(Place)
    }).catch((error) => {
        console.error(error)
    })
}
fetchPlace()
}, []);

    return (
        <>

<div>

<h2 className="destination-vibes">Destination Vibes: {Place}, {Place2} </h2>
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
                <img src={Image2} className="d-block" id="second-phil" alt="..."/>
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