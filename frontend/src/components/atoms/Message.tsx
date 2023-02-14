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
            className={`${isMe && "flex-row-reverse"} flex gap-2 items-start px-4 py-2`}
        >
            <div className="mt-[20px]">{userIcon}</div>
            <div className={`${isMe && "items-end"} flex flex-col`}>
                <div className="text-sm opacity-80">{userName}</div>
                <div className={`${isMe && "flex-row-reverse"} flex items-end gap-1`}>
                    <div className={`${isMe ? "bg-lime-400" : "bg-gray-100"} p-2 border border-gray-400 border-solid rounded-2xl max-w-xl`}>
                        {message}
                    </div>
                    <div className="text-xs opacity-60 mb-[1px]">{time}</div>
                </div>
            </div>
        </div>
    );
});

export default Message;