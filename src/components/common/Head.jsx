import { Link } from "react-router-dom";

export function Head() {

    return (

        <>

            {/* <!-- ======= Header ======= --> */}
            <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center">

                    {/* <h1 class="logo mr-auto"><Link to="index.html"><img class="hello" src="./assets/img/logo.png" /></Link></h1> */}
                    {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                    {/* <!-- <Link to="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></Link>--> */}

                    <nav class="nav-menu d-none d-lg-block">
                        <ul>
                            <li class="active"><Link to="/">Home</Link></li>

                            <li class="drop-down"><Link to="">About</Link>
                                <ul>
                                    <li><Link to="about">About Us</Link></li>
                                    <li><Link to="team">Team</Link></li>
                                    <li><Link to="testimonials">Testimonials</Link></li>
                                    <li class="drop-down"><Link to="#">Deep Drop Down</Link>
                                        <ul>
                                            <li><Link to="#">Deep Drop Down 1</Link></li>
                                            <li><Link to="#">Deep Drop Down 2</Link></li>
                                            <li><Link to="#">Deep Drop Down 3</Link></li>
                                            <li><Link to="#">Deep Drop Down 4</Link></li>
                                            <li><Link to="#">Deep Drop Down 5</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li><Link to="services">Services</Link></li>
                            <li><Link to="portfolio">Portfolio</Link></li>
                            <li><Link to="pricing">Pricing</Link></li>
                            <li><Link to="blog">Blog</Link></li>
                            <li><Link to="contact">Contact</Link></li>

                        </ul>
                    </nav>
                    {/* <!-- .nav-menu --> */}

                    <div class="header-social-links">
                        <a href="#" class="twitter"><i class="icofont-twitter"></i></a>
                        <a href="#" class="facebook"><i class="icofont-facebook"></i></a>
                        <a href="#" class="instagram"><i class="icofont-instagram"></i></a>
                        <a href="#" class="linkedin"><i class="icofont-linkedin"></i></a>
                    </div>

                </div>
            </header>
            {/* <!-- End Header --> */}

        </>
    )
}