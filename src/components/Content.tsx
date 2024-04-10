const Content = () => {
  return (
    <div className="bg-orange-100 text-gray-500 rounded-md py-10 px-5 flex flex-col items-center justify-center mx-4 sm:mx-8 my-10">
      <div className="block sm:flex gap-10 md:gap-15 lg:gap-15 items-center">
        <div className="flex justify-center">
          <img
            src="/images/wedding/wed-5.jpg"
            alt=""
            className="h-1/4 md:h-1/3 lg:h-1/3 w-1/2 sm:w-1/2 object-cover rounded-lg border-[10px] border-white"
          />
        </div>
        <div className="text-center sm:mt-0 mt-10">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-satisfy tracking-widest">
            Akad Nikah
          </p>
          <p className="font-medium text-sm md:text-xl font-playfair mb-2">
            Kamis, 18 April 2024
          </p>
          <p className="font-medium text-sm md:text-lg font-playfair mb-2">
            Waktu: 08.00 s.d Selesai
          </p>
          <p className="font-playfair text-sm md:text-lg font-medium mb-2">
            Tempat: Kediaman Mempelai Wanita
          </p>
        </div>
      </div>
      <p className="text-center text-sm sm:text-xl sm:font-bold font-semibold mt-5" >Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada putra-putri kami.</p>
    </div>
  );
};
export default Content;
