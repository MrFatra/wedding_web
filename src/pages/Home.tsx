import { Banks, Content, Countdown, Header, Inputs, Maps, Modal, SubHeader } from '../components'
import invitations from '../lib/data.json'
import NotFound from './404'

const Home = () => {
    const urlSearch = new URLSearchParams(window.location.search)
    const name = urlSearch.get('name')

    if (!name) return <NotFound />
    
    if (!invitations.some(people => people.name === name)) return (
        <div className="">You has not invited!</div>
    )
    return (
        <div className='w-full flex flex-col bg-slate-100'>
            <Header />
            <SubHeader />
            <Content />
            <Countdown />
            <Maps />
            <Inputs name={name} />
            <Banks />
            <Modal />
        </div>
    )

}

export default Home
