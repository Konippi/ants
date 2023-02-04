import React, {ChangeEvent, FC} from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../../redux/store";
import { ColorType, getColor } from "../../redux/utils/color";

type Props = {
    placeholder: string;
    value: string;
    name?: string;
    type?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const BaseInput: FC<Props> = (props: Props) => {
    const {placeholder, value, name, type, onChange} = props;
    const selector = useSelector((state: StoreType) => state);
    const color: ColorType = getColor(selector);
    
    return (
        <input className="w-full outline outline-1 p-2 rounded-md"
            style={{...color.baseColor, outlineColor: color.baseColor.color}}
            placeholder={placeholder}
            value={value}
            type={type}
            name={name}
            onChange={onChange}
        />
    );
};

export default BaseInput;