import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import CC1 from "@/app/images/CC1.png";
import CC2 from "@/app/images/CC2.png";
import CC3 from "@/app/images/CC3.png";
import CC4 from "@/app/images/CC4.png";
import CC5 from "@/app/images/CC5.png";
import CC6 from "@/app/images/CC6.png";
import Iphone from "@/app/images/Iphone.png";
import pro1 from "@/app/images/pro1.png";
import pro2 from "@/app/images/pro2.png";
import pro3 from "@/app/images/pro3.png";
import pro4 from "@/app/images/pro4.png";
import pro5 from "@/app/images/pro5.png";
import pro6 from "@/app/images/pro6.png";
import pro7 from "@/app/images/pro7.png";
import pro8 from "@/app/images/pro8.png";
import pro9 from "@/app/images/pro9.png"
import pro10 from "@/app/images/pro10.png";
import tab1 from "@/app/images/tab1.png";
import tab2 from "@/app/images/tab2.png";
import tab3 from "@/app/images/tab3.png";
import tab4 from "@/app/images/tab4.png";
import Like from "@/app/images/Like.png";
import dis1 from "@/app/images/dis1.png";
import dis2 from "@/app/images/dis2.png";
import dis3 from "@/app/images/dis3.png"
import banner2 from "@/app/images/Banner2.png"
import CCwatch from "@/app/images/CCwatch.png"
import CCipad from "@/app/images/CCipad.png"
import CCsamsung from "@/app/images/CCsamsung.png"
import CCmacbook from "@/app/images/CCmacbook.png"
import CCbt from "@/app/images/CCbt.png"
import PlayStation from "@/app/images/PlayStation.png"
import hero from "@/app/images/hero.png"
import apple from "@/app/images/apple.png"
import MacBook from "@/app/images/MacBook.png"
import Logo from "@/app/images/Logo.png"

