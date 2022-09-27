import React, {FC, memo} from "react";
import { ProjectList } from "../organisms";
import {Link} from "react-router-dom";
import { BaseTitle } from "../atoms";
import { StoreType } from "../../redux/store";
import { useSelector } from "react-redux";
import { getAllProjects } from "../../redux/utils/allProjects";

const HomeProject: FC = memo(function homeProject() {
    const selector = useSelector((state: StoreType) => state);
    const allProjects = getAllProjects(selector);
    
    return (
        <div className="flex justify-center flex-col w-[600px] mx-auto mb-5">
            <BaseTitle title="PROJECT" />
            <div className="mt-5" />
            {/* 最大4つのプロジェクトを出力 */}
            <ProjectList items={allProjects.projects?.slice(0, 4)} />
            <Link to="/project" className="w-fit mx-auto hover:opacity-70">More</Link>
        </div>
    );
});

export default HomeProject;