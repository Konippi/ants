import React, {FC} from "react";

type Props = {
    content: string;
}

const BaseEditButton: FC<Props> = (props: Props) => {
    const {content} = props;

    return (
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-2xl shadow">
            {content}
        </button>
    );
};

export default BaseEditButton;