import React, { FC } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { UserInfoModel } from "../../client";
import { StoreType } from "../../redux/store";
import { ColorType, getColor } from "../../redux/utils/color";
import { getLoginUserInfo } from "../../redux/utils/loginUserInfo";
import { BaseModal, ProfileLeft } from "../molecules";
import { ProfileRight } from "../molecules";
import UserInputModalContent from "./modalInnerContents/UserInputModalContent";

const Profile: FC = () => {
    const selector = useSelector((state: StoreType) => state);
    const color: ColorType = getColor(selector);
    const loginUserInfo: UserInfoModel = getLoginUserInfo(selector);

    const [isOpenedModal, setIsOpenedModal] = useState(false);

    // 編集モーダル開く
    const handleOpenModal = () => {
        setIsOpenedModal(true);
    };
    // 編集モーダル閉じる
    const handleCloseModal = () => {
        setIsOpenedModal(false);
    };

    return (
        <>
            <div className="w-[600px] h-72 flex justify-between mt-10 mx-auto rounded-3xl"
                style={color.mainColor}
            >
                <ProfileLeft
                    userInfo={loginUserInfo}
                    handleClick={handleOpenModal}
                />
                <ProfileRight userInfo={loginUserInfo} />
            </div>
            {isOpenedModal && (
                <BaseModal
                    title="Edit Profile"
                    content={<UserInputModalContent />}
                    handleClose={handleCloseModal}
                />
            )}
        </>
    );
};

export default Profile;