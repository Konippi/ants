import React, {FC, ReactNode} from "react";

type Props = {
    icon: ReactNode;
    content: string;
};

const ProfileDetail: FC<Props> = (props: Props) => {
    const {icon, content} = props;

    return (
        <div className="h-[30px] flex items-center">
            <span>{icon}</span>
            <span className="ml-6">{content}</span>
        </div>
    );
};

export default ProfileDetail;