import {Link} from 'react-router-dom'

export default function Header(){
    return(
        <nav>
            <Link to='/'>
                <i class="fa-solid fa-house-chimney-window fa-2xl"></i>
            </Link>
        </nav>
    )
}