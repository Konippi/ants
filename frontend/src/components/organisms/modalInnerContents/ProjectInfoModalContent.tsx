import React, {FC, memo} from "react";
import { ProjectWithUsers } from "../../../client";
import { BaseTag, BaseTextButton } from "../../atoms";

type Props = {
    project?: ProjectWithUsers;
    handleDelete?: () => void;
    handleEdit?: () => void;
}

const ProjectInfoModalContent: FC<Props> = memo(function projectInfoModalContent(props: Props) {
    const {project, handleDelete, handleEdit} = props;

    return (
        <div className="py-6">
            <h2 className="text-xl font-bold mb-6">{project?.project?.name}</h2>
            <div className="mb-6">
                <h2 className="mb-2">Description</h2>
                <p className="text-sm">{project?.project?.description}</p>
            </div>
            <div className="mb-6">
                <h2 className="mb-2">Users</h2>
                <div className="flex flex-wrap gap-x-px">
                    {project?.users?.map(user => <BaseTag key={user.userId} text={user.name as string}/>)}
                </div>
            </div>
            {handleDelete && handleEdit && (
                <div className="flex gap-x-1">
                    <BaseTextButton text="Delete" handleClick={handleDelete} />
                    <BaseTextButton text="Edit" handleClick={handleEdit} />
                </div>
            )}
        </div>
    );
});

export default ProjectInfoModalContent;