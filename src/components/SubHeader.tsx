const SubHeader = () => {
  return (
    <div className="bg-slate-300 rounded-lg mt-3">
        <div className="text-center mb-5">
            <h1 className="text-2xl font-medium font-['playfair']">Mempelai Pria & Wanita</h1>
        </div>
      <div className="grid grid-cols-3 gap-10 px-20">
        <div className="cursor-pointer">
          <img
            src="/images/gallery/image2.jpg"
            alt="makanan1"
            className="h-[250px] object-cover w-full rounded"
          />
        </div>
        <div className="cursor-pointer">
          <img
            src="/images/gallery/image1.jpg"
            alt="makanan2"
            className="h-[250px] object-cover w-full rounded"
          />
        </div>
        <div className="cursor-pointer">
          <img
            src="/images/gallery/image3.jpg"
            alt="makanan2"
            className="h-[250px] object-cover w-full rounded"
          />
        </div>
      </div>
      <div className="grid grid-cols-4">
        <div className="cols-span-2">
            <div className="bg-slate-500">
                <h1>Ade</h1>
            </div>
            <div className="bg-slate-500">
                <h1>Robi</h1>
            </div>
        </div>
      </div>
      <div className="cols-span-2">
        <div className="bg-slate-500">
            <p>Mempelai dari Orang tua</p>
        </div>
        <div className="bg-slate-500">

        </div>
      </div>
    </div>
  );
};
export default SubHeader;
