import { WhatsApp } from "../../assets";

export function ContactInfo() {
  return (
    <div>
      <div className="text-[17px] md:text-[20px] lg:text-[25px]">
        <p>Address: </p>
        <p>KATLICHERRA CENTRAL SCHOOL</p>
        <p>College road, Katlicherra, 788161 </p>
        
      </div>
      <div className="mt-4 text-[17px] md:text-[20px] lg:text-[25px]">
        <p>Email</p>
        <p>katlicherracentralschool@gmail.com</p>
      </div>
      <div className="mt-4 text-[17px] md:text-[20px] lg:text-[25px]">
        <p>Phone Number</p>
        <p>+91 9707236371</p>
      </div>
      <div className="mt-6 text-[17px] md:text-[20px] lg:text-[25px]">
        <button className="border-[1px] px-3 py-1 flex items-center justify-center rounded-lg">
          <span className="truncate">Connect on Whatsapp</span>
          <img
            src={WhatsApp}
            className="ml-3 size-6 md:size-[30px]"
            alt="WhatsApp"
          />
        </button>
      </div>
    </div>
  );
}
