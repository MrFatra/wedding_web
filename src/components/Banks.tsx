import { useEffect, useState } from "react";
import { BiCopyAlt, BiCheck } from "react-icons/bi"

const Banks = () => {
    const [wiggle1, setWiggle1] = useState(false)
    const [wiggle2, setWiggle2] = useState(false)
    const debitCard = '426601037353531'

    const copyToClipboard = (content: any, setWiggle: any, wiggle: boolean) => {
        setWiggle(!wiggle)
        const el = document.createElement('textarea');
        el.value = content;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    useEffect(() => {
        if (wiggle1 === true) setTimeout(() => setWiggle1(false), 800)
        if (wiggle2 === true) setTimeout(() => setWiggle2(false), 800)
    }, [wiggle1, wiggle2])


    return (
        <div className="w-full bg-orange-100 pb-20 px-4 md:px-8 bg-no-repeat bg-bottom bg-contain" style={{ backgroundImage: "url('/images/banks/wave-bank.svg')" }}>
            <div className="flex flex-col">
                <p className="text-header font-bold text-gray-500">Gifts</p>
                <div className="h-[1.5px] bg-slate-500 rounded-full mb-5" />
            </div>
            <p className="text-center font-coustard mb-10 mt-5 text-lg md:text-xl lg:text-2xl text-gray-500">
                Gabunglah dalam kebahagiaan kami! Untuk hadiah, kami menerima transfer uang digital di bawah ini dengan senang hati.🥰
            </p>
            {/* <div className="block sm:flex md:flex gap-10 lg:gap-28 sm:gap-10 px-10 lg:px-12 justify-center"> */}
            <div className="flex justify-center">
                <div className="font-raleway w-full md:w-1/2 mb-10 sm:mb-0 md:mb-0">
                    <div className="rounded-2xl bg-white p-4 md:p-8 shadow-2xl" data-aos="fade-up" data-aos-offset="500" data-aos-duration="500">
                        <img src="/images/banks/bri.svg" alt="BNI" className="my-5 md:my-10 h-52 object-contain" />
                        <div className="w-full h-1 bg-slate-500 rounded-full mb-5" />
                        <div className="pb-4">
                            <p className="font-semibold text-lg md:text-xl">Ade Rohmatillah</p>
                            <div className="flex justify-between items-center md:gap-10 gap-5">
                                <p className="font-reddit font-bold text-lg md:text-base lg:text-2xl">{debitCard}</p>
                                <div className={`${wiggle1 ? 'animate-wiggle' : 'animate-check'} cursor-pointer w-7 h-7`}>
                                    {
                                        wiggle1
                                            ?
                                            <BiCheck color="green" size={25} onClick={() => copyToClipboard(debitCard, setWiggle1, wiggle1)} />
                                            :
                                            <BiCopyAlt color="gray" size={25} onClick={() => copyToClipboard(debitCard, setWiggle1, wiggle1)} />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banks