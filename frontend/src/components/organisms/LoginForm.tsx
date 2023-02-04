import React, {FC, memo, useState} from "react";
import { BaseInput, BaseTextButton } from "../atoms";
import { userApi } from "../../client/clientWrapper";
import { Alert } from "@mui/material";

const LoginForm: FC = memo(function loginForm() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const errorMessage = "Incorrect name or password";

    const handleSubmit = () => {
        userApi.loginUsingPOST(name, password)
            .then(() => location.href = "/")
            .catch(() => setIsError(true));
    };

    return (
        <div className="flex flex-col items-center gap-6 w-[250px]">
            <h2 className=" text-lg mb-2 font-semibold">Login</h2>
            {isError && (
                <Alert className="w-full" severity="error">{errorMessage}</Alert>
            )}
            <BaseInput
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <BaseInput
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <BaseTextButton
                text="Login"
                isDisable={name === "" || password === ""}
                handleClick={handleSubmit}
            />
        </div>
    );
});

export default LoginForm;