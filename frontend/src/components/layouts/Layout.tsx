import React, { FC,  memo,  ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../../redux/store";
import { fetchAllProjectsInLoginUser } from "../../redux/utils/allProjectsInLoginUser";
import { fetchAllUsers } from "../../redux/utils/allUsers";
import { getColor } from "../../redux/utils/color";
import { getLoginUserInfo } from "../../redux/utils/loginUserInfo";
import { Header } from "../organisms";


type Props = {
    children: ReactNode;
}
const Layout: FC<Props> = memo(function Layout({children}: Props) {
    const dispatch = useDispatch();
    const selector = useSelector((state: StoreType) => state);
    const color = getColor(selector);
    const loginUserId = getLoginUserInfo(selector).id;

    useEffect(() => {
        if(loginUserId !== undefined) {
            // アプリ起動時にfetchが必要なReduxのstore
            dispatch(fetchAllProjectsInLoginUser());
            dispatch(fetchAllUsers());
        }
    }, [loginUserId]);

    return (
        <div style={color.baseColor} className="min-h-screen">
            <Header />
            <main>
                <div>
                    {children}
                </div>
            </main>
        </div>
    );
});

export default Layout;