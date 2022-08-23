import {FC, memo} from "react";
import { ProjectList } from "../organisms";
import {Link} from "react-router-dom";
import { BaseTitle } from "../atoms";

type Props = {
    items: Array<number>;
}

const HomeProject: FC<Props> = memo(function homeProject(props: Props) {
    const {items} = props;
    return (
        <div className="flex justify-center flex-col w-[600px] mx-auto my-5">
            <BaseTitle title="PROJECT" />
            <div className="mt-5" />
            <ProjectList items={items} />
            <Link to={"/project"} className="w-fit mx-auto">More</Link>
        </div>
    );
});

export default HomeProject;