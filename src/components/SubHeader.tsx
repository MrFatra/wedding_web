const SubHeader = () => {
  return (
    <div className="bg-orange-100 rounded-lg mt-3 shadow-2xl md:m-6 p-4 md:p-8 text-gray-500">
      <div data-aos="fade-up" data-aos-duration="2000" className="text-center m-5">
        <h1 className="text-2xl md:text-3xl font-medium font-playfair">
          Mempelai Pria{" "}
          <span className="font-raleway text-2xl md:text-3xl font-medium">
            &
          </span>{" "}
          Mempelai Wanita
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-20">
        <div className="cursor-pointer">
          <img
            src="/images/wedding/wed-1.jpg"
            alt="wedding1"
            data-aos="fade-up"
            data-aos-duration="2000"
            className="h-[435px] md:h-[200px] lg:h-[485px] object-cover w-full rounded shadow-2xl"
          />
        </div>
        <div className="cursor-pointer">
          <img
            src="/images/wedding/wed-3.jpg"
            alt="wedding2"
            data-aos="fade-up"
            data-aos-duration="3000"
            className="h-[175px] md:h-[200px] lg:h-[485px]  object-cover w-full rounded shadow-2xl"
          />
        </div>
        <div className="cursor-pointer">
          <img
            src="/images/wedding/wed-8.jpg"
            alt="wedding3"
            data-aos="fade-up"
            data-aos-duration="3000"
            className="h-[435px] md:h-[200px] lg:h-[485px] object-cover w-full rounded shadow-2xl"
          />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="flex flex-col mt-4 md:mt-8"
      >
        <div className="inline-block text-center text-xl md:text-3xl font-satisfy">
          <p>Ade Irna Rohmatillah & Muhammad Ilyas Robiansyah</p>
        </div>
        <div className="inline-block text-center text-base md:text-lg font-medium font-raleway">
          <p>
            Putri Pertama Bapak Elon Dahlan & Ibu Uhe, Putra Kedua Bapak
            Syahromi & Ibu Anah
          </p>
        </div>
      </div>
    </div>
  );
};
export default SubHeader;
