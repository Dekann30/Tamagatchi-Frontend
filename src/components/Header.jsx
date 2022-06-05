import {Link} from 'react-router-dom'

export default function Header(){
    return(
        <nav>
            <Link to='/'>
                <h1>Home</h1>
            </Link>
        </nav>
    )
}