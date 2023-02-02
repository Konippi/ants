import React, {FC} from "react";
import {Sidebar} from "../organisms";

const Task: FC = () => {
    const sidebarItems: string[] = ["sample1", "sample2", "sample3"];

    return (
        <>
            <Sidebar parentItem="Project" childItems={sidebarItems}/>
            <div className="w-full flex justify-center items-center">
                Taskページ
            </div>
        </>
    );
};

export default Task;