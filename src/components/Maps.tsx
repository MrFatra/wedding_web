const Maps = () => {
  return (
    <div className="relative w-full px-4 md:px-8 pb-8 bg-orange-50 py-3 md:pt-1 lg:pt-1">
      <div className="text-header font-bold mb-0 text-gray-500">Lokasi</div>
      <div className=" h-[1.5px] bg-slate-500 rounded-full mb-5" />
      <div className=" h-[1.5px] rounded-full mb-5" />
      <div className="block sm:grid md:grid grid-cols-2 gap-5 items-center">
        <div className="flex items-center flex-col">
          <p className="text-2xl font-bold mb-5 text-gray-500">Alamat Lengkap: </p>
          <p className="font-coustard font-thin text-lg mb-7 text-center border-[3px] border-grack py-2 px-4 border-dashed ">Dusun Kliwon, RT/RW 04/02, Desa Cigarukgak, Kecamatan Ciawigebang, Kabupaten Kuningan</p>
          <img src="/images/maps/arrow.svg" alt="" className="hidden md:block md:w-96 md:h-80"/>
        </div>
        <div className="h-64 lg:h-full md:h-full" data-aos="flip-right" data-aos-offset="600">
          <iframe className="shadow-lg drop-shadow-xl w-full h-full" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3960.5469473198577!2d108.60043187499672!3d-6.944620093055486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTYnNDAuNiJTIDEwOMKwMzYnMTAuOCJF!5e0!3m2!1sen!2sid!4v1712641770641!5m2!1sen!2sid" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Maps