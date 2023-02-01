import React, {FC} from "react";
import { ImageIcon } from "../atoms";
import { BsChevronRight } from "react-icons/bs";
import { Project } from "../../client";
import { useSelector } from "react-redux";
import { StoreType } from "../../redux/store";
import { ColorType, getColor } from "../../redux/utils/color";

type Props = {
    project: Project;
    handleClick: () => void;
}

const ProjectListItem: FC<Props> = (props: Props) => {
    const {project, handleClick} = props;
    const selector = useSelector((state: StoreType) => state);
    const color: ColorType = getColor(selector);

    return (
        <div onClick={handleClick} className="w-full mb-4 cursor-pointer">
            <div className="hover:opacity-90 w-full flex items-center px-3 py-3 rounded-md"
                style={color.mainColor}
            >
                <div className="w-[8%]">
                    <ImageIcon size="2.5rem"/>
                </div>
                <div className="w-[84%]">
                    <h2 className="ml-3">{project.name}</h2>
                </div>
                <div className="w-[8%] flex justify-end">
                    <BsChevronRight/>
                </div>
            </div>
        </div>
    );
};

export default ProjectListItem;