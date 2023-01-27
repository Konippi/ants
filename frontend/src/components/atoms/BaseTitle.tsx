import React, {FC} from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../../redux/store";
import { ColorType, getColor } from "../../redux/utils/color";

type Props = {
    title: string;
}

const BaseTitle: FC<Props> = (props: Props) => {
    const {title} = props;
    const selector = useSelector((state: StoreType) => state);
    const color: ColorType = getColor(selector);
    
    return (
        <h2 className="px-4 py-1.5 rounded-xl leading-none w-fit text-xs h-fit"
            style={color.mainColor}
        >
            {title}
        </h2>
    );
};

export default BaseTitle;