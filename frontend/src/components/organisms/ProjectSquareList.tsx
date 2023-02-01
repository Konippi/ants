import React, {FC, memo} from "react";
import { Project, ProjectWithUsers } from "../../client";
import { ProjectSquareListItem } from "../molecules";

type Props = {
    projects?: Array<ProjectWithUsers>;
    handleOpenInfoModal: (project: ProjectWithUsers) => void;
}

const ProjectSquareList: FC<Props> = memo(function projectSquareList(props: Props) {
    const {projects, handleOpenInfoModal} = props;
    return (
        <div className="w-full flex flex-wrap mt-12">
            {projects?.map(e => (
                <ProjectSquareListItem key={e.project?.id}
                    project={e.project as Project}
                    handleClick={() => handleOpenInfoModal(e)}
                />
            ))}
        </div>
    );
});

export default ProjectSquareList;