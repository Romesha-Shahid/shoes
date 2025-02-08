// import React from 'react'
// import Link from 'next/link'
// export default function Contact ()  {
//   return (
//     <div>

// <section className="text-blue-500 body-font relative">
//   <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
//     <div className="lg:w-2/3 md:w-1/2 bg-red-200 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
//       <iframe
//         width="100%"
//         height="100%"
//         className="absolute inset-0"
//         frameBorder={0}
//         title="map"
//         marginHeight={0}
//         marginWidth={0}
//         scrolling="no"

//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7239.457531562988!2d66.97809198949837!3d24.873111700256963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3158e6f0f4c75%3A0xe4f1825daa22b2a7!2sBihar%20Colony%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1734041375552!5m2!1sen!2s"

//         style={{ filter: "0" }}
//       />
//       <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
//         <div className="lg:w-1/2 px-8">
//           <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
//             ADDRESS
//           </h2>
//           <p className="mt-1">
//      Tariq  Road  karachi 
//           </p>
//         </div>
//         <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
//           <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
//             EMAIL
//           </h2>
//           <a className="text-blue-500 leading-relaxed">romeshashahid@gmail.com</a>
//           <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
//             PHONE
//           </h2>
//           <p className="leading-relaxed">03333436339</p>
//         </div>
//       </div>
//     </div>
//     <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
//       <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
//         Contact 
//       </h2>
//       <p className="leading-relaxed mb-5 text-gray-600">
//         feel free then text me 
//       </p>
//       <div className="relative mb-4">
//         <label htmlFor="name" className="leading-7 text-sm text-gray-600">
//           Name
//         </label>
//         <input
//           type="text"
//           id="name"
//           placeholder="name"
//           className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//           required
//         />
//       </div>
//       <div className="relative mb-4">
//         <label htmlFor="email" className="leading-7 text-sm text-gray-600">
//           Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           placeholder="email"
//           className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//           required
//         />
//       </div>
//       <div className="relative mb-4">
//         <label htmlFor="message" className="leading-7 text-sm text-gray-600">
//           Message
//         </label>
//         <textarea
//           id="message"
//           placeholder="message"
//           className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
//           defaultValue={""}
//           required
//         />
//       </div>
//       <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg">
//         Share me
//         <Link
//          target='_blank' 
//          href={"hptts/UCZtzdzAG41ZwFia8jWuk9WA"}>

//          </Link>

//       </button>
     
//     </div>
//   </div>
// </section>


//     </div>
//   )
// }


import { SiNike } from "react-icons/si";
import { TiTick } from "react-icons/ti";
import Link from "next/link"
export default function SignIn(){
    return(
            <div className="flex flex-col justify-center items-center gap-4 mt-6">
                <SiNike className="text-3xl animate-bounce" />
                
                <h1 className="font-bold text-[18px] text-center">YOUR ACCOUNT <br /> FOR EVERYTHING  <br />NIKE</h1>
                <div className="flex flex-col justify-center items-center gap-4">
                    <input type="text" name="email" className="border border-gray-200 rounded-md h-[40px] w-[280px] px-2 text-[#757575] text-[14px]" placeholder="Email address"/>
                    <input type="text" name="email" className="border border-gray-200 rounded-md h-[40px] w-[280px] px-2 text-[#757575] text-[14px]" placeholder="Password"/>
                </div>
                <div className="flex justify-between gap-4 ml-8">
                    <div className="flex gap-2 items-center">
                    <TiTick />
                        <p className="text-[#757575] text-[12px] w-[40%]">Keep me signed in</p>
                    </div>
                    <p className="text-[#757575] text-[12px] w-[40%]">Forgotten your password?</p>
                </div>
                <p className="text-[12px] text-[#757575] text-center">By logging in, you agree to Nike&apos;s np Privacy Policy <br /> and Terms of Use.</p>
                <div className="bg-black w-[260px] h-[40px] flex justify-center items-center rounded-sm">
                    <button className="text-[12px] text-white">Login IN</button>
                </div>
                <div className="flex gap-1">
                <p className="text-[12px] text-[#757575]">Not a Member? </p>
              <Link href="/joinus">  <p className="text-[12px] text-[#757575] font-medium underline">Join Us.</p> </Link>
                </div>
            </div>
    )
}