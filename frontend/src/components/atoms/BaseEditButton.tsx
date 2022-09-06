import React, {FC} from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../../redux/store";
import { ColorType, getColor } from "../../redux/utils/color";

type Props = {
    content: string;
}

const BaseEditButton: FC<Props> = (props: Props) => {
    const {content} = props;
    const selector = useSelector((state: StoreType) => state);
    const color: ColorType = getColor(selector);

    return (
        <button className="py-2 px-4 border rounded-2xl hover:opacity-80"
            style={{...color.baseColor, borderColor: color.baseColor.color}}
        >
            {content}
        </button>
    );
};

export default BaseEditButton;