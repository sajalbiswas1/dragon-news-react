import { useEffect, useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { Link } from "react-router-dom";
import image1 from "../../assets/1.png"
import image2 from "../../assets/1.png"
import image3 from "../../assets/1.png"


const LeftNav = () => {
    const [categories, setCategoric]=useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res =>res.json())
        .then(data=>setCategoric(data))
    },[])
    return (
        <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-5">All Category</h3>
            <div className="mb-5">
                {
                    categories.map(categori => <Link key={categori.id}><button className="focus:text-[#403F3F] text-left focus:font-semibold pl-12 py-4 rounded-md focus:bg-[#E7E7E7] hover:bg-[#E7E7E7] w-full text-[#9F9F9F] " >{categori.name}</button></Link>)
                }
            </div>
            <div className="mb-4">
            <img src={image1} alt="" />
                <h3 className="py-5 text-xl font-semibold text-[#403F3F]">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
                <div className="flex">
                    <p className="text-base font-medium mr-5 text-[#403F3F]">Sports</p>
                    <CiCalendar className="h-6 w-6 mr-2 text-[#9F9F9F]"></CiCalendar>
                    <p className="text-base font-medium text-[#9F9F9F]">Jan 4, 2022</p>
                </div>
            </div>
            <div className="mb-4">
            <img src={image2} alt="" />
                <h3 className="py-5 text-xl font-semibold text-[#403F3F]">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
                <div className="flex">
                    <p className="text-base font-medium mr-5 text-[#403F3F]">Sports</p>
                    <CiCalendar className="h-6 w-6 mr-2 text-[#9F9F9F]"></CiCalendar>
                    <p className="text-base font-medium text-[#9F9F9F]">Jan 4, 2022</p>
                </div>
            </div>
            <div className="mb-4">
            <img src={image3} alt="" />
                <h3 className="py-5 text-xl font-semibold text-[#403F3F]">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
                <div className="flex">
                    <p className="text-base font-medium mr-5 text-[#403F3F]">Sports</p>
                    <CiCalendar className="h-6 w-6 mr-2 text-[#9F9F9F]"></CiCalendar>
                    <p className="text-base font-medium text-[#9F9F9F]">Jan 4, 2022</p>
                </div>
            </div>
        </div>
    );
};

export default LeftNav;