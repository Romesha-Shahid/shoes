import Link from "next/link";
import image1 from "../../../public/image1.png"
import image2 from "../../../public/image2.png";
import image4 from "../../../public/image4.png";
import image6 from "../../../public/image6.png";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

export default function Best() {
  
  const productData2 = [
    {
      id:1,
      image: image1,
      name: "Nike Air Max Pulse",
      price: "₹ 13,995",
      category: "Womens Shoes",
    description: "The Nike Air Max Pulse offers a stylish and comfortable fit designed for everyday wear. Featuring a sleek, modern silhouette, these shoes are equipped with a breathable mesh upper that ensures excellent ventilation, keeping your feet cool and comfortable. The iconic Air Max cushioning in the sole provides responsive support and a smooth ride with every step, making it perfect for long days on the go. With its bold design and vibrant color options, the Nike Air Max Pulse adds a touch of flair to any outfit while delivering the comfort and durability that Nike is known for. Whether you're running errands, heading to the gym, or meeting up with friends, these shoes will keep you feeling great all day long."
    },
    {
    id:2,
    image: image2,
    name: "Nike Air Max SYSTM",
    price: "₹ 6,495.00", 
    category: "Mens Shoes",
    description: "The Nike Air Max SYSTM blends retro style with modern comfort, offering a sleek design for active kids. With a durable synthetic and leather upper, these shoes are built to last, while the Air Max cushioning ensures a soft, responsive ride. The classic Max Air unit provides all-day comfort, making these shoes perfect for everyday adventures, whether running or playing. The breathable upper keeps feet cool, while the rubber outsole delivers reliable traction for various surfaces."
    },
    {
    id:3,
    image: image4,
    name: "Nike Air Max 97 SE",
    price: "₹ 16,995", 
    category: "Mens Shoes",
    description: "The Nike Air Max 97 SE redefines comfort and style with its innovative design and high-performance features. Featuring the iconic full-length Air Max cushioning, these shoes offer superior comfort and support, making them perfect for long hours of wear. The premium leather and synthetic upper provides a sleek, durable look that stands out with bold color accents and reflective details. The unique, wave-inspired design of the Nike Air Max 97 SE adds a modern twist to the classic Air Max silhouette, giving you a fashion-forward look without compromising on comfort. Ideal for both casual outings and active days, the Nike Air Max 97 SE ensures you step out in style and confidence."
    },
    {
    id:4,
    image: image6,
    name: "Nike Air Max Pulse",
    price: "₹ 13,995", 
    category: "Womens Shoes",
     description: "The Nike Air Max Pulse offers a stylish and comfortable fit designed for everyday wear. Featuring a sleek, modern silhouette, these shoes are equipped with a breathable mesh upper that ensures excellent ventilation, keeping your feet cool and comfortable. The iconic Air Max cushioning in the sole provides responsive support and a smooth ride with every step, making it perfect for long days on the go. With its bold design and vibrant color options, the Nike Air Max Pulse adds a touch of flair to any outfit while delivering the comfort and durability that Nike is known for. Whether you're running errands, heading to the gym, or meeting up with friends, these shoes will keep you feeling great all day long."
    },

  ];

  return (
    <div className="px-4">
      {/* Header Section */}
      <div className="flex flex-col mt-10 sm:flex-row sm:items-center sm:gap-[40%] sm:justify-between">
        <h1 className="text-[14px] font-medium text-text2 text-center xl:ml-[3%] xl:text-[16px] lg:ml-[4%] lg:text-[14px] sm:ml-[5%] sm:mt-4">
          Best of Air Max
        </h1>

        <div className="flex gap-2 items-center justify-center mt-4 lg:ml-[15%] xl:ml-[25%] sm:mr-4">
          <p className="text-[12px] font-medium">Shop</p>
          <div className="bg-[#E5E5E5] rounded-full h-7 w-7 flex items-center justify-center cursor-pointer">
          <FaAngleLeft />
          </div>
          <div className="bg-[#CCCCCC] rounded-full h-7 w-7 flex items-center justify-center cursor-move">
            
            <FaAngleRight />
          </div>
        </div>
      </div>

      {/* Product */}
      <div className="flex overflow-x-auto scrollbar-hide mt-4 gap-4">
        {productData2.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-[250px] sm:w-[300px] "
          >
            <Link href={`/kid ${product.id}`}>
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="object-cover"
            />
            <div className="flex items-center justify-between mt-2">
              <h3 className="text-[12px] font-medium">{product.name}</h3>
              <p className="text-[10px]">{product.price}</p>
            </div>
            <p className="text-[12px] text-[#757575]">{product.category}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
