import { Alert } from "@mui/material";
import React, {ChangeEvent, FC, memo, useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { EditUserRequestBody } from "../../../client";
import { userApi } from "../../../client/clientWrapper";
import { StoreType } from "../../../redux/store";
import { getLoginUserInfo } from "../../../redux/utils/loginUserInfo";
import { BaseModalInput, BaseTextButton } from "../../atoms";

const UserInputModalContent: FC = memo(function userInputModalContent() {
    const selector = useSelector((state: StoreType) => state);
    const loginUserInfo = getLoginUserInfo(selector);
    const [inputState, setInputState] = useState<EditUserRequestBody>({});
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        setInputState({
            name: loginUserInfo.name,
            mail: loginUserInfo.mail,
            githubUrl: loginUserInfo.githubUrl
        });
    }, [loginUserInfo.id]);

    const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInputState({
            ...inputState,
            [event.target.name]: event.target.value
        });
    };
    
    const handleEditProfile = () => {
        userApi.editUserUsingPUT(loginUserInfo.id as number, inputState)
            .then(() => location.reload())
            .catch(error => {
                if(error.response.status === 400) setErrorMessage(error.response.data.detail);
            });
    };

    return (
        <>
            {errorMessage !== "" && (
                <Alert className="w-full mt-4" severity="error">{errorMessage}</Alert>
            )}
            <BaseModalInput
                title="Name *"
                name="name"
                value={inputState.name}
                placeholder="ProjectName"
                onChange={changeInput}
            />
            <BaseModalInput
                title="Email *"
                name="mail"
                value={inputState.mail}
                placeholder="description"
                onChange={changeInput}
            />
            <BaseModalInput
                title="Github URL"
                name="githubUrl"
                value={inputState.githubUrl}
                placeholder="description"
                onChange={changeInput}
            />
            <div className="py-6">
                <BaseTextButton
                    text="Submit"
                    isDisable={inputState.name === "" || inputState.mail == ""}
                    handleClick={handleEditProfile}
                />
            </div>
        </>
    );
});

export default UserInputModalContent;