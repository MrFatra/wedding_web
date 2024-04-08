const Content = () => {
  return (
    <div className="bg-slate-300 rounded-md m-8">
      <div className="grid grid-cols-2 gap-11">
        <div className="ml-7 mt-4 mb-4 bg-white h-[385px] w-[300px] rounded-xl shadow-2xl">
          <img
            src="/images/wedding/wed-5.jpg"
            alt=""
            className="h-[350px] ml-5 mt-4 object-cover rounded-lg shadow-xl"
          />
        </div>
        <div className="mt-4">
          <h1 className="text-4xl font-extrabold font-satisfy mb-3 tracking-widest text-center">Akad Nikah</h1>
          <p className="font-semibold text-xl font-satisfy mb-2">
            Kamis, 18 April 2024
          </p>
          <p className="font-semibold text-lg font-playfair mb-2">
            Waktu: 08.00 s.d Selesai
          </p>
          <p className="font-playfair text-lg font semi-bold mb-2">
            Tempat: Kediaman Wanita
          </p>
        </div>
      </div>
    </div>
  );
};
export default Content;
