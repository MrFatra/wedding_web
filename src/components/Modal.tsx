import { useEffect, useState } from "react"
import { FaArrowRight } from "react-icons/fa6"

export default function Modal() {
    const [open, setOpen] = useState(true)

    useEffect(() => {
        if (open) document.documentElement.classList.add('overflow-hidden');
        else document.documentElement.classList.remove('overflow-hidden');
        return () => {
            document.documentElement.classList.remove('overflow-hidden');
        };
    }, [open, setOpen])

    return (
        <div className={`fixed inset-0 transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={`text-[#66474a] marker:bg-black bg-[image:url('/images/wedding/modal-bg-port.jpg')] md:bg-[image:url('/images/wedding/modal-bg-land.jpg')] bg-cover bg-no-repeat shadow p-6 transition-all duration-500 w-full h-full ${open ? "opacity-100" : "scale-125 opacity-0"}`}>
                <div className="relative md:absolute md:right-0 top-0 px-0 lg:px-20 h-full text-center flex flex-col items-center justify-center">
                    <div className="flex gap-10 items-center justify-center">
                        <svg data-aos="fade" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 400"><path d="M69.50672912597656,143.4977569580078C105.97907765706381,159.1928253173828,210.76234181722003,236.6218287150065,288.3408203125,237.6681671142578C365.91929880777997,238.71450551350912,457.84755452473956,148.72945149739584,534.9776000976562,149.77578735351562C612.1076456705729,150.8221232096354,715.097178141276,228.25111643473306,751.12109375,243.94618225097656" fill="none" stroke-width="25" stroke="#66474a" stroke-linecap="round" transform="matrix(1.0708588703410085,-0.15913510008938964,-0.5771679777921226,0.846380376552997,82.7357366602252,95.0548426029116)"></path><defs><linearGradient id="SvgjsLinearGradient1002"><stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop><stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop></linearGradient></defs></svg>
                        <p className="md:text-6xl font-bold sm:text-6xl text-4xl" data-aos="fade">Incoming Invite</p>
                        <svg data-aos="fade" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 400"><path d="M69.50672912597656,143.4977569580078C105.97907765706381,159.1928253173828,210.76234181722003,236.6218287150065,288.3408203125,237.6681671142578C365.91929880777997,238.71450551350912,457.84755452473956,148.72945149739584,534.9776000976562,149.77578735351562C612.1076456705729,150.8221232096354,715.097178141276,228.25111643473306,751.12109375,243.94618225097656" fill="none" stroke-width="25" stroke="#66474a" stroke-linecap="round" transform="matrix(1.0708588703410085,-0.15913510008938964,-0.5771679777921226,0.846380376552997,82.7357366602252,95.0548426029116)"></path><defs><linearGradient id="SvgjsLinearGradient1002"><stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop><stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop></linearGradient></defs></svg>
                    </div>
                    <p className="text-[1.5rem] mt-5 font-semibold sm:text-4xl md:text-4xl" data-aos="fade" data-aos-delay="500">The Wedding Of</p>
                    <div className="flex items-center flex-col mt-4 mb-5 font-bold">
                        <div className="font-satisfy text-3xl md:text-5xl lg:text-5xl mt-10 mb-1 flex flex-col gap-5">
                            <p data-aos="fade" data-aos-delay="700">Ade Irna Rohmatillah</p>
                            <p data-aos="fade" data-aos-delay="950">&</p>
                            <p data-aos="fade" data-aos-delay="1200">Muhammad Ilyas Robiansyah</p>
                        </div>
                        <p data-aos="fade" data-aos-delay="1400" className="text-[1.2rem] font-semibold sm:text-2xl md:text-2xl mt-5">Kamis, 18 April 2024</p>
                    </div>
                    <div className="transition-all hover:scale-110 group">
                        <button data-aos="fade" data-aos-delay="1600" data-aos-offset="-100" onClick={() => setOpen(false)} className="bg-[#B2533E] shadow-[#66474a] shadow-lg rounded-lg py-3 px-5 text-white font-semibold flex items-center justify-center gap-2 group">Buka Undangan <FaArrowRight className="transition-transform duration-300 transform group-hover:translate-x-2" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}