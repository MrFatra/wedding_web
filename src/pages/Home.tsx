import invitations from '../lib/data.json'
import NotFound from './404'

const Home = () => {
    const urlSearch = new URLSearchParams(window.location.search)
    const name = urlSearch.get('name')

    if (!name) return <NotFound />

    if (!invitations.some(people => people.name === name)) return <NotFound />

    return (
        <div className=""></div>
    )
    
}

export default Home
