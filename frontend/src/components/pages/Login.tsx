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
                <div className="flex rounded-xl py-16 px-16 border-2 border-solid flex-wrap my-14"
                    style={{borderColor: color.baseColor.color}}
                >
                    <h1 className="w-full text-center text-3xl mb-8 font-semibold">ANTS</h1>
                    <div className="flex w-full justify-center">
                        <SignUpForm/>
                        <div className="mx-16 h-full w-[2px] relative"
                            style={{backgroundColor: color.baseColor.color}}
                        />
                        <LoginForm/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;