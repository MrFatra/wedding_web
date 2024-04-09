const Content = () => {
  return (
    <div className="bg-slate-300 rounded-md m-8">
      <div className="grid grid-cols-2">
        <div className="ml-7 mt-4 mb-4 bg-white h-[385px] w-[300px] rounded-xl shadow-2xl">
          <img
            src="/images/wedding/wed-5.jpg"
            alt=""
            className="h-[350px] ml-5 mt-4 object-cover rounded-lg shadow-xl"
          />
        </div>
        <div className="mt-32 text-center">
          <h1 className="text-4xl font-extrabold font-satisfy mb-3 tracking-widest">
            Akad Nikah
          </h1>
          <p className="font-medium text-xl font-playfair mb-2">
            Kamis, 18 April 2024
          </p>
          <p className="font-medium text-lg font-playfair mb-2">
            Waktu: 08.00 s.d Selesai
          </p>
          <p className="font-playfair text-lg font-medium mb-2">
            Tempat: Kediaman Wanita
          </p>
        </div>
      </div>
      <div className="w-[450px] text-center ml-24 mt-2">
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
