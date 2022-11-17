import React, { useContext, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./Slider.scss";

// import required modules
import { Autoplay, Grid, Navigation } from "swiper";
import { data2 } from "../../data/data2";
import Card from "../Card/Card";
import { Context } from "../Context/Context";
import { useLocation } from "react-router-dom";
import { data1 } from "../../data/data1";

export default function Slider() {
    const {pathname} = useLocation()
    const url = pathname.split('/')[1];
    const [data, setData] = useState(data2)
    useEffect(()=>{
        setData(url == 'phone' || url == '/' ? data2 : url == 'clothes'? data1: [])
    },[url])

    useEffect(()=>{
        setData(url == 'phone' || url == '/' ? data2 : url == 'clothes'? data1: [])
    },[])
    const {category} = useContext(Context)
    const [rov, setRov] = useState(2)
        useEffect(()=>{
            url ==  'phone'?setData(category == 0 ? data2: data2.filter((item)=> item.model == category))
            :setData(category == 0 ? data1: data1.filter((item)=> item.model == category))
            setRov(data.length > 7 ? 2 : 1)
        },[category])


  return (
    <>
      <Swiper
        slidesPerView={4}
        grid={{
          rows: 2,
        }}
        loop={true}
        spaceBetween={30}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={true}
        modules={[Grid, Autoplay, Navigation]}
        className="mySwiperr"
      >
        {
        data  && data.map((e,i)=>(
            <SwiperSlide key={i}>
              <Card  item={e}/>
            </SwiperSlide>
        ))
      }
        
        
      </Swiper>
    </>
  );
}
