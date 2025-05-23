"use client";

import Image from "next/image";

interface CardProps {
  title: string;
  price: number;
  src: string;
}

export default function Card({ title, price, src }: CardProps) {
  return (
    <div className="flex flex-col gap-3 w-[286px]">
      <div className="rounded-[14px] overflow-hidden bg-gray-400 h-[360px] relative">
        <Image src={src} alt={title} fill sizes="286px" />
      </div>
      <div className="w-full">
        <h2 className="whitespace-nowrap overflow-hidden text-ellipsis text-xl mb-2">
          {title}
        </h2>
        <div className="flex justify-between">
          <p className="font-semibold">${price}</p>
          <button onClick={() => console.log("btn")}>
            <Image
              src="/plus-button.svg"
              alt="add item button"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
