import React, {FC} from "react";
import { Avatar, ListItemAvatar, ListItemButton } from "@mui/material";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BaseListItemText } from "../atoms";

type Props = {
    text: string;
};

const BaseListItem: FC<Props> = (props: Props) => {
    const {text} = props;
    return (
        <>
            <ListItemAvatar sx={{marginLeft: "2.0rem"}}>
                <Avatar sx={{bgcolor: "white"}}>
                    <AiOutlineFundProjectionScreen size="2rem" color="#252525"/>
                </Avatar>
            </ListItemAvatar>
            <ListItemButton sx={{paddingLeft: 0}}>
                <BaseListItemText text={text} />
            </ListItemButton>
        </>
    );
};

export default BaseListItem;