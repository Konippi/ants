import React, {FC, memo} from "react";
import { BaseInput, BaseTextButton } from "../atoms";

type Props = {
    onSubmit: () => void;
}

const LoginForm: FC<Props> = memo(function loginForm(props: Props) {
    const {onSubmit} = props;
    return (
        <div className="flex flex-col items-center">
            <h2>Login</h2>
            <BaseInput
                placeholder="UserName"
                onChange={(e) => console.log(e)}
                value=""
            />
            <BaseInput
                placeholder="Password"
                onChange={(e) => console.log(e)}
                value=""
            />
            <BaseTextButton
                text="Login"
                handleClick={onSubmit}
            />
        </div>
    );
});

export default LoginForm;