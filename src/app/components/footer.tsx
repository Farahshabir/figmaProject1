import React from "react";
import Image from "next/image";
import icon1 from "@/app/images/icon1.png";
import icon2 from "@/app/images/icon2.png";
import icon3 from "@/app/images/icon3.png";
import icon4 from "@/app/images/icon4.png";

export default function Footer() {
  return (
    <div className="w-[auto] h-[504px] bg-black pt-24 px-20">
      <div className="flex w-[1120px] h-[256px]">
        <div className="w-[497px] h-[256px]">
          <h2 className="text-white">Cyber</h2>
          <p className="text-white font-light leading-relaxed text-sm">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>
        <div className=" flex w-[623px] h-[266px]">
          <div className="w-[295.5px] h-[256px]">
            <h2 className="text-white">Services</h2>
            <ul className="font-thin text-[#CFCFCF] text-sm leading-8">
              <li>Bonus program</li>
              <li>Gift cards</li>
              <li>Credit and payment</li>
              <li>Service contracts</li>
              <li>Non-cash account</li>
              <li>Payment</li>
            </ul>
          </div>
          <div className="w-[295.5px] h-[256px]">
            <h2 className="text-white">Assistance to the buyer</h2>
            <ul className="font-thin text-[#CFCFCF] text-sm leading-8">
              <li>Find an order</li>
              <li>Terms of delivery</li>
              <li>Exchange and return of goods</li>
              <li>Gurantee</li>
              <li>Frequently asked questions</li>
              <li>Terms of use of the site</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex gap-6 w-[173px] h-[16px]">
        <Image src={icon1} alt="pic" className="w-[16px] h-[16px]" />
        <Image src={icon2} alt="pic" className="w-[16px] h-[16px]" />
        <Image src={icon3} alt="pic" className="w-[16px] h-[16px]" />
        <Image src={icon4} alt="pic" className="w-[16px] h-[16px]" />
      </div>
    </div>
  );
}
