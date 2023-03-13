import { Menu, MenuItem } from "@mui/material";
import React, {FC, memo, useState} from "react";
import { BsPersonCircle } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userApi } from "../../../client/clientWrapper";
import { StoreType } from "../../../redux/store";
import { getColor } from "../../../redux/utils/color";
import { BaseIconButton } from "../../atoms";

const Header: FC = memo(function Header() {
    const selector = useSelector((state: StoreType) => state);
    const color = getColor(selector);
    
    // アイコンボタン押下時のメニュー
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    // ログアウトハンドリング
    const handleLogout = () => {
        userApi.logoutUsingPOST()
            .then(() => location.href = "/login");
    };
    
    return (
        <header>
            <div className="fixed w-full h-16 flex items-center justify-between top-0 px-7 z-50 Ants-black-cover"
                style={color.mainColor}
            >
                <div className="z-10">
                    <Link to="/" className="mr-5 hover:opacity-70">HOME</Link>
                    <Link to="/project" className="mr-5 hover:opacity-70">PROJECT</Link>
                    <Link to="/task" className="mr-5 hover:opacity-70">TASK</Link>
                    <Link to="/chat" className="mr-5 hover:opacity-70">CHAT</Link>
                </div>
                <div className="z-10">
                    <BaseIconButton
                        icon={<BsPersonCircle size={40} color={color.mainColor.color} className="opacity-60"/>}
                        size="auto"
                        handleClick={handleOpenMenu}
                    />
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleCloseMenu}
                    >
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>
            <div className="h-16"></div>
        </header>
    );
});

export default Header;
