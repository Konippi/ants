import React, {FC, memo, useState} from "react";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { StoreType } from "../../../redux/store";
import { changeColor, ColorType, getColor, returnColor } from "../../../redux/utils/color";
import { BaseIconButton } from "../../atoms";

const Header: FC = memo(function Header() {
    const dispatch = useDispatch();
    const selector = useSelector((state: StoreType) => state);
    const color: ColorType = getColor(selector);

    const [isChange, setIsChange] = useState(true);

    const handleColor = () => {
        dispatch(isChange ? changeColor() : returnColor());
        setIsChange(!isChange);
    };
    
    return (
        <header>
            <div className="fixed w-full h-16 flex items-center justify-between top-0 px-7 z-50 Ants-black-cover"
                style={color.mainColor}
            >
                <div className="z-10">
                    <Link to="/" className="mr-5 hover:opacity-70">HOME</Link>
                    <Link to="/project" className="mr-5 hover:opacity-70">PROJECT</Link>
                    <Link to="/task" className="mr-5 hover:opacity-70">TASK</Link>
                    <Link to="/chat" className="mr-5 hover:opacity-70">CHAT</Link>
                </div>
                <div className="z-10">
                    <BaseIconButton
                        icon={<BsPersonCircle size={40} color={color.mainColor.color} className="opacity-60"/>}
                        size="auto"
                        handleClick={handleColor}
                    />
                </div>
            </div>
            <div className="h-16"></div>
        </header>
    );
});

export default Header;
