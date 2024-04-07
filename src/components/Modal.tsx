import { useState } from "react"

export default function Modal() {
    const [open, setOpen] = useState(true)
    return (
        // backdrop
        //  modal 
        <div
            onClick={(e) => e.stopPropagation()
            }
            className={`text-white
          bg-black bg-[image:url('/images/wedding/stock-1.jpg')] bg-no-repeat shadow p-6 transition-all duration-500 w-full h-full flex flex-col items-center justify-center
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
        >
            <p className="text-6xl font-bold">Incoming Invite</p>
            <p className="text-[2rem] mt-5">The Wedding Of</p>
            <div className="flex items-center flex-col mt-4 mb-5 font-bold">
                <p className="font-satisfy text-8xl">Joe & Sarah Doe</p>
                <p className="text-2xl mt-5">Senin, 2 Januari 2024</p>
            </div>
            <button onClick={() => setOpen(false)} className="bg-white rounded-lg py-3 px-5 hover:scale-105 transition-all text-black font-semibold">Buka Undangan</button>
        </div>
    )
}