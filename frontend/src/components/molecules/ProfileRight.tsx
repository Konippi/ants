import React, {FC} from "react";
import {ProfileDetail} from "../atoms";
import {BsEnvelope, BsGithub, BsKey} from "react-icons/bs";
import { useSelector } from "react-redux";
import { StoreType } from "../../redux/store";
import { ColorType, getColor } from "../../redux/utils/color";

const ProfileRight: FC = () => {
    const selector = useSelector((state: StoreType) => state);
    const color: ColorType = getColor(selector);
    const iconColor = color.mainColor.color;

    return (
        <div className="w-[55%] flex justify-center flex-col rounded-3xl">
            <div className="mb-4">
                <ProfileDetail
                    icon={<BsEnvelope size={24} color={iconColor} className="opacity-60" />}
                    content="sample@sample.co.jp"
                />
            </div>
            <div className="mb-4">
                <ProfileDetail
                    icon={<BsGithub size={24} color={iconColor} className="opacity-60" />}
                    content="sample"
                />
            </div>
            <div>
                <ProfileDetail
                    icon={<BsKey size={24} color={iconColor} className="opacity-60" />}
                    content="xxxxx"
                />
            </div>
        </div>
    );
};

export default ProfileRight;