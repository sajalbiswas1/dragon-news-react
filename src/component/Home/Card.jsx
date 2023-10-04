import { BsBookmark } from 'react-icons/bs';
import { CiShare2 } from 'react-icons/ci';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillStar } from 'react-icons/ai';

const Card = ({ aNews }) => {
    const { _id, author, image_url, title, details, rating, total_view, } = aNews;
    return (
        <div className='border rounded-t-lg mb-7'>
            <div className='flex justify-between items-center bg-[#F3F3F3] py-3 px-5 rounded-t-md'>
                <div className='flex items-center gap-4'>
                    <img className='w-10 rounded-full' src={author.img} alt="" />
                    <div>
                        <h3 className='text-base font-semibold text-[#403F3F]'>{author.name}</h3>
                        <p className='text-sm font-normal text-[#706F6F]'>{author.published_date}</p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <BsBookmark></BsBookmark>
                    <CiShare2></CiShare2>
                </div>
            </div>
            <div className='px-5 mt-3 '>
                <h3 className='text-xl font-bold text-[#403F3F] mb-5'>{title}</h3>
                <img className='mb-7' src={image_url} alt="" />
                <p className='text-base font-normal text-[#706F6F] pb-5'>{details.length > 200 ? details.slice(0, 200) : details} <span className='text-base font-semibold text-[#F75B5F]'> {details.length > 200 && <Link to={`/details/${_id}`}> See more...</Link>}</span> </p>
                <hr className='' />
            </div>

            <div className='flex items-center justify-between px-5'>
                <div className='flex items-center py-5'>
                    <AiFillStar className='w-6 h-6  text-[#FF8C47]'></AiFillStar>
                    <AiFillStar className='w-6 h-6  text-[#FF8C47]'></AiFillStar>
                    <AiFillStar className='w-6 h-6  text-[#FF8C47]'></AiFillStar>
                    <AiFillStar className='w-6 h-6  text-[#FF8C47]'></AiFillStar>
                    <AiFillStar className='w-6 h-6 mr-2  text-[#FF8C47]'></AiFillStar>
                    <p className='text-4 font-medium text-[#706F6F]'>{rating.number}</p>
                </div>
                <div className='flex items-center gap-3'>
                    <AiFillEye className='w-6 h-6 text-[#706F6F]'></AiFillEye>
                    <p className='text-4 font-medium text-[#706F6F]'>{total_view}</p>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    aNews: PropTypes.object
}
export default Card;