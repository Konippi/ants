import React, {FC, memo} from "react";

type Props = {
    image: string;
}

const ImageIcon: FC<Props> = memo(function imageIcon(props: Props) {
    const {image} = props;
    return (
        <div className="w-10 h-10 rounded bg-slate-50"></div>
    );
});

export default ImageIcon;