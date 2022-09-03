import React, {FC} from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../../redux/store";
import { ColorType, getColor } from "../../redux/utils/color";

type Props = {
    title: string;
    placeholder: string;
}

const BaseModalInput: FC<Props> = (props: Props) => {
    const {title, placeholder} = props;
    const selector = useSelector((state: StoreType) => state);
    const color: ColorType = getColor(selector);
    
    return (
        <div className="my-8">
            <h3 className="mb-3">{title}</h3>
            <input className="w-full outline outline-1 p-2 rounded-md"
                style={{...color.baseColor, outlineColor: color.baseColor.color}}
                placeholder={placeholder}
            />
        </div>
    );
};

export default BaseModalInput;