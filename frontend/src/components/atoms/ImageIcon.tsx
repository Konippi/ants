import React, {FC, memo} from "react";

type Props = {
    image: string;
    size: string;
    borderRadius?: string;
}

const ImageIcon: FC<Props> = memo(function imageIcon(props: Props) {
    const {image, size, borderRadius} = props;
    return (
        <div style={{width: size, height: size, borderRadius: borderRadius}}
            className="rounded bg-gray-400"
        ></div>
    );
});

export default ImageIcon;