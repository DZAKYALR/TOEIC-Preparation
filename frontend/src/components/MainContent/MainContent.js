// import './Navbar.css';
import { Link } from 'react-router-dom'

export default function MainContent() {
    return (
        <>
            <div class="sect sect--padding-top">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="site">
                                <h1 class="site__title">Fast paced way to grow your business</h1>
                                <h2 class="site__subtitle">Manage analytics like a boss</h2>
                                <div class="site__box-link">
                                    <Link to='/' class="btn btn--width" href="">Pricing</Link>
                                    <Link to='/' class="btn btn--revert btn--width" href="">Contact</Link>
                                </div>
                                <img class="site__img" src="https://image.ibb.co/c7grYb/image3015.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

