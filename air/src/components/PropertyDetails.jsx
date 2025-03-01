import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FaTimes,
  FaRegUser,
  FaGamepad,
  FaKey,
  FaCoffee,
  FaStar,
  FaWifi,
  FaBriefcase,
  FaPaw,
  FaCar,
  FaTv,
  FaTshirt,
  FaFire,
} from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import GuestDropdown from "./GuestDropdown";
import { GiCook, GiWashingMachine } from "react-icons/gi";
import { MdWarning } from "react-icons/md";

export default function PropertyDetails() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 px-[180px]">
      <div className="flex gap-8 ">
        {/* Left Section */}
        <div className="flex-1">
          <h1 className="text-xl font-semibold">
            Private room in bed and breakfast in Pharog, India
          </h1>
          <div className="flex items-center gap-4 mt-4 text-black-400">
            <span>4 guests · 2 bedrooms · 3 beds · 2 baths</span>
          </div>
          <div className="text-black text-sm underline flex items-center gap-1">
            <FaStar className="text-black-500" /> 1 review
          </div>

          <div className="mt-8 border-t border-gray-300 pt-8">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://a0.muscache.com/im/pictures/user/2c0dc3eb-3671-479b-a3c5-725ede36f6d8.jpg?im_w=240&im_format=avif"
                alt="Host Avatar"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">Hosted by Tarana</h3>
                <p className=" text-sm text-gray-600">4 years hosting</p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-300 pt-8">
            <div className="py-1">
              {[
                {
                  icon: <FaGamepad className="text-xl text-gray-600" />,
                  title: "Fun and games for kids",
                  description:
                    "The playroom, playground and books help keep kids entertained.",
                },
                {
                  icon: <FaKey className="text-xl text-gray-600" />,
                  title: "Self check-in",
                  description: "Check yourself in with the lockbox.",
                },
                {
                  icon: <FaCoffee className="text-xl text-gray-600" />,
                  title: "Wake up to breakfast and coffee",
                  description: "Included essentials make mornings extra easy.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex gap-4 pb-3 last:border-0">
                  <div className="mt-1 text-gray-600">{feature.icon}</div>
                  <div>
                    <h3 className="text-l font-semibold mb-1">
                      {feature.title}
                    </h3>
                    <p className=" text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-gray-300 pt-8">
            <h1 className="text-3xl font-semibold mb-6">
              Full Property Details
            </h1>
            <p>
              Nirvana Homes uses a 19th-Century wooden house built using “Kath
              Kuni” Architecture, an indigenous construction technique.
              Providing a panoramic view of the Himalayas, amidst apple orchards
              we're located 80km from Shimla. With 2 king-size beds & seating
              space, this room is for groups that want to stay together without
              giving up on comfort. The room has wooden floors & walls
              complimented with colorful décor. All our rooms have access to the
              lawn, kitchen, living area & our apple orchards The space Nirvana
              Homes is a 19th-Century wooden house built using “Kath Kuni”
              Architecture, an indigenous construction technique. Providing a
              panoramic view of the Himalayas, amidst apple orchards, we're
              located in Village Rarta, away from the hustle & bustle, 80 km
              from Shimla. The property features:
            </p>
            <ul className="list-disc pl-6">
              <li>2 king-size beds</li>
              <li>Spacious seating area</li>
              <li>Wooden floors & walls</li>
              <li>Colorful traditional décor</li>
              <li>Shared access to lawn and kitchen</li>
            </ul>
          </div>

          <div className="mt-8 border-t border-gray-300 pt-8">
            <h2 className="text-2xl font-semibold mb-6">Where you'll sleep</h2>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Bedroom Card */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img
                  src="https://media.designcafe.com/wp-content/uploads/2024/01/24175330/essence-of-modern-luxury-bedroom-design.jpg" // Replace with your actual image path
                  alt="Bedroom"
                  className="w-full h-44 object-cover rounded-t-lg"
                />
                <div className="p-2">
                  <h3 className="text-xl font-semibold mb-2">Bedroom</h3>
                  <p className="text-gray-600">2 double beds</p>
                </div>
              </div>

              {/* Living Room Card */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img
                  src="https://media.designcafe.com/wp-content/uploads/2019/12/17055334/minimalistic-living-room-interior.jpg" // Replace with your actual image path
                  alt="Living Room"
                  className="w-full h-44 object-cover rounded-t-lg"
                />
                <div className="p-2">
                  <h3 className="text-xl font-semibold mb-2">Living Room</h3>
                  <p className="text-gray-600">
                    2 sofa beds, 2 floor mattresses, 1 hammock
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-300 pt-8">
            <h2 className="text-2xl font-semibold mb-6">
              What this place offers
            </h2>

            <div className="grid gap-2 grid-cols-2 ">
              {[
                { name: "Kitchen", icon: <GiCook /> },
                { name: "Wifi", icon: <FaWifi /> },
                { name: "Dedicated workspace", icon: <FaBriefcase /> },
                { name: "Free parking on premises", icon: <FaCar /> },
                { name: "Pets allowed", icon: <FaPaw /> },
                { name: "TV", icon: <FaTv /> },
                { name: "Dryer", icon: <FaTshirt /> },
                { name: "Washing Machine", icon: <GiWashingMachine /> },
                {
                  name: "Carbon monoxide alarm",
                  icon: <MdWarning />,
                  unavailable: true,
                },
                { name: "Smoke alarm", icon: <FaFire />, unavailable: true },
              ].map((amenity) => (
                <div
                  key={amenity.name}
                  className={`flex items-center gap-3 py-1 ${
                    amenity.unavailable
                      ? "line-through text-gray-400 "
                      : "text-gray-700"
                  }`}
                >
                  <span className="text-xl">{amenity.icon}</span>
                  <span>{amenity.name}</span>
                </div>
              ))}
            </div>

            <button className="mt-4 text-black border rounded-xl p-2 font-medium hover:bg-gray-100 transition-colors duration-200">
              Show all 77 amenities
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-4 sticky top-10 h-[calc(100vh-100px)]">
          <div className="flex flex-col gap-4 overflow-y-auto pb-4">
            {/* Card 1 */}
            <div className="w-72 border rounded-xl p-6 shadow-lg bg-white">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-2xl font-semibold">
                    <span className="line-through text-gray-500">₹5,000</span>{" "}
                    ₹3,600
                  </span>
                  <span className="text-gray-600"> night</span>
                </div>
              </div>

              <div className="border rounded-lg">
                <div className="flex border-b">
                  <div className="flex-1 p-3 border-r">
                    <label className="text-xs font-semibold">CHECK-IN</label>
                    <DatePicker
                      selected={new Date()}
                      className="w-full outline-none"
                    />
                  </div>
                  <div className="flex-1 p-3">
                    <label className="text-xs font-semibold">CHECKOUT</label>
                    <DatePicker
                      selected={new Date()}
                      className="w-full outline-none"
                    />
                  </div>
                </div>
                <GuestDropdown />
              </div>

              <button className="w-full mt-4 bg-red-500 text-white py-3 rounded-full font-semibold hover:bg-red-600 transition-colors">
                Reserve
              </button>
              <div className="text-center text-xs mt-2 text-gray-600">
                You won't be charged yet
              </div>
            </div>

            {/* card 2 */}
            <div className="w-72 border rounded-xl p-4 shadow-lg bg-white relative">
              <div className="absolute top-5 left-3">
                <FiClock className="text-2xl text-black" />
              </div>

              <div className="pl-8">
                {" "}
                <div className="text-lg font-semibold text-black">
                  Special offer: Save ₹3,600
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  This Host is offering a deal on their first 3 bookings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
