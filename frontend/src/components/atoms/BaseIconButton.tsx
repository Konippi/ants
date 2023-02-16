import React, {FC, ReactNode} from "react";

type Props = {
    icon: ReactNode;
    size: string;
    handleClick: (() => void) | ((event: React.MouseEvent<HTMLElement>) => void);
}

const BaseIconButton: FC<Props> = (props: Props) => {
    const {icon, size, handleClick} = props;
    
    return (
        <button
            className="hover:opacity-80 rounded-md p-1 ml-auto flex items-center justify-center"
            style={{width: size, height: size}}
            onClick={handleClick}
        >
            {icon}
        
        </button>
    );
};

export default BaseIconButton;