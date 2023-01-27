import React, {FC, memo} from "react";
import { Project } from "../../client";
import { ProjectListItem } from "../molecules";

type Props = {
    items?: Array<Project>;
}

const ProjectList: FC<Props> = memo(function projectList(props: Props) {
    const {items} = props;
    return (
        <div className="w-full flex justify-center flex-wrap">
            {items?.map(e => <ProjectListItem key={e.id} item={e} />)}
        </div>
    );
});

export default ProjectList;