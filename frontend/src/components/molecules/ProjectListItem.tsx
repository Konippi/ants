import React, {FC} from "react";
import { ImageIcon } from "../atoms";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Project } from "../../client";
import { useSelector } from "react-redux";
import { StoreType } from "../../redux/store";
import { ColorType, getColor } from "../../redux/utils/color";

type Props = {
    item: Project;
}

const ProjectListItem: FC<Props> = (props: Props) => {
    const {item} = props;
    const selector = useSelector((state: StoreType) => state);
    const color: ColorType = getColor(selector);

    return (
        <Link to={`/project/${item.id}`} className="w-full mb-4">
            <div className="hover:opacity-90 w-full flex items-center px-3 py-3 rounded-md"
                style={color.mainColor}
            >
                <div className="w-[8%]">
                    <ImageIcon size="2.5rem" image="sample"/>
                </div>
                <div className="w-[84%]">
                    <h2 className="ml-14">{item.name}</h2>
                </div>
                <div className="w-[8%] flex justify-end">
                    <BsChevronRight/>
                </div>
            </div>
        </Link>
    );
};

export default ProjectListItem;