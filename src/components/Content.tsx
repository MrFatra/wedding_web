const Content = () => {
  return (
    <div className="bg-orange-100 rounded-md m-4 md:m-8 md:w-[875px] md:mx-auto shadow-2xl">
      <div className="grid md:grid-cols-2">
        <div className="ml-[120px] mt-5 mb-5 md:ml-24 md:mt-4 md:mb-4 bg-orange-50 h-[200px] w-[155px] md:h-[335px] md:w-[275px] lg:h-[385px] lg:w-[300px] rounded-xl shadow-2xl">
          <img
            src="/images/wedding/wed-5.jpg"
            alt=""
            className="h-[175px] md:h-[315px] lg:h-[350px] ml-3 md:ml-5 mt-3 sm:mt-3 md:mt-4 object-cover rounded-lg shadow-xl"
          />
        </div>
        <div className="md:mt-32  text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold font-satisfy mb-3 tracking-widest">
            Akad Nikah
          </h1>
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
      <div className="w-[275px] md:w-[575px] text-center ml-16 md:ml-36 mt-2">
        <p className="font-raleway">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
          putra-putri kami.
        </p>
      </div>
    </div>
  );
};
export default Content;
