import React, {FC} from "react";
import { ImageIcon } from "../atoms";
import { Link } from "react-router-dom";
import { Project } from "../../client";

type Props = {
    item: Project;
}

const ProjectSquareListItem: FC<Props> = (props: Props) => {
    const {item} = props;

    return (
        <Link to={`/project/${item.id}`} className="mb-4 mr-4">
            <div className="hover:opacity-90 items-center flex flex-col w-28">
                <ImageIcon size="90px" image="sample" borderRadius="15px"/>
                <h2 className="mt-2">{item.name}</h2>
            </div>
        </Link>
    );
};

export default ProjectSquareListItem;