import React, {FC, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserInfoModel } from "../../client";
import { StoreType } from "../../redux/store";
import { ColorType, getColor } from "../../redux/utils/color";
import { fetchUserInfoByUserId, getUserInfo } from "../../redux/utils/userInfo";
import { userId } from "../layouts/Layout";
import { ProfileLeft } from "../molecules";
import { ProfileRight } from "../molecules";

const Profile: FC = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state: StoreType) => state);
    const color: ColorType = getColor(selector);
    const userInfo: UserInfoModel = getUserInfo(selector);

    useEffect(() => {
        dispatch(fetchUserInfoByUserId(userId));
    }, []);

    return (
        <div className="w-[600px] h-72 flex justify-between mt-10 mx-auto rounded-3xl"
            style={color.mainColor}
        >
            <ProfileLeft />
            <ProfileRight userInfo={userInfo} />
        </div>
    );
};

export default Profile;