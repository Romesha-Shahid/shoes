import React from 'react'
import { SiNike } from "react-icons/si";
import Link from "next/link"


export default function Join() {
    return (
        <div className="flex flex-col justify-center items-center gap-4 mt-6">
            <SiNike className="text-3xl animate-bounce" />
            <h1 className="font-bold text-[18px] text-center">BECOME A NIKE MEMBER</h1>
            <p className="text-[12px] text-[#757575] text-center">Create your Nike Member profile and get <br /> first access to the very best of Nike <br /> products, inspiration and community.</p>
            <div className="flex flex-col justify-center items-center gap-2">
                <input type="text" name="email" className="border border-gray-200 rounded-md h-[40px] w-[280px] px-2 text-[#757575] text-[14px]" placeholder="Email address" />
                <input type="text" name="email" className="border border-gray-200 rounded-md h-[40px] w-[280px] px-2 text-[#757575] text-[14px]" placeholder="Password" />
                <input type="text" name="email" className="border border-gray-200 rounded-md h-[40px] w-[280px] px-2 text-[#757575] text-[14px]" placeholder="First Name" />
                <input type="text" name="email" className="border border-gray-200 rounded-md h-[40px] w-[280px] px-2 text-[#757575] text-[14px]" placeholder="Last Name" />
                <input type="text" name="email" className="border border-gray-200 rounded-md h-[40px] w-[280px] px-2 text-[#757575] text-[14px]" placeholder="Date of Birth" />
                <p className="text-[#757575] text-[10px]">Get a Nike Member Reward every year on your Birthday.</p>
                <select name="country" id="country" className="border border-gray-200 rounded-md h-[40px] w-[280px] px-2 text-[#757575] text-[14px]">
                    <option value="pakistan">Pakistan</option>
                    <option value="india">Island</option>
                    <option value="usa">United States</option>
                    <option value="uk">United Kingdom</option>
                </select>
                <select name="name" id="name"className="border border-gray-200 rounded-md h-[40px] w-[280px] px-2 text-[#757575] text-[14px]" >
                <option value="Male">Male</option>
                <option value="female">Female</option>
                </select>
                
                <div className="flex justify-center items-center gap-2">
                   
                    <p className="text-[#757575] text-[10px]">Sign up for emails to get updates from Nike on <br />products, offers and your Member benefits</p>
                </div>
                <p className="text-[#757575] text-[10px] text-center mt-2">By creating an account, you agree to Nike&apos;s Privacy <br /> Policy and Terms of Use.</p>
                <div className="bg-black w-[260px] h-[40px] flex justify-center items-center rounded-sm mt-4">
                    <button className="text-[12px] text-white">JOIN US</button>
                </div>
                <div className="flex gap-1">
                <p className="text-[12px] text-[#757575]">Already a Member? </p>
              <Link href="/SignIn">  <p className="text-[12px] text-[#757575] font-medium underline">Sign In.</p> </Link>
                </div>
            </div>
        </div>



    )
}

