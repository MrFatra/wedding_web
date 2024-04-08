const Header = () => {
  return (
    <div className="w-screen h-screen">
      <div
        className="bg-cover h-full w-full bg-center flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: "url(/images/hero/hero1.jpg)" }}
      >
        <p className="text-2xl font-medium font-['playfair'] mb-8 tracking tracking-widest">
          We Are Getting Married
        </p>
        <h1 className="text-8xl font-extrabold font-['satisfy'] text-center mb-6">
          Ade <br /> &amp; <br />
          Robi
        </h1>
        <p className="text-lg font-normal text-center mb-5 font-['playfair']">
          and we want you to be part of our special day!
        </p>
        <p className="text-lg font-normal text-center mb-5 font-['playfair']">Kamis, 18 April 2024</p>
      </div>
    </div>
  );
};

export default Header;
