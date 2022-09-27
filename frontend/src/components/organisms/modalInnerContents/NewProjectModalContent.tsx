import React, {ChangeEvent, FC, memo} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjectInput, setProjectInput } from "../../../redux/project/projectInput";
import { StoreType } from "../../../redux/store";
import { BaseModalInput } from "../../atoms";

const SampleModalContent: FC = memo(function sampleModalContent() {

    const dispatch = useDispatch();
    const selector = useSelector((state: StoreType) => state);
    const inputState = getProjectInput(selector);

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setProjectInput(event));
    };

    return (
        <>
            <BaseModalInput
                title="Name"
                name="name"
                value={inputState.name}
                placeholder="SampleProject"
                onChange={handleChangeInput}
            />
            <BaseModalInput
                title="MemberId"
                name="userId"
                value={inputState.userId}
                placeholder="1"
                onChange={handleChangeInput}
            />
        </>
    );
});

export default SampleModalContent;