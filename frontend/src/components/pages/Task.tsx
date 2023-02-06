import React, { FC, useEffect } from "react";
import { Sidebar } from "../organisms";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../../redux/store";
import { getSidebarState, setSidebarState } from "../../redux/task/taskSidebar";
import { BsFillArrowRightCircleFill } from "react-icons/all";

const Task: FC = () => {
    const sidebarItems: string[] = ["sample1", "sample2", "sample3"];
    const selector = useSelector((state: StoreType) => state);
    const sidebarState = getSidebarState(selector);
    const dispatch = useDispatch();
    const setSidebarStateHandler = (isOpen: boolean) => {
        dispatch(setSidebarState(isOpen));
    };
    useEffect(() => {
        setSidebarStateHandler(true);
    }, []);

    return (
        <>
            {sidebarState.isOpen ? (
                <Sidebar parentItem="Project" childItems={sidebarItems} />
            ) : (
                <div className="ml-4 mt-4">
                    <BsFillArrowRightCircleFill size="2rem" color="#626161" onClick={() => setSidebarStateHandler(true)} />
                </div>
            )}
        </>
    );
};

export default Task;