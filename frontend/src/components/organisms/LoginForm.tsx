import React, {FC, memo, useEffect, useState} from "react";
import { BaseInput, BaseTextButton } from "../atoms";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userApi } from "../../client/clientWrapper";

type Props = {
    onSubmit: () => void;
}

const LoginForm: FC<Props> = memo(function loginForm(props: Props) {
    
    const submit = () => {
        userApi.loginUsingPOST("choshi daiki", "pass")
            .then(res => {
                console.log(res);
                location.href = "/";
            })
            .catch(e => {
                console.log(e);
                
            });
    };
    return (
        <div className="flex flex-col items-center">
            <h2>Login</h2>
            <BaseInput
                placeholder="UserName"
                onChange={(e) => console.log(e)}
                value=""
            />
            <BaseInput
                placeholder="Password"
                onChange={(e) => console.log(e)}
                value=""
            />
            <BaseTextButton
                text="Login"
                handleClick={submit}
            />
        </div>
    );
});

export default LoginForm;