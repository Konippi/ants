import React, {ChangeEvent, FC} from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../../redux/store";
import { ColorType, getColor } from "../../redux/utils/color";

type Props = {
    title: string;
    name: string;
    value?: string;
    placeholder: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const BaseModalInput: FC<Props> = (props: Props) => {
    const {title, name, value, placeholder, onChange} = props;
    const selector = useSelector((state: StoreType) => state);
    const color: ColorType = getColor(selector);
    
    return (
        <div className="my-8">
            <h3 className="mb-3">{title}</h3>
            <input className="w-full outline outline-1 p-2 rounded-md"
                style={{...color.baseColor, outlineColor: color.baseColor.color}}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
};

export default BaseModalInput;