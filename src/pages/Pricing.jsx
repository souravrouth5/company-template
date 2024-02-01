import { Price } from "../components/pricing/Price";
import { Faq } from "../components/pricing/Faq";
import { Breadcrumb } from "../components/common/Breadcrumb";

export function Pricing(){

    return (
        <>
        
        <Breadcrumb title="Pricing" />
        <Price />
        <Faq />
        
        </>
    )
}