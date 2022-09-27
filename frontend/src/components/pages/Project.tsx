import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewProject } from "../../redux/project/projectApiStatus";
import { cleanProjectInput } from "../../redux/project/projectInput";
import { StoreType } from "../../redux/store";
import { getAllProjects } from "../../redux/utils/allProjects";
import { BaseTextButton, BaseTitle } from "../atoms";
import { BaseModal } from "../molecules";
import { NewProjectModalContent, ProjectPageBottomList, ProjectSquareList } from "../organisms";

const Project: FC = () => {
    const title = "Project Management";
    const selector = useSelector((state: StoreType) => state);
    const allProjects = getAllProjects(selector);
    const dispatch = useDispatch();

    const [isOpenedModal, setIsOpenedModal] = useState(false);
    const handleOpenModal = () => {
        setIsOpenedModal(true);
    };
    const handleCloseModal = () => {
        setIsOpenedModal(false);
    };

    //　新しいプロジェクトの作成
    const handleSubmit = () => {
        dispatch(createNewProject());
        dispatch(cleanProjectInput());
        handleCloseModal()
    };

    return (
        <div className="flex flex-col items-center w-[900px] mx-auto">
            <div className="flex mt-10 justify-between w-full">
                <BaseTitle title={title} />
                <BaseTextButton
                    text="New Project"
                    width="200px"
                    handleClick={handleOpenModal}
                />
            </div>
            <ProjectSquareList items={allProjects.projects} />
            <ProjectPageBottomList projects={allProjects.projects} />
            
            {isOpenedModal && (
                <BaseModal
                    title="New Project"
                    buttonText="Create"
                    content={<NewProjectModalContent/>}
                    handleClick={handleSubmit}
                    handleClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default Project;