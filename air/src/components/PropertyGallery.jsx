import { FiShare2, FiHeart } from "react-icons/fi";
export default function PropertyGallery() {
  return (
    <div className=" mt-2 font-semibold text-xl max-w-7xl mx-auto border-t border-gray-300 pt-6 px-[180px]">
      {" "}
      <div className="flex justify-between items-center">

        <div className="text-xl font-medium">
          Family Room: Nirvana Homes | Wooden House | Farm Stay
        </div>


        <div className="flex text-xs items-center gap-4">
          <div className="flex items-center gap-2 cursor-pointer hover:underline">
            <FiShare2 className="text-lg" /> Share
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:underline">
            <FiHeart className="text-lg" /> Save
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 py-3 grid-rows-2 gap-4 h-[450px]">
        <div className="col-span-2 row-span-2 rounded-xl overflow-hidden">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-48554731/original/a79e82dc-85a0-463a-b769-ff90eb2b9d17.jpeg?im_w=960&im_format=avif"
            className="w-full h-full object-cover"
            alt="Main"
          />
        </div>
        {[2, 3, 4, 5].map((num) => (
          <div key={num} className="rounded-xl overflow-hidden">
            <img
              src={`https://images.pexels.com/photos/751546/pexels-photo-751546.jpeg?cs=srgb&dl=pexels-simon73-751546.jpg&fm=jpg-${num}.jpg`}
              className="w-full h-full object-cover"
              alt={`Property ${num}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
