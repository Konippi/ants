import React, {FC, memo, ReactNode} from "react";

type Props = {
    message?: string;
    time?: string;
    userName?: string;
    userIcon: ReactNode;
    isMe: boolean;
};

const Message: FC<Props> = memo(function message(props: Props) {
    const {message, time, userName, userIcon, isMe} = props;

    // 最新のチャットが最下部に表示されるように自動スクロール
    const scrollTargetRef = (element: HTMLDivElement | null) => {
        if(element != null) {
            element.scrollIntoView();
        }
    };

    return (
        <div ref={scrollTargetRef}
            className={`${isMe && "flex-row-reverse"} flex gap-2 items-center px-4 py-1`}
        >
            <span>{userIcon}</span>
            <span>{message}</span>
            <span>{time}</span>
            <span>{userName}</span>
        </div>
    );
});

export default Message;