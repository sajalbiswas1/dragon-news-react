import moment from 'moment/moment';
import logo from '../../assets/logo.png'


const Header = () => {
    return (
        <div className='text-center mt-12'>
            <img className='m-auto' src={logo} alt="Logo Dragon News" />
            <h3 className='text-lg font-normal text-[#706F6F] mt-5'>Journalism Without Fear or Favour</h3>
            <p className='text-xl mt-2 font-medium text-[#403F3F]'>{moment().format("dddd, MMMM DD, YYYY")}</p>
        </div>
    );
};

export default Header;