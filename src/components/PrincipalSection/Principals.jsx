import { katlicherra_principal } from "../../assets";

export function Principals() {
  return (
    <div className="mt-5 mx-7 md:mt-36">
      <div className="flex items-center sm:ml-20 md:ml-0 gap-4 lg:ml-2 xl:ml-16">
        <span className="border-t-8 border-schoolGold px-6 md:px-10 md:border-t-12"></span>
        <h2 className="text-2xl whitespace-nowrap font-medium md:text-3xl lg:text-4xl ">
          Principal message
        </h2>
      </div>
      <div className="flex flex-col items-center mx-auto my-6 md:flex-row md:justify-center md:gap-10">
        <img
          src={katlicherra_principal}
          className="w-full max-w-[280px] md:max-w-[388px] border-12 rounded-md border-schoolGold"
          alt=""
        />
        <div className="md:w-1/2 max-w-[280px] mt-5 md:max-w-none md:text-left">
          <p className="text-lg font-light md:text-xl lg:text-2xl">
            At Katlicherra Central School, we are dedicated to fostering a
            nurturing and inspiring environment where every child grows into a
            confident, compassionate, and responsible global citizen. I believe
            in the limitless potential of young minds to create change, and we
            strive to instill in them empathy, integrity, and the courage to
            pursue their dreams.
          </p>
          <h2 className="mt-3 text-lg font-light italic lg:text-2xl">
            "The highest education is that which does not merely give us
            information but makes our life in harmony with existence”
          </h2>
        </div>
      </div>
    </div>
  );
}
