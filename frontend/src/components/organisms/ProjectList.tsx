import React, {FC, memo} from "react";
import { ProjectListItem } from "../molecules";

type Props = {
    items: Array<number>;
}

const ProjectList: FC<Props> = memo(function projectList(props: Props) {
    const {items} = props;
    return (
        <div className="max-w-full flex justify-center flex-wrap">
            {items.map(e => <ProjectListItem key={e} item={1} />)}
        </div>
    );
});

export default ProjectList;