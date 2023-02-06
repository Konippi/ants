import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProjectWithUsers } from "../../client";
import { createNewProjectAPI, deleteProjectAPI, editProjectAPI } from "../../redux/project/projectApiStatus";
import { cleanProjectInput, setProjectInput } from "../../redux/project/projectInput";
import { StoreType } from "../../redux/store";
import { getAllProjectsInLoginUser } from "../../redux/utils/allProjectsInLoginUser";
import { getLoginUserInfo } from "../../redux/utils/loginUserInfo";
import { BaseTextButton, BaseTitle } from "../atoms";
import { BaseModal } from "../molecules";
import {
    ProjectInfoModalContent,
    ProjectInputModalContent,
    ProjectPageBottomList,
    ProjectSquareList
} from "../organisms";

const Project: FC = () => {
    const title = "Project Management";
    const selector = useSelector((state: StoreType) => state);
    const allProjects = getAllProjectsInLoginUser(selector);
    const loginUserInfo = getLoginUserInfo(selector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cleanProjectInput());
    }, [loginUserInfo.id]);

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

    // 入力モーダルの開閉状態
    const [isOpenedInputModal, setIsOpenedInputModal] = useState(false);
    const handleOpenInputModal = () => {
        setIsOpenedInputModal(true);
    };
    const handleCloseInputModal = () => {
        dispatch(cleanProjectInput());
        setIsOpenedInputModal(false);
        setIsOpenedEditModal(false);
    };

    // 新しいプロジェクトの作成
    const handleCreate = () => {
        dispatch(createNewProjectAPI());
        handleCloseInputModal();
    };

    // プロジェクト削除
    const handleDelete = () => {
        if(confirm(`${projectInfo?.project?.name}を本当に削除しますか?`)) {
            dispatch(deleteProjectAPI(projectInfo?.project?.id as number));
        }
    };

    // 編集モーダルを開く
    const [isOpenedEditModal, setIsOpenedEditModal] = useState(false);
    const handleOpenEditModal = () => {
        dispatch(setProjectInput(projectInfo as ProjectWithUsers));
        setIsOpenedEditModal(true);
        handleOpenInputModal();
    };

    // プロジェクトをUpdate
    const handleEditProject = () => {
        dispatch(editProjectAPI(projectInfo?.project?.id as number));
    };

    return (
        <div className="flex flex-col items-center w-[900px] mx-auto">
            <div className="flex mt-10 justify-between w-full">
                <BaseTitle title={title} />
                <BaseTextButton
                    text="New Project"
                    width="200px"
                    handleClick={handleOpenInputModal}
                />
            </div>
            <ProjectSquareList
                projects={allProjects.projects}
                handleOpenInfoModal={handleOpenInfoModal}
            />
            {allProjects.projects !== undefined && allProjects.projects.length > 0 && (
                <ProjectPageBottomList
                    projects={allProjects.projects}
                    handleOpenInfoModal={handleOpenInfoModal}
                />
            )}
            {isOpenedInfoModal && (
                <BaseModal
                    title="Project Information"
                    content={
                        <ProjectInfoModalContent
                            project={projectInfo}
                            handleDelete={handleDelete}
                            handleEdit={handleOpenEditModal}
                        />
                    }
                    handleClose={handleCloseInfoModal}
                />
            )}
            {isOpenedInputModal && (
                <BaseModal
                    title={isOpenedEditModal ? "Edit Project" : "New Project"}
                    content={
                        <ProjectInputModalContent
                            handleClick={isOpenedEditModal ? handleEditProject : handleCreate}
                        />
                    }
                    handleClose={handleCloseInputModal}
                />
            )}
        </div>
    );
};

export default Project;