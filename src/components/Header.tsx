import { FaArrowDown } from "react-icons/fa6";
const Header = () => {
  return (
    <div className="w-full h-screen text-center">
      <div
        className="bg-cover bg-no-repeat h-full bg-center flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: "url(/images/wedding/header.jpg" }}
      >
        <p className="text-2xl md:text-4xl lg:text-4xl font-medium font-playfair mb-8 tracking tracking-widest">
          We Are Getting Married
        </p>
        <div className="font-satisfy text-5xl mt-10 mb-1 flex flex-col gap-5">
          <p>Ade Irma Rohmatillah</p>
          <p>&</p>
          <p>Muhammad Ilyas Robiansyah</p>
        </div>
        <p className="text-xl font-semibold mb-5 font-playfair">
          And we want you to be part of our special day!
        </p>
        <p className="text-lg font-normal mt-5 mb-3 font-playfair">
          Scroll down
        </p>
        <FaArrowDown size={25} className="animate-bounce" />
      </div>
    </div>
  );
};

export default Header;
