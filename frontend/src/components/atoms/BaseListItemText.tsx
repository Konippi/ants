import React, { FC } from "react";

type Props = {
    text: string;
};

const BaseListItemText: FC<Props> = (props: Props) => {
    const {text} = props;

    return (
        <p className="font-bold text-lg base-black text-center">
            {text}
        </p>
    );
};

export default BaseListItemText;