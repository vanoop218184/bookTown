import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Card from "./Card";
import axios from 'axios'
import { useState } from "react";
import { useEffect } from "react";
function FreeBook() {
  const [book,setBook]=useState([]);
  useEffect(()=>{
  const getBook=async()=>{
    try {
      const res= await axios.get("http://localhost:4001/book");
       const dat = await res.data.filter((data) => data.category === "Free");
       setBook(dat);
       
    } catch (error) {
      console.log(error);
    }
  }
  getBook();
  },[])
 
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="m-w-screen-2xl   container  md:px-20 px-4 py-10">
        <div>
          {" "}
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p className="mb-2">
            “Books are the plane, and the train, and the road. They are the
            destination, and the journey. They are home.
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Card item={item} key={item.id}></Card>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBook;
