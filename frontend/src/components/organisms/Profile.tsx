import React, {FC} from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../../redux/store";
import { ColorType, getColor } from "../../redux/utils/color";
import { ProfileLeft } from "../molecules";
import { ProfileRight } from "../molecules";

const Profile: FC = () => {
    const selector = useSelector((state: StoreType) => state);
    const color: ColorType = getColor(selector);

    return (
        <div className="w-[600px] h-72 flex justify-between mt-10 mx-auto rounded-3xl"
            style={color.mainColor}
        >
            <ProfileLeft />
            <ProfileRight />
        </div>
    );
};

export default Profile;