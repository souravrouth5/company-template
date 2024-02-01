import { Breadcrumb } from "../components/common/Breadcrumb";
import { Contact } from "../components/contact/Contact";
import { Map } from "../components/contact/Map";

export function Contactpg(){

    return (
        <>
        
        <Breadcrumb title="Contact" />
        <Map />
        <Contact />
        
        </>
    )
}