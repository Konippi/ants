import React, { FC,  memo,  ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connectWebSocketByProjectIdList } from "../../client/webSocket/webSocket";
import { fetchChatMessagesByProjectIdList, setChatMessageFromWebSocket } from "../../redux/chat/messages";
import { StoreType } from "../../redux/store";
import { getAllProjectsInLoginUser } from "../../redux/utils/allProjectsInLoginUser";
import { Chat } from "../../client/restAPI";

type Props = {
    children: ReactNode;
}
const WebSocketWrapper: FC<Props> = memo(function Layout({children}: Props) {
    const dispatch = useDispatch();
    const selector = useSelector((state: StoreType) => state);
    const allProjects = getAllProjectsInLoginUser(selector);

    // WebSocketから受信したメッセージをReduxへ格納する
    const setChatMessageToRedux = (chatMessage: Chat) => {
        dispatch(setChatMessageFromWebSocket(chatMessage));
    };

    useEffect(() => {
        if(allProjects.projects?.length as number > 0) {
            const projectIdList: Array<number> = allProjects.projects?.map(e => e.project?.id) as Array<number>;
            dispatch(fetchChatMessagesByProjectIdList(projectIdList));
            connectWebSocketByProjectIdList(projectIdList, setChatMessageToRedux);
        }
    }, [allProjects.projects]);

    return (
        <>
            {children}
        </>
    );
});

export default WebSocketWrapper;