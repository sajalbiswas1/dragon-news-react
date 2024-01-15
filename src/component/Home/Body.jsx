import { useEffect, useState } from "react";
import Card from "./Card";


const Body = () => {
    const [news, setNews]=useState([]);
    useEffect(()=>{
        fetch('news.json')
        .then(res => res.json())
        .then(data =>setNews(data))
    },[])
    return (
        <div className="col-span-2">
            <h3 className="text-xl font-semibold mb-5">Dragon News Home</h3>
            <div>
                {
                    news.map(aNews=><Card aNews={aNews} key={aNews._id}></Card>)
                }
            </div>
        </div>
    );
};

export default Body;