import React, {FC, memo} from "react";
import { Project } from "../../client";
import { ProjectSquareListItem } from "../molecules";

type Props = {
    items?: Array<Project>;
}

const ProjectSquareList: FC<Props> = memo(function projectSquareList(props: Props) {
    const {items} = props;
    return (
        <div className="w-full flex flex-wrap mt-12">
            {items?.map(e => <ProjectSquareListItem key={e.id} item={e} />)}
        </div>
    );
});

export default ProjectSquareList;