import { Outlet } from "react-router-dom";
import LoginBar from "../LoginBar";


const UserFrom = () => {
    return (
        <div className=" pb-40 bg-[#F3F3F3]">
            <div className="max-w-6xl m-auto">
                <LoginBar></LoginBar>
                <div className="mt-12">
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default UserFrom;