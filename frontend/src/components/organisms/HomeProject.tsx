import React, {FC, memo, useState} from "react";
import { ProjectInfoModalContent, ProjectList } from "../organisms";
import {Link} from "react-router-dom";
import { BaseTitle } from "../atoms";
import { StoreType } from "../../redux/store";
import { useSelector } from "react-redux";
import { getAllProjectsInLoginUser } from "../../redux/utils/allProjectsInLoginUser";
import { BaseModal } from "../molecules";
import { ProjectWithUsers } from "../../client/restAPI";

const HomeProject: FC = memo(function homeProject() {
    const selector = useSelector((state: StoreType) => state);
    const allProjects = getAllProjectsInLoginUser(selector);
    
    // 詳細モーダルの開閉状態 + プロジェクト詳細の情報
    const [isOpenedInfoModal, setIsOpenedInfoModal] = useState(false);
    const [projectInfo, setProjectInfo] = useState<ProjectWithUsers>();
    const handleOpenInfoModal = (project: ProjectWithUsers) => {
        setProjectInfo(project);
        setIsOpenedInfoModal(true);
    };
    const handleCloseInfoModal = () => {
        setIsOpenedInfoModal(false);
    };

    return (
        <div className="flex justify-center flex-col w-[600px] mx-auto mb-5">
            <BaseTitle title="PROJECT" />
            <div className="mt-5" />
            {/* 最大4つのプロジェクトを出力 */}
            <ProjectList
                projects={allProjects.projects?.slice(0, 4)}
                handleOpenInfoModal={handleOpenInfoModal}
            />
            <Link to="/project" className="w-fit mx-auto hover:opacity-70">More</Link>
            {isOpenedInfoModal && (
                <BaseModal
                    title="Project Information"
                    content={<ProjectInfoModalContent project={projectInfo}/>}
                    handleClose={handleCloseInfoModal}
                />
            )}
        </div>
    );
});

export default HomeProject;