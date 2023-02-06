import React, { FC } from "react";
import { Box, List, ListItem, Drawer, Divider } from "@mui/material";
import { BaseListItem } from "../../molecules";
import { BaseListItemText } from "../../atoms";
import { BsFillArrowLeftCircleFill } from "react-icons/all";
import { setSidebarState } from "../../../redux/task/taskSidebar";
import { useDispatch } from "react-redux";

type Props = {
    parentItem: string;
    childItems: string[];
};

const Sidebar: FC<Props> = (props:Props) => {
    const {parentItem, childItems} = props;
    const dispatch = useDispatch();
    const setSidebarStateHandler = (isOpen: boolean) => {
        dispatch(setSidebarState(isOpen));
    };

    return (
        <>
            <Drawer
                anchor="left"
                SlideProps={{unmountOnExit: true}}
                open={true}
                onClose={() => setSidebarStateHandler(false)}
            >
                <Box
                    sx={{width: 200, height: "100%", position: "fixed", top: "4rem", backgroundColor: "white"}}
                    role="presentation"
                    onKeyDown={() => setSidebarStateHandler(false)}
                >
                    <List>
                        <div className="flex justify-end mt-2 mr-4">
                            <BsFillArrowLeftCircleFill size="2rem" color="#626161" onClick={() => setSidebarStateHandler(false)} />
                        </div>
                        <Divider textAlign="center" variant="middle" sx={{marginY: "1rem"}}>
                            <BaseListItemText text={parentItem} />
                        </Divider>
                        {childItems.map((text) => (
                            <ListItem key={text} disablePadding>
                                <BaseListItem text={text}/>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default Sidebar;