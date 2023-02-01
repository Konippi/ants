import React, {FC, memo} from "react";

type Props = {
    text: string;
}

const BaseTag: FC<Props> = memo(function baseTag(props: Props) {
    const {text} = props;
    return (
        <span className="text-xs inline-block py-1 px-2 rounded text-slate-600 bg-slate-200">
            {text}
        </span>
    );
});

export default BaseTag;