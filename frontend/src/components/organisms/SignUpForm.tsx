import { Alert } from "@mui/material";
import React, {ChangeEvent, FC, memo, useState} from "react";
import { CreateUserRequestBody } from "../../client";
import { userApi } from "../../client/clientWrapper";
import { BaseInput, BaseTextButton } from "../atoms";

const SignUpForm: FC = memo(function signUpForm() {
    const initialState: CreateUserRequestBody = {
        name: "",
        password: "",
        mail: ""
    };
    const [inputState, setInputState] = useState(initialState);
    const [retypePWD, setRetypePWD] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInputState({
            ...inputState,
            [event.target.name]: event.target.value
        });
    };
    const handleSubmit = () => {
        if(inputState.password !== retypePWD) {
            setErrorMessage("Password mismatch");
            return;
        }
        userApi.signupUsingPOST(inputState)
            .then(() => {
                userApi.loginUsingPOST(inputState.name as string, inputState.password as string)
                    .then(() => location.href = "/");
            })
            .catch(error => {
                if(error.response.status === 400) setErrorMessage(error.response.data.detail);
            });
    };

    return (
        <div className="flex flex-col items-center gap-6 w-[250px]">
            <h2 className=" text-lg mb-2 font-semibold">Sign Up</h2>
            {errorMessage !== "" && (
                <Alert className="w-full" severity="error">{errorMessage}</Alert>
            )}
            <BaseInput
                placeholder="UserName"
                value={inputState.name as string}
                name="name"
                onChange={changeInput}
            />
            <BaseInput
                placeholder="Email"
                value={inputState.mail as string}
                name="mail"
                onChange={changeInput}
            />
            <BaseInput
                placeholder="Password"
                value={inputState.password as string}
                name="password"
                type="password"
                onChange={changeInput}
            />
            <BaseInput
                placeholder="Retype Password"
                value={retypePWD}
                type="password"
                onChange={(e) => setRetypePWD(e.target.value)}
            />
            <BaseTextButton
                text="Sign Up"
                isDisable={
                    inputState.name === "" ||
                    inputState.mail === "" || 
                    inputState.password === "" ||
                    retypePWD === ""
                }
                handleClick={handleSubmit}
            />
        </div>
    );
});

export default SignUpForm;