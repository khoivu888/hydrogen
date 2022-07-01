import React from 'react';

export default function CarouselBanner() {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full ">
        <img
          src="https://cdn.shopify.com/s/files/1/0562/1248/8378/files/Banner_Mother_s_day.png?v=1651041800"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn bg-[#9E0B0F] border-none btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn bg-[#9E0B0F] border-none btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://cdn.shopify.com/s/files/1/0562/1248/8378/files/Banner_Mother_s_day_2.png?v=1651041863"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn bg-[#9E0B0F] border-none btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn bg-[#9E0B0F] border-none btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
