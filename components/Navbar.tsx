import Link from "next/link";
import { SiNike } from "react-icons/si";
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { SheetSide } from "@/components/sheet";
import Image from "next/image";

export default function Header() {
  return (
    <div>
      {/* Navbar 1 */}
      <div className="bg-[#F5F5F5] flex items-center justify-between px-4 sm:px-6 lg:px-10 h-12">
        <div className="flex items-center">
          <Image src={"/Frame (10).png"} alt="logo" width={50} height={50} />
        </div>

        <div className="hidden sm:flex w-[200px] h-8 justify-center items-center xl:ml-[20%] lg:ml-[10%] sm:ml-[10%]">
          <p className="text-black text-sm sm:text-base font-medium"></p>
        </div>

        <nav className="text-xs sm:text-sm lg:text-base space-x-4 sm:space-x-6 text-black font-medium flex items-center">
          <Link href="/side" className="hover:underline">
            Find a Store
          </Link>
          <span>|</span>
          <Link href="/help" className="hover:underline">
            Help
          </Link>
          <span>|</span>
          <Link href="/joinus" className="hover:underline">
            Join Us
          </Link>
          <span>|</span>
          <Link href="/login" className="hover:underline">
            Login
          </Link>
        </nav>
      </div>

      {/* Navbar 2 */}
      <div className="flex flex-col bg-white h-[100px] sm:h-[80px]">
        <div className="pt-2">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Logo and SheetSide (for mobile) */}
              <div className="flex items-center space-x-4">
                {/* SheetSide (visible on mobile, hidden on desktop) */}
                <div className="md:hidden">
                  <SheetSide />
                </div>
                {/* Logo */}
                <Link href="/">
                  <SiNike className="text-3xl animate-bounce" />
                </Link>
              </div>

              {/* Navigation Links (visible on desktop, hidden on mobile) */}
              <div className="hidden md:flex items-center space-x-8">
                <ul className="flex space-x-8">
                  <li>
                    <Link href={"/New & Featured"} className="hover:underline">
                      New & Featured
                    </Link>
                  </li>
                  <li>
                    <Link href={"/Men"} className="hover:underline">
                      Men
                    </Link>
                  </li>
                  <li>
                    <Link href={"/Women"} className="hover:underline">
                      Women
                    </Link>
                  </li>
                  <li>
                    <Link href={"/best"} className="hover:underline">
                      Kid
                    </Link>
                  </li>
                  <li>
                    <Link href={"/product"} className="hover:underline">
                      Sale
                    </Link>
                  </li>
                  <li>
                    <Link href={"/SNKRS"} className="hover:underline">
                      SNKRS
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Search Bar and Icons */}
              <div className="flex items-center space-x-6">
                {/* Search Bar (visible on desktop, hidden on mobile) */}
                <div className="hidden md:flex items-center w-[250px] h-[40px] rounded-[62px] bg-[#f0f0f0]">
                  <CiSearch className="text-xl ml-3" />
                  <input
                    placeholder="Search items"
                    className="w-full h-full ml-2 outline-none bg-transparent"
                  />
                </div>

                {/* Icons (visible on all screens) */}
                <div className="flex items-center space-x-4">
                  <CiSearch className="text-xl md:hidden cursor-pointer" />
                  <FaHeart className="cursor-pointer hover:text-gray-600" />
                  <Link href="/cart">
                    <FaShoppingBag className="cursor-pointer hover:text-gray-600" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}