import { Aboutus } from "../components/about/Aboutus";
import { Skills } from "../components/about/Skills";
import { Team } from "../components/about/Team";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { Client } from "../components/home/Client";

export function About(){

    return (

        <>
        
        <Breadcrumb title="About" />
        <Aboutus />
        <Team />
        <Skills />
        <Client />
        
        </>
    )
}