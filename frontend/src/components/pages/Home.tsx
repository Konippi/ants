import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../../redux/store";
import { changeSample, getSample } from "../../redux/utils/sample";
import { Profile, HomeProject } from "../organisms";

const Home: FC = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state: StoreType) => state);
    const text = getSample(selector);

    const handleClick = () => {
        dispatch(changeSample());
    };

    return (
        <>
            <Profile />
            <div className="border-t border-solid border-black my-8"></div>
            <HomeProject items={[0,1,2,3,4]} />
            <button className="text-center w-full mb-20 text-xl" onClick={handleClick}>{text ? "true" : "false"}</button>
        </>
    );
};

export default Home;