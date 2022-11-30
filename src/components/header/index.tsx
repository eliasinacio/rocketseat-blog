import Navigation from '../navigation';
import Search from '../search';

import logo from '../../assets/logo.svg'

import './styles.scss'

function Header () {
    return (
        <header>
            <a href='/'> 
                <img src={logo} alt="" />
            </a>

            <Navigation />
            <Search />
        </header>
    )
}

export default Header;