import { useEffect, useState } from 'react'
import { Banks, Content, Countdown, Header, Inputs, Maps, Modal, Quotes, SubHeader } from '../components'
import invitations from '../lib/data.json'
import NotFound from './404'
import { FaPause, FaPlay } from 'react-icons/fa6'

const Home = () => {
    const urlSearch = new URLSearchParams(window.location.search)
    const name = urlSearch.get('name')
    const [audio] = useState(new Audio('audio/intro.mp3'))
    const [toogle, setToogle] = useState(true)

    const handleToogle = () => {
        setToogle(!toogle)
        if (!toogle) {
            audio.pause()
        } else {
            audio.play()
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        audio.loop = true
        if (!toogle) {
            audio.pause()
        } else {
            audio.play()
        }
    }, [toogle, audio])

    if (!name) return <NotFound />

    if (!invitations.some(people => people.name === name)) return <NotFound />

    return (
        <div className='relative flex flex-col bg-orange-50'>
            <div className="">
                <Header />
                <SubHeader />
                <Content />
                <Countdown />
                <Maps />
                <Inputs name={name} />
                <Quotes />
                <Banks />
                <div className="fixed top-5 right-8 bg-[#ffcdab] p-2 cursor-pointer rounded-lg" onClick={handleToogle}>
                    {
                        toogle
                            ?
                            <FaPause size={30} color='#B67352' />
                            :
                            <FaPlay size={30} color='#B67352' />
                    }
                </div>
            </div>
            <Modal audio={audio} />
        </div>
    )

}

export default Home
