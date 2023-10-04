import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftNav = () => {
    const [categories, setCategoric]=useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res =>res.json())
        .then(data=>setCategoric(data))
    },[])
    return (
        <div className="col-span-1 border">
            <h3 className="text-xl font-semibold mb-5">All Category</h3>
            <div className="">
                {
                    categories.map(categori => <Link key={categori.id}><button className="focus:text-[#403F3F] text-left focus:font-semibold pl-12 py-4 rounded-md focus:bg-[#E7E7E7] hover:bg-[#E7E7E7] w-full text-[#9F9F9F] " >{categori.name}</button></Link>)
                }
            </div>
        </div>
    );
};

export default LeftNav;