import React, {ChangeEvent, FC, memo, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { MultiValue } from "react-select";
import { UserModel } from "../../../client";
import { getProjectInput, changeProjectInput, changeProjectSelect } from "../../../redux/project/projectInput";
import { StoreType } from "../../../redux/store";
import { getAllUsers } from "../../../redux/utils/allUsers";
import { getUserInfo } from "../../../redux/utils/userInfo";
import { MultiSelectType } from "../../../type/multiSelectType";
import { BaseModalInput, BaseMultiInput, BaseTextButton } from "../../atoms";

type Props = {
    handleClick: () => void;
}

const ProjectInputModalContent: FC<Props> = memo(function projectInputModalContent(props: Props) {
    const {handleClick} = props;

    const dispatch = useDispatch();
    const selector = useSelector((state: StoreType) => state);
    const inputState = getProjectInput(selector);
    const allUsers = getAllUsers(selector);
    const loginUserId = getUserInfo(selector).id as number;

    // 文字変更時
    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeProjectInput(event));
    };

    // 複数選択インプット
    const [value, setValue] = useState<Array<MultiSelectType>>([]);
    const [options, setOptions] = useState<Array<MultiSelectType>>([]);
    useEffect(() => {
        const allUserList = allUsers.users as Array<UserModel>;
        const inputUserIdList = inputState.userIdList as Array<number>;

        const valueUsers = allUserList.filter(user => inputUserIdList.includes(user.userId as number));
        const optionUsers = allUserList.filter(user => !inputUserIdList.includes(user.userId as number));

        setValue(valueUsers.map(user => ({value: user.userId, label: user.name, isFixed: (user.userId === loginUserId)} as MultiSelectType)));
        setOptions(optionUsers.map(user => ({value: user.userId, label: user.name} as MultiSelectType)));
    }, [inputState.userIdList]);
    
    // 選択変更時
    const handleChangeSelect = (event: MultiValue<MultiSelectType>) => {
        dispatch(changeProjectSelect(event));
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
                title="Description"
                name="description"
                value={inputState.description}
                placeholder="description"
                onChange={handleChangeInput}
            />
            <BaseMultiInput
                title="Users"
                value={value}
                options={options}
                onChange={handleChangeSelect}
            />
            <div className="py-6">
                <BaseTextButton
                    text="Submit"
                    isDisable={inputState.name === ("" && undefined)}
                    handleClick={handleClick}
                />
            </div>
        </>
    );
});

export default ProjectInputModalContent;