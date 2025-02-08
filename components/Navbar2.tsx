
export default function Header2(){
    return(
        <div className="flex justify-between px-2 xl:px-6 ">
        <h4 className="text-[16px] font-medium xl:text-[20px]">New(500)</h4>
        <div className="flex gap-2 items-center">
            <div className="flex gap-2 items-center">
                <p className="text-[14px] xl:text-[16px]">Hide Filters</p>
               
            </div>
            <div className="flex gap-2 items-center">
                <p className="text-[14px] xl:text-[16px]">Sort By</p>
                
            </div>
           
        </div>
        </div>
    )
}
