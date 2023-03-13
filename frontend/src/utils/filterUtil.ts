import { Chat, UserModel } from "../client/restAPI";

// 全てのチャットメッセージからプロジェクトIDのものをフィルタリング
export const filterChatMessagesByProjectId = (allChatMessages?: Array<Chat>, projectId?: number) => {
    return allChatMessages?.filter(e => e.projectId === projectId) as Array<Chat>;
};

// 全てのユーザーからユーザーIDのユーザーの名前を抽出
export const getUserNameFromAllUserByUserId = (allUsers?: Array<UserModel>, userId?: number) => {
    return allUsers?.filter(e => e.userId === userId)[0]?.name;
};