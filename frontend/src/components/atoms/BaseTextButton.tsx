import React, {FC} from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../../redux/store";
import { ColorType, getColor } from "../../redux/utils/color";

type Props = {
    text: string;
    width?: string;
    isDisable?: boolean;
    handleClick: () => void;
}

const BaseTextButton: FC<Props> = (props: Props) => {
    const {text, width, handleClick, isDisable} = props;
    const selector = useSelector((state: StoreType) => state);
    const color: ColorType = getColor(selector);
    
    return (
        <button className={`${isDisable ? "opacity-40" : "hover:opacity-80"} rounded-lg px-5 py-3 text-center w-full`}
            style={{...color.mainColor, width:width}}
            onClick={handleClick}
            disabled={isDisable}
        >{text}</button>
    );
};

export default BaseTextButton;