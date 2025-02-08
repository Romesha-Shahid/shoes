"use client"
// import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";

// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import {
  Sheet,
  // SheetClose,
  SheetContent,
  // SheetDescription,
  // SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="sm:block  md:block lg:hidden grid grid-cols-1 gap-2 ">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            {/* <Button >  <CiMenuFries /></Button> */}
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
                <SheetTitle>
                    shop.com
                </SheetTitle>
            </SheetHeader>
          <ul className="">
       <li className="grid grid-cols-1 gap-3">
        <Link href={"/New & Featured"}>New & Featured</Link>
        <Link href={"/Men"}>Men</Link>
        <Link href={"/Women"}>Women</Link> 
        <Link href={"/Kid"}>Kid</Link>
        <Link href={"/Sale"}>Sale</Link>
        <Link href={"/SNKRS"}>SNKRS</Link>
        
       </li>
      </ul>
      
             
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
