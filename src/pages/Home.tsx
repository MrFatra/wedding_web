import invitations from '../lib/data.json'
import NotFound from './404'
import Content from '../components/Content'

const Home = () => {
    const urlSearch = new URLSearchParams(window.location.search)
    const name = urlSearch.get('name')

    if (!name) return <NotFound />
    
    if (!invitations.some(people => people.name === name)) return (
        <div className="">You has not invited!</div>
    )
    return (
        <Content></Content>
    )
    
}

export default Home
