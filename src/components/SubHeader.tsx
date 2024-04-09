const SubHeader = () => {
  return (
    <div className="bg-slate-300 rounded-lg mt-3 shadow-2xl">
      <div className="text-center m-5">
        <h1 className="text-2xl font-medium font-playfair">
          Mempelai Pria <span className="font-raleway text-2xl font-medium">&</span> Wanita
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-10 px-20">
        <div className="cursor-pointer">
          <img
            src="/images/gallery/image2.jpg"
            alt="wedding1"
            className="h-[250px] object-cover w-full rounded shadow-xl"
          />
        </div>
        <div className="cursor-pointer">
          <img
            src="/images/gallery/image1.jpg"
            alt="wedding2"
            className="h-[250px] object-cover w-full rounded shadow-xl"
          />
        </div>
        <div className="cursor-pointer">
          <img
            src="/images/gallery/image3.jpg"
            alt="wedding3"
            className="h-[250px] object-cover w-full rounded shadow-xl"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="inline-block text-center text-3xl font-satisfy mt-5">
            <p>Ade & Robi</p>
        </div>
        <div className="inline-block text-center text-base font-medium font-raleway">
            <p>Putri Pertama Bapak Elon Dahlan & Ibu Uhe, Putra Kedua Bapak Syahromi & Ibu Anah</p>
        </div>
      </div>
    </div>
  );
};
export default SubHeader;
