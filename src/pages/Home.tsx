import invitations from '../lib/data.json'

const Home = () => {
    const urlSearch = new URLSearchParams(window.location.search)
    const name = urlSearch.get('name')

    if (!name) return (
        <div className="container mx-auto px-4 py-8">name is null</div>
    )
    if (!invitations.some(people => people.name === name)) return (
        <div className="">You has not invited!</div>
    )
    return (
        <div className="">{name}</div>
    )
}

export default Home