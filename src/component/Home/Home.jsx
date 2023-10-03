import Header from "../Header/Header";
import LoginBar from "../LoginBar";
import SliderBar from "../SliderBar";
import Body from "./Body";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";


const Home = () => {
    return (
        <div className="max-w-6xl m-auto bg-[#FFF]">
            <Header></Header>
            <SliderBar></SliderBar>
            <LoginBar></LoginBar>
            <div className="grid grid-cols-4 gap-6 mt-20">
                <LeftNav></LeftNav>
                <Body></Body>
                <RightNav></RightNav>
            </div>
        </div>
    );
};

export default Home;