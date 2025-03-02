import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const GuestDropdown = ({ guests, setGuests }) => {
  const { adults, children, infants, pets } = guests;
  const [isOpen, setIsOpen] = useState(false);

  const totalGuests = adults + children;
  const maxMainGuests = 4;
  const maxInfants = 5;
  const maxPets = 5;

  const handleIncrement = (type) => {
    switch (type) {
      case "adult":
        if (totalGuests < maxMainGuests) {
          setGuests(prev => ({ ...prev, adults: prev.adults + 1 }));
        }
        break;
      case "child":
        if (totalGuests < maxMainGuests) {
          setGuests(prev => ({ ...prev, children: prev.children + 1 }));
        }
        break;
      case "infant":
        if (infants < maxInfants) {
          setGuests(prev => ({ ...prev, infants: prev.infants + 1 }));
        }
        break;
      case "pet":
        if (pets < maxPets) {
          setGuests(prev => ({ ...prev, pets: prev.pets + 1 }));
        }
        break;
    }
  };

  const handleDecrement = (type) => {
    switch (type) {
      case "adult":
        if (adults > 1) {
          setGuests(prev => ({ ...prev, adults: prev.adults - 1 }));
        }
        break;
      case "child":
        if (children > 0) {
          setGuests(prev => ({ ...prev, children: prev.children - 1 }));
        }
        break;
      case "infant":
        if (infants > 0) {
          setGuests(prev => ({ ...prev, infants: prev.infants - 1 }));
        }
        break;
      case "pet":
        if (pets > 0) {
          setGuests(prev => ({ ...prev, pets: prev.pets - 1 }));
        }
        break;
    }
  };

  const guestSummary = [
    `${totalGuests} guest${totalGuests !== 1 ? "s" : ""}`,
    infants > 0 && `${infants} infant${infants !== 1 ? "s" : ""}`,
    pets > 0 && `${pets} pet${pets !== 1 ? "s" : ""}`,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <div className="p-3 relative">
      <label className="text-xs font-semibold">GUESTS</label>
      <div
        className="flex items-center justify-between mt-1 cursor-pointer border rounded-lg p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{guestSummary || "Add guests"}</span>
        <RiArrowDropDownLine className="text-black" />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border rounded-lg shadow-lg p-1 mt-2 z-10 w-full max-w-[400px]">
          <div className="mb-4 space-y-4">
            {/* Adults */}
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold">Adults</div>
                <div className="text-sm text-gray-500">Age 13+</div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="w-8 h-8 rounded-full border disabled:opacity-50"
                  onClick={() => handleDecrement("adult")}
                  disabled={adults === 1}
                >
                  -
                </button>
                <span className="w-4 text-center">{adults}</span>
                <button
                  className="w-8 h-8 rounded-full border disabled:opacity-50"
                  onClick={() => handleIncrement("adult")}
                  disabled={totalGuests >= maxMainGuests}
                >
                  +
                </button>
              </div>
            </div>

            {/* Children */}
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold">Children</div>
                <div className="text-sm text-gray-500">Ages 2-12</div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="w-8 h-8 rounded-full border disabled:opacity-50"
                  onClick={() => handleDecrement("child")}
                  disabled={children === 0}
                >
                  -
                </button>
                <span className="w-4 text-center">{children}</span>
                <button
                  className="w-8 h-8 rounded-full border disabled:opacity-50"
                  onClick={() => handleIncrement("child")}
                  disabled={totalGuests >= maxMainGuests}
                >
                  +
                </button>
              </div>
            </div>

            {/* Infants */}
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold">Infants</div>
                <div className="text-sm text-gray-500">Under 2</div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="w-8 h-8 rounded-full border disabled:opacity-50"
                  onClick={() => handleDecrement("infant")}
                  disabled={infants === 0}
                >
                  -
                </button>
                <span className="w-4 text-center">{infants}</span>
                <button
                  className="w-8 h-8 rounded-full border disabled:opacity-50"
                  onClick={() => handleIncrement("infant")}
                  disabled={infants >= maxInfants}
                >
                  +
                </button>
              </div>
            </div>

            {/* Pets */}
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold">Pets</div>
                <div className="text-sm text-gray-500">Service animals</div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="w-8 h-8 rounded-full border disabled:opacity-50"
                  onClick={() => handleDecrement("pet")}
                  disabled={pets === 0}
                >
                  -
                </button>
                <span className="w-4 text-center">{pets}</span>
                <button
                  className="w-8 h-8 rounded-full border disabled:opacity-50"
                  onClick={() => handleIncrement("pet")}
                  disabled={pets >= maxPets}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            Maximum {maxMainGuests} guests (adults + children), {maxInfants}{" "}
            infants, and {maxPets} pets
          </div>

          <div className="pt-4 mt-4 flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="block text-right py-2 px-2 rounded-md hover:rounded-xl text-black underline hover:bg-gray-100 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuestDropdown;