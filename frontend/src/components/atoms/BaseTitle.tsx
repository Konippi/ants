import React, {FC, memo} from "react";

type Props = {
    title: string;
}

const BaseTitle: FC<Props> = memo(function baseTitle(props: Props) {
    const {title} = props;
    return (
        <h2 className="px-4 py-1.5 rounded-xl leading-none bg-gray-300 w-fit text-xs">
            {title}
        </h2>
    );
});

export default BaseTitle;