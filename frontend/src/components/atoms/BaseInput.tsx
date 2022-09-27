import React, {ChangeEvent, FC} from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../../redux/store";
import { ColorType, getColor } from "../../redux/utils/color";

type Props = {
    placeholder: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const BaseInput: FC<Props> = (props: Props) => {
    const {placeholder, value, onChange} = props;
    const selector = useSelector((state: StoreType) => state);
    const color: ColorType = getColor(selector);
    
    return (
        <div className="my-5">
            <input className="w-full outline outline-1 p-2 rounded-md"
                style={{...color.baseColor, outlineColor: color.baseColor.color}}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default BaseInput;