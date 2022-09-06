import React, {FC, ReactNode} from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { StoreType } from "../../redux/store";
import { ColorType, getColor } from "../../redux/utils/color";
import { BaseIconButton, BaseTextButton } from "../atoms";

type Props = {
    title: string;
    buttonText: string;
    content: ReactNode;
    handleClose: () => void;
    handleClick: () => void;
}

const BaseModal: FC<Props> = (props: Props) => {
    const {title, content, buttonText, handleClose, handleClick} = props;
    const selector = useSelector((state: StoreType) => state);
    const color: ColorType = getColor(selector);
    const modalOuterBgClass = color.baseColor.background === "#ffffff" ? "bg-black" : "bg-white";

    return (
        <div className={`${modalOuterBgClass} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex items-center bg-opacity-60`}>
            <div className="relative p-4 w-[700px] h-full md:h-auto mx-auto">
                <div className="relative rounded-xl shadow" style={color.baseColor}>
                    <div className="flex justify-between items-center py-4 px-6 border-b border-solid relative">
                        <h3 className="text-xl font-semibold flex items-center">
                            {title}
                        </h3>
                        <BaseIconButton
                            icon={<AiOutlineClose/>}
                            size="auto"
                            handleClick={handleClose}
                        />
                    </div>
                    <div className="pt-2 px-8">
                        {content}
                    </div>
                    <div className="p-6">
                        <BaseTextButton text={buttonText} handleClick={handleClick} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BaseModal;