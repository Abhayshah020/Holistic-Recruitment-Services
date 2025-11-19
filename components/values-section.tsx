import Image from "next/image";

export default function ValuesSection() {
  return (
    <div className="w-full py-3 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-5 px-3">
      {/* Left side - Yellow background with values */}
      <div className="bg-yellow-100 p-4 relative overflow-hidden">

        <img
          src="/1.png"
          alt="On Hire Services"
          className="w-full"
        />

        <p className="text-xs text-navy-900 font-semibold mt-5">David</p>
        <p className="text-xs text-gray-700 mt-3">
          Has a logistics background having been trained at RMIT (Transport Economics) and the Royal Military College of Science, through the Australian Army. He then established a Logistics Consulting firm and assisted a number of high profile clients to enhance their supply chain capabilities. These companies include Nestlé, Australia Post, Coca-Cola, Nestlé and FMCG Retailers globally working with Hellen to create Holistic Recruitment Services. In establishing the business the principles upon which much of his supply chain work was based upon, could be readily applied to the recruitment industry.
        </p>
      </div>
      <div className="bg-yellow-100 p-4 relative overflow-hidden">
        <img
          src="/2.png"
          alt="On Hire Services"
          className="w-full"
        />

        <p className="text-xs text-navy-900 font-semibold mt-5">David</p>
        <p className="text-xs text-gray-700 mt-3">
          Has a logistics background having been trained at RMIT (Transport Economics) and the Royal Military College of Science, through the Australian Army. He then established a Logistics Consulting firm and assisted a number of high profile clients to enhance their supply chain capabilities. These companies include Nestlé, Australia Post, Coca-Cola, Nestlé and FMCG Retailers globally working with Hellen to create Holistic Recruitment Services. In establishing the business the principles upon which much of his supply chain work was based upon, could be readily applied to the recruitment industry.
        </p>
      </div>

    </div>
  )
}
