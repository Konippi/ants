import React , {FC, memo} from "react";
import {BaseEditButton} from "../atoms";
import {BsPersonCircle} from "react-icons/bs";
import { useSelector } from "react-redux";
import { StoreType } from "../../redux/store";
import { ColorType, getColor } from "../../redux/utils/color";
import { UserInfoModel } from "../../client/restAPI";

type Props = {
    userInfo: UserInfoModel;
    handleClick: () => void;
};

const ProfileLeft: FC<Props> = memo(function profileLeft(props: Props) {
    const selector = useSelector((state: StoreType) => state);
    const color: ColorType = getColor(selector);
    const {userInfo, handleClick} = props;

    return (
        <div className="w-[45%] flex justify-center flex-col pl-10 rounded-3xl text-center">
            <div className="mb-4 my-0 mx-auto">
                <BsPersonCircle size={60} color={color.mainColor.color} className="opacity-60" />
            </div>
            <div className="mb-6">
                <p>{userInfo.name}</p>
            </div>
            <div>
                <BaseEditButton
                    content="Edit Profile"
                    handleClick={handleClick}
                />
            </div>
        </div>
    );
});

export default ProfileLeft;