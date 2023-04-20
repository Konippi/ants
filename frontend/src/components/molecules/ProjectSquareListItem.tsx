import React, {FC} from "react";
import { ImageIcon } from "../atoms";
import { Project } from "../../client/restAPI";

type Props = {
    project: Project;
    handleClick: () => void;
}

const ProjectSquareListItem: FC<Props> = (props: Props) => {
    const {project, handleClick} = props;

    return (
        <div onClick={handleClick} className="mb-4 mr-4 cursor-pointer">
            <div className="hover:opacity-90 items-center flex flex-col w-28">
                <ImageIcon size="90px" borderRadius="15px"/>
                <h2 className="mt-2">{project.name}</h2>
            </div>
        </div>
    );
};

export default ProjectSquareListItem;