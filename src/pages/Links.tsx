import invitations from '../lib/data.json'
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    invitations.map((item, index) => {
      return (
        <div className="">
          <Link to={`/invite?name=${item.name}`} key={index}>Undangan untuk {item.name}</Link>
        </div>
      )
    })
  )
}

export default Links