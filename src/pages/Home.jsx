import { About } from '../components/home/About';
import { Client } from '../components/home/Client';
import { Hero } from '../components/home/Hero';
import { Portfolio } from '../components/home/Portfolio';
import { Service } from '../components/home/Service';

export function Home(){

    return(
        <>
        <main id='main'>
        <Hero />
        <About />
        <Service />
        <Portfolio />
        <Client />
        </main>
        
        </>
    )
}