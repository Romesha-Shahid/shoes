
import Image from "next/image";


export default function Hero() {
  return (
    <main>
      {/* Hero Section */}
      <div className="w-full h-auto px-4 md:px-14">
        <h1 className="flex justify-center font-semibold text-lg md:text-2xl">
          Hello Nike APP
        </h1>
        <p className="flex justify-center text-sm md:text-base text-gray-600">
          Download the app to access everything Nike. Get Your Great
        </p>
        <div className="mt-4 mr-3">
          <Image
            src={"/Image (3).png"}
            alt="shoes"
            width={1344}
            height={700}
            className="w-full h-auto"
          />
        </div>
        <div className="mt-4 text-center">
          <h6 className="font-medium text-sm md:text-lg">First Look</h6>
          <h1 className="font-extrabold text-xl md:text-3xl">
            NIKE AIR MAX PULSE
          </h1>
          <p className="leading-relaxed text-sm md:text-base text-gray-600">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse — designed to push you past your limits and help you go to the
            max.
          </p>
        </div>
        <div className="flex justify-center space-x-2 mt-4">
          <button className="inline-flex items-center text-white bg-black border-0 py-2 px-4 focus:outline-none hover:bg-gray-400 rounded-lg text-sm md:text-base">
            Notify Me
          </button>
          <button className="inline-flex items-center text-white bg-black border-0 py-2 px-4 focus:outline-none hover:bg-gray-400 rounded-lg text-sm md:text-base">
            Shop Air Max
          </button>
        </div>
      </div>


      {/* Large Image Section */}
      <div className="w-full px-4 mt-8">
        <Image
          src={"/running.png"}
          alt="shoes"
          width={1344}
          height={700}
          className="w-full h-auto"
        />
        <div className="text-center mt-4">
          <h6 className="font-serif text-lg md:text-xl">STEP INTO WHAT FEELS GOOD</h6>
          <p className="text-gray-600 text-sm md:text-base">
            Cause everyone should know the feeling of running in that perfect
            pair.
          </p>
          <div className="mt-4">
            <button className="inline-flex items-center text-white bg-black border-0 py-2 px-4 focus:outline-none hover:bg-gray-400 rounded-lg text-sm md:text-base">
              Find Your Shoe
            </button>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="w-full px-4 mt-8 flex flex-wrap gap-4">
        {[
          { src: "/Image (8).png", title: "Nike Dri-FIT ADV TechKnit Ultra" },
          { src: "/Image (9).png", title: "Nike Dri-FIT Challenger" },
          { src: "/Image (10).png", title: "Nike Dri-FIT ADV Run Division" },
          { src: "/Image (11).png", title: "Nike Fast" },
        ].map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[48%] md:w-[24%] text-center"
          >
            <Image
              src={item.src}
              alt="shoes"
              width={300}
              height={300}
              className="mx-auto"
            />
            <h5 className="font-medium mt-2">{item.title}</h5>
            <p className="text-slate-400 text-sm">Men</p>
          </div>
        ))}
      </div>

      {/* Essentials Section */}
      <div className="w-full px-4 mt-8">
        <Image
          src={"/Image (12).png"}
          alt="shoes"
          width={1344}
          height={977}
          className="w-full h-auto"
        />
        <div className="text-center mt-4">
          <h5 className="font-semibold text-lg md:text-xl">
            FLIGHT ESSENTIALS
          </h5>
          <p className="text-gray-600 text-sm md:text-base">
            Your built-to-last, all-week wears—but with style only Jordan Brand
            can deliver.
          </p>
          <div className="mt-4">
            <button className="inline-flex items-center text-white bg-black border-0 py-2 px-4 focus:outline-none hover:bg-gray-400 rounded-lg text-sm md:text-base">
              Shop
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full px-4 mt-8">
        <h1 className="text-lg md:text-2xl font-semibold">The Essentials</h1>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {["/Frame (2).png", "/Frame (3).png", "/Frame (4).png"].map(
            (src, index) => (
              <Image
                key={index}
                src={src}
                alt="shoes"
                width={440}
                height={540}
                className="w-full sm:w-[48%] md:w-[30%]"
              />
            )
          )}
        </div>
      </div>

      {/* Footer Links */}
      <div className="w-full px-4 mt-8 flex flex-wrap gap-4">
        {[
          { title: "Icons", items: ["Air Force 1", "Huarache", "Air Max 90"] },
          { title: "Shoes", items: ["All Shoes", "Running Shoes"] },
          { title: "Clothing", items: ["Hoodies", "Top Shirts"] },
          { title: "Kids", items: ["Kids Shoes", "Kids Jordan"] },
        ].map((section, index) => (
          <div key={index} className="w-full sm:w-[48%] md:w-[24%]">
            <h1 className="font-extrabold">{section.title}</h1>
            <ul className="text-sm text-gray-600 mt-2">
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}