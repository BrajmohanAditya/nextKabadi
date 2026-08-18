import React, { useState } from "react";
import { MapPin, Truck, Calendar, Clock, Weight, CheckCircle2, Phone, Crosshair } from "lucide-react";
import su_bike from "../assets/su_bike.webp";
import su_truck from "../assets/su_truck.png";

const scrapCategories = [
    { id: "paper", label: "Paper / Cartons / Plastics", icon: "📦", image: "/categories/cartons.webp" },
    { id: "iron", label: "Iron", icon: "⚙️", image: "/categories/iron.webp" },
    { id: "metal", label: "Aluminium / Copper / Brass", icon: "🔩", image: "/categories/aluminium.webp" },
    { id: "steel", label: "Stainless Steel", icon: "🥢" ,image:"/categories/steel.webp" },
    { id: "ac", label: "Air Conditioner (AC)", icon: "❄️" ,image:"/categories/ac.webp" },
    { id: "appliance", label: "Fridge / Washing Machine / Microwave", icon: "🧺", image:"/categories/fridge.webp" },
    { id: "ewaste", label: "Laptop / CPU / Electronics", icon: "💻", image: "/categories/laptop.webp" },
    { id: "small_appliance", label: "Small Appliances", icon: "🔌", image: "/categories/fan.webp" },
    { id: "heavy_appliance", label: " Inverter Batery", icon: "🚰", image: "/categories/batry.webp" },
    { id: "clothes", label: "Clothes / Glass", icon: "👕", image: "/categories/glass.webp" },
    { id: "others", label: "Others", icon: "♻️", image: "/categories/other.webp" },
    { id: "watertap", label: "Water Tap", icon: "🚰", image: "/categories/watertap.webp" },
];

