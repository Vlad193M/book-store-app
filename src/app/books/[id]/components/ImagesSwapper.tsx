'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import { BookImages } from '@/generated/prisma';
import { Navigation, Pagination, Scrollbar, Zoom } from 'swiper/modules';

import { useSwiperController } from '@/hooks/useSwiperController';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';

interface ImagesSwapperProps {
  bookName: string;
  bookImages: BookImages[];
}

export default function ImagesSwapper({
  bookImages,
  bookName,
}: ImagesSwapperProps) {
  const { setSwiper, slideTo, activeIndex } = useSwiperController();

  return (
    <div className='self-stretch justify-center flex gap-5 lg:flex-[0_1_670px] lg:justify-between'>
      <div className='hidden md:flex flex-col gap-2'>
        {bookImages.slice(0, 3).map((image, index) => (
          <div
            key={image.id}
            onClick={() => slideTo(index)}
            className={`flex rounded-[2px] overflow-hidden bg-gray-100 relative h-[195px] w-[142px] cursor-pointer ${
              activeIndex === index ? 'border-[#a6a6a6]' : 'border-transparent'
            } border-2`}
          >
            <Image
              src={image.image_url ?? ''}
              alt='book image'
              fill
              className='object-contain'
            />
          </div>
        ))}
      </div>

      <div className='group grow w-full max-w-[500px] flex flex-col items-center'>
        <Swiper
          onSwiper={setSwiper}
          onSlideChange={(swiper) => slideTo(swiper.activeIndex)}
          modules={[Navigation, Zoom, Pagination, Scrollbar]}
          zoom={true}
          slidesPerView={1}
          navigation
          pagination={{
            clickable: true,
            el: '.custom-swiper-pagination',
          }}
          className='grow rounded-[14px] overflow-hidden bg-gray-100 relative min-h-[428px] min-w-[300px] max-h-[628px] w-full'
        >
          {bookImages.map((image) => (
            <SwiperSlide key={image.id} className='!w-full'>
              <Image
                src={image.image_url ?? ''}
                alt={bookName}
                fill
                className='object-contain w-full h-full'
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className='custom-swiper-pagination mt-2 text-center'></div>
      </div>
    </div>
  );
}
