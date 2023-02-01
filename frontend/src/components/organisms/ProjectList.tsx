import React, {FC, memo} from "react";
import { Project, ProjectWithUsers } from "../../client";
import { ProjectListItem } from "../molecules";

type Props = {
    projects?: Array<ProjectWithUsers>;
    handleOpenInfoModal: (project: ProjectWithUsers) => void;
}

const ProjectList: FC<Props> = memo(function projectList(props: Props) {
    const {projects, handleOpenInfoModal} = props;
    return (
        <div className="w-full flex justify-center flex-wrap">
            {projects?.map(e => (
                <ProjectListItem key={e.project?.id}
                    project={e.project as Project}
                    handleClick={() => handleOpenInfoModal(e)}
                />
            ))}
        </div>
    );
});

export default ProjectList;