const Schedule = () => {
    const [vehicleType, setVehicleType] = useState("small");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [weight, setWeight] = useState("");
    const [pickupDate, setPickupDate] = useState("");
    const [timeSlot, setTimeSlot] = useState("");
    const [address, setAddress] = useState({ street: "", city: "", state: "", zip: "" });

    const toggleCategory = (id: string) => {
        setSelectedCategories((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const bookingData = {
            vehicleType,
            selectedCategories,
            weight,
            pickupDate,
            timeSlot,
            address,
        };
        console.log("Booking Request:", bookingData);
        alert("Pickup request submitted successfully!");
    };

    return (
        <div className="min-h-screen bg-emerald-50/40 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-emerald-100">
                <div className="flex justify-between items-center mb-2">
                    <h1 className="text-2xl sm:text-3xl font-bold text-emerald-950">
                        Schedule a <span className="text-emerald-600">Pickup</span>
                    </h1>
                    <button type="button" className="flex items-center gap-2 px-4 py-2 border border-emerald-200 rounded-full text-emerald-700 font-semibold text-sm hover:bg-emerald-50 transition-colors">
                        <Phone className="size-4" /> Request callback
                    </button>
                </div>
                <p className="text-sm text-zinc-500 mb-8">
                    Turn your kabaad into cash — tell us what you have and when to come.
                </p>

                <div className="bg-emerald-50/40 border border-emerald-200/60 rounded-2xl p-5 mb-8 max-w-lg">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-emerald-100/80 p-2 rounded-full">
                            <MapPin className="size-5 text-emerald-700" />
                        </div>
                        <h3 className="font-bold text-emerald-950 text-base">Please tell us your location</h3>
                    </div>
                    <p className="text-sm text-zinc-500 mb-5">
                        We'll use it to auto-select the nearest pickup address for you.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <button type="button" className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors">
                            <Crosshair className="size-4" /> Detect my location
                        </button>
                        <button type="button" className="flex items-center gap-2 bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-50 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors">
                            <MapPin className="size-4" /> Enter manually
                        </button>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* 1. Vehicle Type */}
                    <div className="border border-emerald-100/80 rounded-2xl p-5 mb-8 shadow-[0_2px_10px_-3px_rgba(6,122,82,0.1)]">
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-3">
                                <div className="bg-emerald-100/70 text-emerald-800 font-bold text-sm rounded-full w-8 h-8 flex items-center justify-center">
                                    01
                                </div>
                                <h2 className="text-lg font-bold text-emerald-950">Vehicle Type</h2>
                            </div>
                            <Truck className="size-5 text-emerald-600/60" />
                        </div>
                        <p className="text-sm text-zinc-500 mb-5 ml-11">
                            Pick whichever suits the amount of scrap you have.
                        </p>
                        
                        <div className="border-t border-dashed border-zinc-300 mb-5"></div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <button
                                type="button"
                                onClick={() => setVehicleType("small")}
                                className={`relative p-3 rounded-2xl border flex items-center gap-4 transition-all ${
                                    vehicleType === "small"
                                        ? "border-emerald-600 bg-emerald-50/70"
                                        : "border-zinc-200 hover:border-emerald-300"
                                }`}
                            >
                                <div className="h-16 flex-shrink-0 flex items-center pl-2">
                                    <img src={su_bike} alt="Small Pickup" className="h-full object-contain" />
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-emerald-950 text-base mb-0.5">Small</div>
                                    <div className="text-sm text-zinc-500">Our rider</div>
                                </div>
                                {vehicleType === "small" && (
                                    <div className="absolute top-3 right-3 bg-emerald-600 text-white rounded-full flex items-center justify-center w-6 h-6 shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                            </button>

                            <button
                                type="button"
                                onClick={() => setVehicleType("large")}
                                className={`relative p-3 rounded-2xl border flex items-center gap-4 transition-all ${
                                    vehicleType === "large"
                                        ? "border-emerald-600 bg-emerald-50/70"
                                        : "border-zinc-200 hover:border-emerald-300"
                                }`}
                            >
                                <div className="h-16 flex-shrink-0 flex items-center pl-2">
                                    <img src={su_truck} alt="Large Pickup" className="h-full object-contain" />
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-emerald-950 text-base mb-0.5">Large</div>
                                    <div className="text-sm text-zinc-500">Our Mini Truck</div>
                                </div>
                                {vehicleType === "large" && (
                                    <div className="absolute top-3 right-3 bg-emerald-600 text-white rounded-full flex items-center justify-center w-6 h-6 shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* 2. Scrap Categories */}
                    <div>
                        <label className="block text-base font-bold text-emerald-950 mb-3">
                            Select Scrap Categories (Select all that apply)
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {scrapCategories.map((cat) => {
                                const isSelected = selectedCategories.includes(cat.id);
                                return (
                                    <button
                                        key={cat.id}
                                        type="button"
                                        onClick={() => toggleCategory(cat.id)}
                                        className={`p-3 rounded-xl border text-sm font-medium flex items-center gap-2 transition-all ${
                                            isSelected
                                                ? "border-emerald-600 bg-emerald-600 text-white"
                                                : "border-zinc-200 bg-white text-zinc-700 hover:border-emerald-300"
                                        }`}
                                    >
                                        {cat.image ? (
                                            <img src={cat.image} alt={cat.label} className="w-10 h-10 object-contain" />
                                        ) : (
                                            <span>{cat.icon}</span>
                                        )}
                                        <span className=" text-sm">{cat.label}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* 3. Expected Weight */}
                    <div>
                        <label className="block text-base font-bold text-emerald-950 mb-3 flex items-center gap-2">
                            <Weight className="size-5 text-emerald-600" /> Estimated Total Weight
                        </label>
                        <select
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="w-full p-3 rounded-xl border border-zinc-200 bg-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                            required
                        >
                            <option value="">Select Estimated Weight</option>
                            <option value="under_20kg">Under 20 kg</option>
                            <option value="20kg_50kg">20 kg - 50 kg</option>
                            <option value="50kg_100kg">50 kg - 100 kg</option>
                            <option value="100kg_plus">100 kg+</option>
                        </select>
                    </div>

                    {/* 4. Pickup Address */}
                    <div>
                        <label className="block text-base font-bold text-emerald-950 mb-3 flex items-center gap-2">
                            <MapPin className="size-5 text-emerald-600" /> Pickup Address
                        </label>
                        <input
                            type="text"
                            placeholder="Full Address / House No. / Street"
                            value={address.street}
                            onChange={(e) => setAddress({ ...address, street: e.target.value })}
                            className="w-full p-3 rounded-xl border border-zinc-200 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                            required
                        />
                    </div>

                    {/* 5. Date & Time Slot */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-base font-bold text-emerald-950 mb-3 flex items-center gap-2">
                                <Calendar className="size-5 text-emerald-600" /> Pickup Date
                            </label>
                            <input
                                type="date"
                                value={pickupDate}
                                onChange={(e) => setPickupDate(e.target.value)}
                                className="w-full p-3 rounded-xl border border-zinc-200 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-base font-bold text-emerald-950 mb-3 flex items-center gap-2">
                                <Clock className="size-5 text-emerald-600" /> Time Slot
                            </label>
                            <select
                                value={timeSlot}
                                onChange={(e) => setTimeSlot(e.target.value)}
                                className="w-full p-3 rounded-xl border border-zinc-200 bg-white text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                                required
                            >
                                <option value="">Select Time Slot</option>
                                <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                                <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                                <option value="evening">Evening (4:00 PM - 7:00 PM)</option>
                            </select>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 text-base active:scale-[0.99]"
                    >
                        <CheckCircle2 className="size-5" /> Book Pickup Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Schedule;
