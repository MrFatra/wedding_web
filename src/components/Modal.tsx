import { useState } from "react"

export default function Modal() {
    const [open, setOpen] = useState(true)
    return (
        // backdrop
        <div
            //   onClick={onClose}
            className={`
        fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible bg-black/20" : "invisible"}
      `}
        >
            {/* modal */}
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
          bg-cover bg-center shadow p-6 transition-all w-full h-full flex flex-col items-center justify-center
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
        style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}
            >

                <p className="text-[3rem]">Incoming Invite</p>
                <p className="text-[2rem]">The Wedding Of</p>
                <div className="flex items-center flex-col mt-4 mb-5">
                    <p className="text-2xl">Joe and Sarah Doe</p>
                    <p>Senin, 2 Januari 2024</p>
                </div>
                <button onClick={() => setOpen(false)} className="bg-primary rounded-lg py-3 px-5 hover:scale-105 transition-all">Buka Undangan</button>
            </div>
        </div>
    )
}