import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Header/Header";
import { AiOutlineArrowLeft } from "react-icons/ai";
import GoogleSocial from "../Home/GoogleSocial";

const NewsDetails = () => {
    const data = useLoaderData()
    const {id} = useParams();
    const news = data.find(bNews => bNews._id === id)

    return (
        <div className="max-w-6xl m-auto">
            <Header></Header>
            <div className="grid grid-cols-4 gap-6 mt-7">
                <div className="col-span-3 ">
                    <h3 className="text-xl font-semibold text-[#403F3F] mb-5">Dragon News</h3>
                    <div className="p-7 border">
                    <img className="w-full" src={news.image_url} alt="" />
                    <h3 className="text-2xl font-bold text-[#403F3F] mt-6 mb-2">{news.title}</h3>
                    <p className="text-base font-normal text-[#706F6F] mb-8">{news.details}</p>
                   <Link to={'/'}><button className="flex items-center text-xl font-medium px-6 py-2 text-white bg-[#D72050]"><AiOutlineArrowLeft></AiOutlineArrowLeft> All news in this category</button></Link>
                    </div>
                </div>
                <GoogleSocial></GoogleSocial>
            </div>
        </div>
    );
};

export default NewsDetails;