const Banks = () => {
    return (
        <div className="w-full bg-slate-400 pb-20">
            <p className="text-header font-bold">Gifts</p>
            <div className="flex text-6xl font-coustard gap-3 justify-center items-center">"
                <p className="text-center font-playfair font-semibold text-xl">
                    Gabunglah dalam kebahagiaan kami! Untuk hadiah,
                    kami menerima transfer uang digital dibawah ini dengan senang hati.🥰
                    {/* Terima kasih atas dukungan Anda yang luar biasa! */}
                </p>
                "</div>
            <div className="mt-10 font-raleway ml-10 mb-10">
                <div className="rounded-2xl bg-white lg:w-1/4 relative" style={{ clipPath: 'polygon(0% 0%, 85% 0, 100% 18%, 100% 100%, 0% 100%)' }}>
                    <div className="px-5 pb-0 pt-3">
                        <img src="/images/banks/bni.png" alt="BNI" className="my-10" />
                        <div className="">
                            <p className="font-semibold text-xl">Masnun Muhaemin</p>
                            <p className="font-reddit font-bold text-2xl">00128 21944 21494</p>
                        </div>
                    </div>
                    <img src="/images/banks/wave-bni.svg" alt="" className="object-cover rounded-xl"/>
                </div>
            </div>
        </div >
    )
}

export default Banks