import React, {FC, memo, useEffect, useState} from "react";
import { BaseInput, BaseTextButton } from "../atoms";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userApi } from "../../client/clientWrapper";

type Props = {
    onSubmit: () => void;
}

const LoginForm: FC<Props> = memo(function loginForm(props: Props) {
    const [a, setA] = useState(false);

    const [button, setButton] = useState<HTMLElement | null>();
    const navigate = useNavigate();
    console.log(button);
    
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
    useEffect(() => {
        console.log("sssa");
        setButton(document.getElementById("form"));
    },[]);
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
            <form id="form" action="http://localhost:8080/api/v1/user/login" method="post">
                <input type="text" name="username" placeholder="Username"/>
                <input type="password" name="password" placeholder="Password"/>
                <button  id="submit" type="submit" value="Log in" />
            </form>
        </div>
    );
});

export default LoginForm;