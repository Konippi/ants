import React, { FC,  memo,  ReactNode, useEffect, useState } from "react";
import { userApi } from "../../client/clientWrapper";

type Props = {
    children: ReactNode;
}

// 初回レンダリング時Authユーザーかを判定するコンポーネント
const AuthWrapper: FC<Props> = memo(function authWrapper({children}: Props) {
    
    // 画面のチラつき対策 初回レンダリングはfetchが終わるまで待つ
    const [isFetched, setIsFetched] = useState(false);

    useEffect(() => {
        userApi.getAllUsersUsingGET()
            .then(() => setIsFetched(true))
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