import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const SliderBar = () => {
    return (
        <div className="flex items-center p-4 bg-[#F3F3F3] mt-8">
            <button className="px-6 py-2 text-xl font-medium text-white  bg-[#D72050]">Latest</button>
            <p className="flex gap-6">
                <Marquee>
                    <Link><p className="mr-7 text-lg font-semibold">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p></Link>
                    <Link><p className="mr-7 text-lg font-semibold">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p></Link>
                    <Link><p className="mr-7 text-lg font-semibold">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p></Link>
                                
                </Marquee>

            </p>
        </div>
    );
};

export default SliderBar;