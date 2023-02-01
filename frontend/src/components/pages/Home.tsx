import React, { FC } from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../../redux/store";
import { getColor } from "../../redux/utils/color";
import { Profile, HomeProject } from "../organisms";

const Home: FC = () => {
    const selector = useSelector((state: StoreType) => state);
    const color = getColor(selector);

    return (
        <div className="flex flex-col items-center">
            <Profile />
            <div className="border-t border-solid my-8"
                style={{borderColor: color.baseColor.color}}
            >
            </div>
            <HomeProject />
        </div>
    );
};

export default Home;