export default function Header() {

  return (
    <div className="mainContainer">

  {/******************************* Code for navbar *******************************/}
    <div className="flex w-[auto] h-[88px] justify-center">
    <Image src={Logo} alt="pic" className="w-[65.4px] h-[22.87px] my-7 mr-6" />
      <div className="relative flex items-center ">
    
      <span className="absolute left-4"><IoSearchOutline /></span>
      <input  className="w-[372px] h-[56px] bg-gray-100 rounded-lg pl-10 py-2" type="text"  placeholder="Search"/>
       <ul className="flex gap-7 pt-2 pl-3">
        <li><Link href={"/"} className="">Home</Link></li>
        <li><Link href={"/"} className="">About</Link></li>
        <li><Link href={"/"} className="">Contact Us</Link></li>
        <li><Link href={"/"} className="">Blogs</Link></li>
        <i><CiHeart /></i>
        <i><IoCartOutline /></i>
        <i><FiUser /></i>
      </ul>
      </div>
    </div>

  {/******************************* Code for banner *******************************/}
    <div className="mainBanner ">
        <div className="mainBannerLeft pt-52">
            <div className="mainBannerTextOne">
            <h2 className="font-semibold" >Pro.Beyond.</h2>
            <h2 className="text-6xl text-white font-sans font-thin">IPHONE 14 <span className="text-6xl font-bold"> PRO </span></h2>
            <p className="text-slate-400 font-light leading-6 text-sm"	>Created to change everything for the better. For everyone</p>
            <div className="pt-4">
            <button className="border border-slate-300 w-[188px] h-[48px] justify-center text-gray rounded "type="submit">Shop Now</button>
            </div>
            </div>
        </div>

        <div className="mainBannerRight">
        <Image src={Iphone} alt="pic" className="w-[406px] h-[632px]" />
        </div>
    </div>

  {/******************************* Code for Fourth conatiner category  *******************************/}
  <div className="grid grid-cols-2 grid-rows-2 w-[auto] h-[600px]">
        {/* Playstation Product */}
        <div className="w-[auto] h-[600]">
            <div className=" fourthBoxOne flex flex-row w-[auto] h-[328px] bg-[#FFFFFF]">
                    <Image src={PlayStation} alt="pic" className="w-[335px] h-[343px]" />
                    <div className="w-[338px] h-[128px] px-0 py-12">
                    <h1 className="text-2xl font-semibold">Playstaion 5</h1>
                    <div className="w-[338px] h-[72px]">
                    <p className=" text-sm text-gray-400">Incredibly powerful CPUs, GPUs, and an SSD with 
                                                            integrated I/O will 
                                                            redefine your Playstation experience.</p></div>
                                                            </div>
            </div>
         {/* Apple two products  */}
         <div className="w-[auto] h-[272px] flex flex-row ">
                    <div className="subfourthSectionOne flex flex-row w-[360px] h-[272px]  bg-[#F9F9F9] ">
                      <Image src={hero} alt="pic" className="w-[104px] h-[272px]" />
                      <div className="w-[160px] h-[143px] pt-8 pl-2">
                      <h1  className="text-2xl mb-3">Apple AirPods <span className="font-semibold">Max</span></h1>
                      <p className=" text-sm text-gray-400">Computational audio. Listen, it's powerful</p>
                      </div>
                    </div>
                    <div className="fourthBoxThree flex bg-[#2C2C2C] w-[360px] h-[272px] ">
                      <Image src={apple} alt="pic" className="w-[136px] h-[190px]" />
                      <div className="w-[160px] h-[144px] pt-8 pl-2">
                      <h1 className="text-2xl font-semibold text-[#909090]">Apple Vision Pro</h1>
                      <p className="text-sm text-[#909090]">An immersive way to experience entertainment</p>
                      </div>
                    </div>
            </div>
        </div>
       

            {/* MacBook Product */}
            <div className="fourthSectionTwo w-[auto] h-[600px] bg-[#EAEAEA] gap-3 flex ">
              <div className="w-[360px] h-[200px] pl-6 pt-28">
                      <h1 className="text-2xl mb-3 size-5">Macbook <span className="font-semibold">Air</span></h1>
                      <p className=" text-sm text-gray-400 pt-8">The new 15-inch Macbook Air makes room for more of what you love 
                                                              with a spacious Liquid Retina  display</p>
                                                              <button className="border border-black w-[188px] h-[48px] justify-center text-gray rounded  "type="submit">Shop Now</button>
                                                              </div>
                    
                      <div className="py-8">
                      <Image src={MacBook} alt="pic" className="float-right w-[292px] h-[502px]" />
                      </div>
            </div>
    </div>

  {/*******************************Code for top category *******************************/}
    <div className= "w-[auto] h-[352] bg-[#FAFAFA] pt-[80px] pb-[80px]">
        
        <div className="justify-center px-32">
            <h1 className="w-[1120px] h-[32px]">Browse By Category 
            <span className="flex float-right pt-1 px-16 gap-2 "><i><MdKeyboardArrowLeft /></i>
            <i><MdKeyboardArrowRight /></i></span></h1>
        </div>

        <div className="subCategoryTwo justify-center flex h-[128px] gap-4 ">

          <div className="w-[160px] h-[128px] bg-[#EDEDED] rounded-lg pt-6 pl-12">
            <Image src={CC1} alt="pic" className="w-[48px] h-[48px] " />
           <div> <p className="category-Name justify-center text-sm">Phones</p></div>
          </div>

          <div className="w-[160px] h-[128px] bg-[#EDEDED] rounded-lg pt-6 pl-4">
          <div className="px-8 py-0">           
           <Image src={CC2} alt="pic" className="w-[48px] h-[48px]" /></div>

            <div className="px-2 pl-3 w-[117px] h-[24px]">
            <p className="category-Name text-sm">Smart Watch</p>
            </div>
          </div>
          

          <div className="w-[160px] h-[128px] bg-[#EDEDED] rounded-lg pt-6 pl-12">
            <Image src={CC3} alt="pic" className="w-[48px] h-[48px]" />
            <p className="category-Name text-sm">Cameras</p>
          </div>

          <div className="w-[160px] h-[128px] bg-[#EDEDED] rounded-lg pt-6 pl-12">
            <Image src={CC4} alt="pic" className="w-[48px] h-[48px]" />
            <p className="category-Name text-sm">Headphones</p>
          </div>
          
          <div className="w-[160px] h-[128px] bg-[#EDEDED] rounded-lg pt-6 pl-12">
            <Image src={CC5} alt="pic" className="w-[48px] h-[48px]" />
            <p className="category-Name text-sm">Computers</p>
            </div>

          <div className="w-[160px] h-[128px] bg-[#EDEDED] rounded-lg pt-6 pl-12">
            <Image src={CC6} alt="pic" className="w-[48px] h-[48px]" />
            <p className="category-Name">Gaming</p>
          </div>
        </div>
   
      </div>

  {/* Code for prducts */}
      <div className="w-[auto] h-[1056px] bg-[#FFFFFF] pt-12 pl-24">
        <div className="h-[32px]">
        <ul className="flex text-[#000000] gap-6">
          <li><Link href={"/"} className="text-[#8B8B8B]">New Arrival</Link></li>
          <li><Link href={"/"} className="text-[#8B8B8B]">Bestseller</Link></li>
          <li><Link href={"/"} className="text-[#8B8B8B]">Featured Products</Link></li>
        </ul>
        </div>

        <div className="flex gap-3">

          <div className="w-[268px] h-[432px] bg-[#F6F6F6] rounded-lg">
            <div className="w-[236px] h-[32px]  my-2 mx-3">
              <span className="float-right py-1"><CiHeart/></span>
            </div>
            <div className="mx-12">
            <Image src={pro1} alt="pic" className="w-[160px] h-[160px]" />
            </div>
            <div className="w-[236px] h-[160px] mx-4 my-2">
              <div className="w-[236px] h-[48px] text-center py-1">
              <h3 className="text-sm">Apple iPhone 14 Pro Max 128GB Deep Purple</h3>
              </div>
              <div className="w-[236px] h-[48px] text-center py-1">
              <span className="">$900</span>
              </div>
              <div className="w-[188px] h-[48px] mx-4">
              <button className="w-[188px] h-[48px] justify-center text-white bg-[#000000] rounded" type="submit">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="w-[268px] h-[432px] bg-[#F6F6F6] rounded-lg">
            <div className="w-[236px] h-[32px] my-2 mx-3">
              <span className="float-right py-1"><CiHeart/></span>
            </div>
            <div className="mx-12">
            <Image src={pro2} alt="pic" className="w-[160px] h-[160px]" />
            </div>
            <div className="w-[236px] h-[160px] mx-4 my-2">
              <div className="w-[236px] h-[48px]  text-center py-1">
              <h3 className="text-sm">Blackmagic Pocket Cinema Camera 6K</h3>
              </div>
              <div className="w-[236px] h-[48px] text-center py-1">
              <span className="">$2535</span>
              </div>
              <div className="w-[188px] h-[48px] mx-4">
              <button className="w-[188px] h-[48px] justify-center text-white bg-[#000000] rounded" type="submit">Buy Now</button>
              </div>
            </div>
          </div>
    
          <div className="w-[268px] h-[432px] bg-[#F6F6F6] rounded-lg">
            <div className="w-[236px] h-[32px]  my-2 mx-3">
              <span className="float-right py-1"><CiHeart/></span>
            </div>
            <div className="mx-12">
            <Image src={pro3} alt="pic" className="w-[160px] h-[160px]" />
            </div>
            <div className="w-[236px] h-[160px] mx-4 my-2">
              <div className="w-[236px] h-[48px] text-center py-1">
              <h3 className="text-sm">Apple Watch Series 9 GPS 41mm Starlight Aluminium</h3>
              </div>
              <div className="w-[236px] h-[48px] text-center py-1">
              <span className="">$399</span>
              </div>
              <div className="w-[188px] h-[48px] mx-4">
              <button className="w-[188px] h-[48px] justify-center text-white bg-[#000000] rounded" type="submit">Buy Now</button>
              </div>
            </div>
          </div>
          
          <div className="w-[268px] h-[432px] bg-[#F6F6F6] rounded-lg">
            <div className="w-[236px] h-[32px] my-2 mx-3">
              <span className="float-right py-1"><CiHeart/></span>
            </div>
            <div className="mx-12">
            <Image src={pro4} alt="pic" className="w-[160px] h-[160px]" />
            </div>
            <div className="w-[236px] h-[160px]  mx-4 my-2">
              <div className="w-[236px] h-[48px] text-center py-1">
              <h3 className="text-sm">AirPods Max Silver Starlight Aluminium</h3>
              </div>
              <div className="w-[236px] h-[48px] text-center py-1">
              <span className="">$549</span>
              </div>
              <div className="w-[188px] h-[48px] mx-4">
              <button className="w-[188px] h-[48px] justify-center text-white bg-[#000000] rounded" type="submit">Buy Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-2">
        <div className="w-[268px] h-[432px] bg-[#F6F6F6] rounded-lg">
            <div className="w-[236px] h-[32px] my-2 mx-3">
              <span className="float-right py-1"><CiHeart/></span>
            </div>
            <div className="mx-12">
            <Image src={pro5} alt="pic" className="w-[160px] h-[160px]" />
            </div>
            <div className="w-[236px] h-[160px] mx-4 my-2">
              <div className="w-[236px] h-[48px] text-center py-1">
              <h3 className="text-sm">Samsung Galaxy Watch6 Classic 47mm Black</h3>
              </div>
              <div className="w-[236px] h-[48px] text-center py-1">
              <span className="">$369</span>
              </div>
              <div className="w-[188px] h-[48px] mx-4">
              <button className="w-[188px] h-[48px] justify-center text-white bg-[#000000] rounded" type="submit">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="w-[268px] h-[432px] bg-[#F6F6F6] rounded-lg">
            <div className="w-[236px] h-[32px] my-2 mx-3">
            <Image src={Like} alt="pic" className="w-[35px] h-[35px] float-right py-1" />
              {/* <span className="float-right py-1"><CiHeart/></span> */}
            </div>
            <div className="mx-12">
            <Image src={pro6} alt="pic" className="w-[160px] h-[160px]" />
            </div>
            <div className="w-[236px] h-[160px] mx-4 my-2">
              <div className="w-[236px] h-[48px] text-center py-1">
              <h3 className="text-sm">Galaxy Z Fold5 Unlocked | 256GB | Phantom Black</h3>
              </div>
              <div className="w-[236px] h-[48px] text-center py-1">
              <span className="">$1799</span>
              </div>
              <div className="w-[188px] h-[48px] mx-4">
              <button className="w-[188px] h-[48px] justify-center text-white bg-[#000000] rounded" type="submit">Buy Now</button>
              </div>
            </div>
          </div>
          
          <div className="w-[268px] h-[432px] bg-[#F6F6F6] rounded-lg">
            <div className="w-[236px] h-[32px] my-2 mx-3">
              <span className="float-right py-1"><CiHeart/></span>
            </div>
            <div className="mx-12">
            <Image src={pro7} alt="pic" className="w-[160px] h-[160px]" />
            </div>
            <div className="w-[236px] h-[160px] border-solid mx-4 my-2">
              <div className="w-[236px] h-[48px] text-center py-1">
              <h3 className="text-sm">Galaxy Buds FE Graphite</h3>
              </div>
              <div className="w-[236px] h-[48px] text-center py-1">
              <span className="">$99.99</span>
              </div>
              <div className="w-[188px] h-[48px] mx-4">
              <button className="w-[188px] h-[48px] justify-center text-white bg-[#000000] rounded" type="submit">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="w-[268px] h-[432px] bg-[#F6F6F6] rounded-lg">
            <div className="w-[236px] h-[32px] my-2 mx-3">
              <span className="float-right py-1"><CiHeart/></span>
            </div>
            <div className="mx-12">
            <Image src={pro8} alt="pic" className="w-[160px] h-[160px]" />
            </div>
            <div className="w-[236px] h-[160px] mx-4 my-2">
              <div className="w-[236px] h-[48px] text-center py-1">
              <h3 className="text-sm">Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021</h3>
              </div>
              <div className="w-[236px] h-[48px] text-center py-1">
              <span className="">$398</span>
              </div>
              <div className="w-[188px] h-[48px] mx-4">
              <button className="w-[188px] h-[48px] justify-center text-white bg-[#000000] rounded" type="submit">Buy Now</button>
              </div>
            </div>
          </div>
          
        </div>
      </div>


  
      {/* Code for four products */}

<div className="flex w-[auto] h-[640px]">

      <div className="w-[340px] h-[640px] bg-[#FFFFFF]">
          <div className="w-[335px] h-[366px]">
          <Image src={CCwatch} alt="pic" className="justify-center w-[345px] h-[327px] " />
          </div>
          <div className="mx-4 w-[296px] h-[208px]">
          <div className="w-[296px] h-[48px]">
          <h1 className="font-light text-2xl">Popular Products</h1>
          </div>
          <div className="w-[296px] h-[72px]">
          <p className="text-slate-400 font-light leading-6 text-sm	" >iPad combines a magnificient 10.2-inch Retina display, 
            incredible performance, multitasking and ease of use.</p>
          </div>
          <div className="w-[191px] h-[56px] my-4">
          <button className="border border-black w-[188px] h-[48px] justify-center text-black rounded" type="submit">Shop Now</button>
          </div>
          </div>
          
      </div>

      <div className="w-[340px] h-[640px] bg-[#F9F9F9]">
        <div className="w-[335px] h-[366px]">
        <Image src={CCipad} alt="pic" className="justify-center w-[360px] h-[366px]" />
        </div>
        <div className="mx-4 w-[296px] h-[208px]">
        <div className="w-[296px] h-[48px]">
          <h1 className="font-light text-2xl">Ipad Pro</h1>
          </div>
          <div className="w-[296px] h-[72px]">
          <p className="text-slate-400 font-light leading-6 text-sm">iPad combines a magnificient 10.2-inch Retina display, 
            incredible performance, multitasking and ease of use.</p>
          </div>
          <div className="w-[191px] h-[56px] my-4">
          <button className="border border-black w-[188px] h-[48px] justify-center text-black rounded" type="submit">Shop Now</button>
          </div>
        </div>

      </div>

      <div className="w-[340px] h-[640px] bg-[#EAEAEA]">
      <div className="w-[335px] h-[366px]">
      <Image src={CCsamsung} alt="pic" className="justify-center w-[360px] h-[366px]" />
        </div>
        <div className="mx-4 w-[296px] h-[208px]">
        <div className="w-[296px] h-[48px]">
          <h1 className="font-light text-2xl">Samsung Galaxy</h1>
          </div>
          <div className="w-[296px] h-[72px]">
          <p className="text-slate-400 font-light leading-6 text-sm">iPad combines a magnificient 10.2-inch Retina display, 
            incredible performance, multitasking and ease of use.</p>

          </div>
          <div className="w-[191px] h-[56px] my-4">
          <button className="border border-black w-[188px] h-[48px] justify-center text-black rounded" type="submit">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="w-[340px] h-[640px] bg-[#2C2C2C]">
      <div className="w-[335px] h-[366px] ">
      <Image src={CCmacbook} alt="pic" className="justify-center w-[360px] h-[366px]" />
        </div>
        <div className="mx-4 w-[296px] h-[208px]">
        <div className="w-[296px] h-[48px]">
          <h1 className="font-light text-white text-2xl">Macbook Pro</h1>
          </div>
          <div className="w-[296px] h-[72px]">
          <p className="text-slate-400 font-light leading-6 text-sm">iPad combines a magnificient 10.2-inch Retina display, 
            incredible performance, multitasking and ease of use.</p>

          </div>
          <div className="w-[191px] h-[56px] my-4">
          <button className="border border-slate-300 w-[188px] h-[48px] justify-center text-white rounded" type="submit">Shop Now</button>
          </div>
        </div>
      </div>

</div>


   {/* Code for discount products */}
   <div className="w-[auto] h-[656px] justify-center bg-[#FFFFFF] px-24 py-24">
   <h2 className="pb-4"> Discounts up to -50%</h2>
        <div className="flex gap-3">

        <div className="w-[268px] h-[432px] bg-[#F6F6F6] rounded-lg">
            <div className="w-[236px] h-[32px] my-2 mx-3">
              <span className="float-right py-1"><CiHeart/></span>
            </div>
            <div className="mx-12">
            <Image src={pro10} alt="pic" className="w-[160px] h-[160px]" />
            </div>
            <div className="w-[236px] h-[160px]  mx-4 my-2">
              <div className="w-[236px] h-[48px] text-center py-1">
              <h3 className="text-sm">Apple iPhone 14 Pro 512GB Gold (MQ233)</h3>
              </div>
              <div className="w-[236px] h-[48px] text-center py-1">
              <span className="">$1437</span>
              </div>
              <div className="w-[188px] h-[48px] mx-4">
              <button className="w-[188px] h-[48px] justify-center text-white bg-[#000000] rounded" type="submit">Buy Now</button>
              </div>
            </div>
          </div>
        
          <div className="w-[268px] h-[432px] bg-[#F6F6F6] rounded-lg">
            <div className="w-[236px] h-[32px] my-2 mx-3">
              <span className="float-right py-1"><CiHeart/></span>
            </div>
            <div className="mx-12">
            <Image src={pro4} alt="pic" className="w-[160px] h-[160px]" />
            </div>
            <div className="w-[236px] h-[160px]  mx-4 my-2">
              <div className="w-[236px] h-[48px] text-center py-1">
              <h3 className="text-sm">AirPods Max Silver Starlight Aluminium</h3>
              </div>
              <div className="w-[236px] h-[48px] text-center py-1">
              <span className="">$549</span>
              </div>
              <div className="w-[188px] h-[48px] mx-4">
              <button className="w-[188px] h-[48px] justify-center text-white bg-[#000000] rounded" type="submit">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="w-[268px] h-[432px] bg-[#F6F6F6] rounded-lg">
            <div className="w-[236px] h-[32px] my-2 mx-3">
              <span className="float-right py-1"><CiHeart/></span>
            </div>
            <div className="mx-12">
            <Image src={pro3} alt="pic" className="w-[160px] h-[160px]" />
            </div>
            <div className="w-[236px] h-[160px]  mx-4 my-2">
              <div className="w-[236px] h-[48px] text-center py-1">
              <h3 className="text-sm">AirPods Max Silver Starlight Aluminium</h3>
              </div>
              <div className="w-[236px] h-[48px] text-center py-1">
              <span className="">$549</span>
              </div>
              <div className="w-[188px] h-[48px] mx-4">
              <button className="w-[188px] h-[48px] justify-center text-white bg-[#000000] rounded" type="submit">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="w-[268px] h-[432px] bg-[#F6F6F6] rounded-lg">
            <div className="w-[236px] h-[32px] my-2 mx-3">
              <span className="float-right py-1"><CiHeart/></span>
            </div>
            <div className="mx-12">
            <Image src={pro9} alt="pic" className="w-[160px] h-[160px]" />
            </div>
            <div className="w-[236px] h-[160px]  mx-4 my-2">
              <div className="w-[236px] h-[48px] text-center py-1">
              <h3 className="text-sm">Apple iPhone 14 Pro 1TB Gold (MQ2V3)</h3>
              </div>
              <div className="w-[236px] h-[48px] text-center py-1">
              <span className="">$1499</span>
              </div>
              <div className="w-[188px] h-[48px] mx-4">
              <button className="w-[188px] h-[48px] justify-center text-white bg-[#000000] rounded" type="submit">Buy Now</button>
              </div>
            </div>
          </div>
        
        </div>
      </div>


<div className="flex w-[auto] h-[632px] bg-gradient-to-r from-neutral-600 to-neutral-900">
  <div className="w-[444px] h-[632px]">
  <div>
  <Image src={tab2} alt="pic" className="pt-3 rotate-2 mx-2 w-[300px] h-[280px] " />
  </div>
  <div>
  <Image src={tab1} alt="pic" className="origin-bottom -rotate-1 w-[360px] h-[327px] " />
  </div>
  </div>

  <div className="w-[553px] h-[200px] pt-52  leading-8">
    <h1 className="text-6xl text-white font-sans font-thin">Big Summer <span className="font-bold">Sale</span></h1>
    <p className="text-slate-400 font-light leading-9 text-sm px-10 ">Commodo fames vitae vitae leo mauris in. Eu consequat</p>
    <div className="px-32 py-8"><button className="border border-slate-300 w-[188px] h-[48px] text-white rounded" type="submit">Shop Now</button></div>
  </div>

  <div className="w-[444px] h-[632px] pt-2">
  <div>
  <Image src={tab2} alt="pic" className="pt-3 -hue-rotate-180 mx-2 w-[300px] h-[280px] " />
  </div>
  <div>
  <Image src={tab1} alt="pic" className="-hue-rotate-180 w-[360px] h-[327px] " />
  </div>
  </div>

</div>

    </div>
  );
}
