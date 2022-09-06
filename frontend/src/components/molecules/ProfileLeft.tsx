import React , {FC} from "react";
import {BaseEditButton} from "../atoms";
import {BsPersonCircle} from "react-icons/bs";
import { useSelector } from "react-redux";
import { StoreType } from "../../redux/store";
import { ColorType, getColor } from "../../redux/utils/color";

const ProfileLeft: FC = () => {
    const selector = useSelector((state: StoreType) => state);
    const color: ColorType = getColor(selector);

    return (
        <div className="w-[45%] flex justify-center flex-col pl-10 rounded-3xl text-center">
            <div className="mb-4 my-0 mx-auto">
                <BsPersonCircle size={60} color={color.mainColor.color} className="opacity-60" />
            </div>
            <div className="mb-6">
                <p>Konishi Kyosuke</p>
            </div>
            <div>
                <BaseEditButton content="Edit Profile" />
            </div>
        </div>
    );
};

export default ProfileLeft;