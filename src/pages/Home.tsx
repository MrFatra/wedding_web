import invitations from '../lib/data.json'
import NotFound from './404'
import SubHeader from '../components/SubHeader'

const Home = () => {
    const urlSearch = new URLSearchParams(window.location.search)
    const name = urlSearch.get('name')

    if (!name) return <NotFound />
    
    if (!invitations.some(people => people.name === name)) return (
        <div className="">You has not invited!</div>
    )
    return (
        <SubHeader></SubHeader>
    )
    
}

export default Home
