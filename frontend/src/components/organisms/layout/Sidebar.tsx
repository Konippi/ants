import React, {FC, useState} from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";

type Props = {
    parentItem: string,
    childItems: string[],
}

const Sidebar: FC<Props> = (props:Props) => {
    const [drawerOpened, setDrawerOpened] = useState<boolean>(true);

    return (
        <div>
            <Drawer
                anchor="left"
                open={drawerOpened}
                onClose={() => setDrawerOpened(false)}
            >
                <div className="h-max w-1/8 bg-[#D9D9D9]" onClick={() => setDrawerOpened(false)} />
            </Drawer>
        </div>
    );
};

export default Sidebar;