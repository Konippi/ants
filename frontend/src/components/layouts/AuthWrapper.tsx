import React, { FC,  memo,  ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userApi } from "../../client/clientWrapper";
import { fetchLoginUserInfo } from "../../redux/utils/loginUserInfo";

type Props = {
    children: ReactNode;
}

// 初回レンダリング時Authユーザーかを判定するコンポーネント
const AuthWrapper: FC<Props> = memo(function authWrapper({children}: Props) {
    const dispatch = useDispatch();
    
    // 画面のチラつき対策 初回レンダリングはfetchが終わるまで待つ
    const [isFetched, setIsFetched] = useState(false);

    useEffect(() => {
        userApi.getLoginUserUsingGET()
            .then(() => {
                dispatch(fetchLoginUserInfo());
                setIsFetched(true);
            })
            .catch(error => {
                // 認証されていない場合：loginページへリダイレクト
                if(error.response.status === 401) {
                    location.href = "/login";
                }
            });
    }, []);

    return (
        <>
            {isFetched && (children)}
        </>
    );
});

export default AuthWrapper;