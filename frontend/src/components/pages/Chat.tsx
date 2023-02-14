import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../../redux/store";
import { getAllProjectsInLoginUser } from "../../redux/utils/allProjectsInLoginUser";
import { BaseTextButton } from "../atoms";
import { ChatArea } from "../organisms";

const Chat: FC = () => {
    const selector = useSelector((state: StoreType) => state);
    const allProjects = getAllProjectsInLoginUser(selector);

    const [projectId, setProjectId] = useState<number>();

    const changeProjectId = (projectId: number) => {
        setProjectId(projectId);
    };

    return (
        <>
            <div className="w-full flex justify-center items-center h-[calc(100vh-4rem)]">
                <div className="flex flex-col gap-2 w-[20%] h-full bg-slate-100">
                    <p className="text-center">サイドバー（仮）</p>
                    {allProjects.projects?.map(project => (
                        <BaseTextButton
                            key={project.project?.id}
                            text={project.project?.name as string}
                            handleClick={() => changeProjectId(project.project?.id as number)}
                        />
                    ))}
                </div>
                <div className="w-[80%] h-full">
                    <ChatArea projectId={projectId} />
                </div>
            </div>
        </>
    );
};

export default Chat;