import React, { FC,  memo,  ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../../redux/store";
import { fetchAllProjectsInLoginUser } from "../../redux/utils/allProjectsInLoginUser";
import { fetchAllUsers } from "../../redux/utils/allUsers";
import { getColor } from "../../redux/utils/color";
import { fetchUserInfoByUserId } from "../../redux/utils/userInfo";
import { Header } from "../organisms";

// ログイン機能作成後削除
export const userId = 1;

type Props = {
    children: ReactNode;
}

const Layout: FC<Props> = memo(function Layout({children}: Props) {
    const dispatch = useDispatch();
    const selector = useSelector((state: StoreType) => state);
    const color = getColor(selector);

    // アプリ起動時にfetchが必要なReduxのstore
    useEffect(() => {
        dispatch(fetchUserInfoByUserId(userId));
        dispatch(fetchAllProjectsInLoginUser());
        dispatch(fetchAllUsers());
    }, []);

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