import React, { FC } from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../../redux/store";
import { getColor } from "../../redux/utils/color";
import { LoginForm, SignUpForm } from "../organisms";

const Login: FC = () => {
    const selector = useSelector((state: StoreType) => state);
    const color = getColor(selector);

    return (
        <>
            <div className="flex justify-center items-center"
                style={{minHeight: "calc(100vh - 4rem)"}}
            >
                <div className="flex rounded-xl py-16 px-36 border-2 border-solid flex-wrap"
                    style={{borderColor: color.baseColor.color}}
                >
                    <h1 className="w-full text-center">ANTS</h1>
                    <div className="flex w-full justify-center">
                        <SignUpForm
                            onSubmit={() => console.log("signUp")}
                        />
                        <div className="mx-16 h-full w-[2px] relative"
                            style={{backgroundColor: color.baseColor.color}}
                        />
                        <LoginForm
                            onSubmit={() => console.log("login")}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;