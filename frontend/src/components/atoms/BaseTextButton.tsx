import React, {FC} from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../../redux/store";
import { ColorType, getColor } from "../../redux/utils/color";

type Props = {
    text: string;
    handleClick: () => void;
}

const BaseTextButton: FC<Props> = (props: Props) => {
    const {text, handleClick} = props;
    const selector = useSelector((state: StoreType) => state);
    const color: ColorType = getColor(selector);
    
    return (
        <button className="hover:opacity-80 rounded-lg px-5 py-4 text-center w-full"
            style={color.mainColor}
            onClick={handleClick}
        >{text}</button>
    );
};

export default BaseTextButton;