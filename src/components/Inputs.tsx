import { useState } from "react"
import TextareaAutosize from "react-textarea-autosize"
import { FaCheck, FaCircle } from "react-icons/fa"

const Inputs = ({ name }: { name: string }) => {
    const [message, setMessage] = useState('')
    const [selectedPresence, setSelectedPresence] = useState('')

    const presences = [
        {
            detail: 'Ya, saya akan hadir',
        },
        {
            detail: 'Saya masih ragu',
        },
        {
            detail: 'Maaf, saya tidak bisa datang',
        }
    ]

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const phone = '628886030927'
        const template = `Hai, saya ${name} ingin konfirmasi pada undangan digital bahwa ${selectedPresence}. Saya ucapkan ${message}`
        const api = 'https://api.whatsapp.com/send?phone=' + phone + '&text=' + template
        window.location.href = api
    }

    return (
        <form onSubmit={handleSubmit}>
            <p className="text-header font-bold mb-4">Konfirmasi Kehadiran</p>
            <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center text-xl">
                    <p className="">Nama: {name}</p>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                    <p className="text-xl">Pesan Ucapan:</p>
                    <TextareaAutosize onChange={(event) => setMessage(event.target.value)} minRows={3} className="resize-none border rounded-lg p-2" required />
                </div>
                <div className="flex flex-col gap-3 my-4" >
                    {
                        presences.map((presence, index) => (
                            <div key={index} className="flex gap-2 items-center">
                                {
                                    selectedPresence === presence.detail
                                        ? <FaCheck size={18} className="text-green-500" />
                                        : <FaCircle size={18} className="text-gray-400 cursor-pointer hover:text-gray-600 transition duration-300" onClick={() => setSelectedPresence(presence.detail)} />
                                }
                                <label htmlFor={presence.detail} className="cursor-pointer" onClick={() => setSelectedPresence(presence.detail)}>{presence.detail}</label>
                            </div>
                        ))
                    }
                </div>
                <button type="submit" className="bg-black rounded-lg p-2 text-white flex items-center justify-center disabled:bg-opacity-50" disabled={!message.length || !selectedPresence.length}>Konfirmasi</button>
            </div>
        </form>
    )
}

export default Inputs
