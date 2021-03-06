// import './Navbar.css';
import { Link } from 'react-router-dom'

export default function HeaderHome() {
    return (
        <>
            <header class="header">
                <div class="container header__container">
                    <div class="header__logo">
                        <img class="header__img" src="https://image.ibb.co/kcVou6/path3000.png" alt="" />
                        <h1 class="header__title">
                            Bricks
                            <span class="header__light">
                                .io
                                </span>
                        </h1>
                    </div>
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <div class="header__menu">
                        <nav id="navbar" class="header__nav collapse">
                            <ul class="header__elenco">
                                <li class="header__el">
                                    <Link to='/' class="header__link">
                                        Home
                                        </Link>
                                </li>
                                <li class="header__el">
                                    <Link to='/' class="header__link">
                                        Pricing
                                        </Link>
                                </li>
                                <li class="header__el"><Link to='/' class="header__link">
                                    Success stories
                                    </Link>
                                </li>
                                <li class="header__el"><Link to='/' class="header__link">
                                    Blog
                                    </Link>
                                </li>
                                <li class="header__el"><Link to='/' class="header__link">
                                    Contact us
                                    </Link>
                                </li>
                                <li class="header__el header__el--blue">
                                    <Link to='/' class="btn btn--white">
                                    Sign In →
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

