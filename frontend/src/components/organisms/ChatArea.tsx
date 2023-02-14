import React, {FC, memo, useEffect, useState} from "react";
import { BsPersonCircle } from "react-icons/bs";
import { MdSend } from "react-icons/md";
import { useSelector } from "react-redux";
import { Chat, Project } from "../../client/restAPI";
import { sendMessageWithWebSocket, WebSocketChatMessageRequestBody } from "../../client/webSocket/webSocket";
import { getChatData } from "../../redux/chat/chatData";
import { StoreType } from "../../redux/store";
import { getLoginUserInfo } from "../../redux/utils/loginUserInfo";
import { filterChatMessagesByProjectId, getUserNameFromAllUserByUserId } from "../../utils/filterUtil";
import { BaseIconButton, BaseInput, Message } from "../atoms";
import { getColor } from "../../redux/utils/color";
import { getAllUsers } from "../../redux/utils/allUsers";
import { getDate, getTime, isSameDate } from "../../utils/dateTimeUtil";

type Props = {
    selectedProject?: Project;
}

const ChatArea: FC<Props> = memo(function chatArea(props: Props) {
    const {selectedProject} = props;

    const selector = useSelector((state: StoreType) => state);
    const chatData = getChatData(selector);
    const loginUserInfo = getLoginUserInfo(selector);
    const color = getColor(selector);
    const allUser = getAllUsers(selector);

    const [displayMessages, setDisplayMessages] = useState<Array<Chat>>([]);
    const [inputMessage, setInputMessage] = useState("");

    useEffect(() => {
        // チャットデータをプロジェクトIDでフィルタリング
        setDisplayMessages(filterChatMessagesByProjectId(chatData.chatMessages, selectedProject?.id));
    }, [chatData.chatMessages, selectedProject]);

    // メッセージ送信
    const sendMessage = () => {
        const requestBody: WebSocketChatMessageRequestBody = {
            projectId: selectedProject?.id,
            userId: loginUserInfo.id,
            message: inputMessage
        };
        sendMessageWithWebSocket(requestBody);
        setInputMessage("");
    };


    return (
        <div className="w-full h-full flex flex-col">
            <div className="p-4 border-b border-gray-300 border-solid h-[50px] flex items-center">
                {selectedProject?.name}
            </div>
            <div className="overflow-scroll flex-grow">
                {displayMessages.map((chatMessage, index) => {
                    const prevCreatedAt = displayMessages[index - 1]?.createdAt;
                    const currentCreatedAt = chatMessage?.createdAt;
                    return (
                        <div key={chatMessage.id}>
                            {!isSameDate(prevCreatedAt, currentCreatedAt) && (
                                <div className="text-center border-t border-gray-200 border-solid pt-2 text-xs opacity-60">
                                    {getDate(currentCreatedAt)}
                                </div>
                            )}
                            <Message
                                message={chatMessage.message}
                                time={getTime(currentCreatedAt)}
                                userName={getUserNameFromAllUserByUserId(allUser.users, chatMessage.userId)}
                                userIcon={<BsPersonCircle size={30} color={color.mainColor.color} className="opacity-60" />}
                                isMe={chatMessage.userId === loginUserInfo.id}
                            />
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center w-full gap-2 px-4 pt-3 pb-4 border-t border-gray-300 border-solid">
                <BaseInput
                    placeholder="Input Message"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                />
                <BaseIconButton
                    icon={<MdSend size={32} color={color.mainColor.color} className="opacity-60" />}
                    size="fit-content"
                    isDisable={inputMessage === "" || selectedProject === undefined}
                    handleClick={sendMessage}
                />
            </div>
        </div>
    );
});

export default ChatArea;