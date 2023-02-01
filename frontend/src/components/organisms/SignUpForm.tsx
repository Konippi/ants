import React, {FC, memo} from "react";
import { BaseInput, BaseTextButton } from "../atoms";

type Props = {
    onSubmit: () => void;
}

const SignUpForm: FC<Props> = memo(function signUpForm(props: Props) {
    const {onSubmit} = props;
    return (
        <div className="flex flex-col items-center">
            <h2>Sign Up</h2>
            <BaseInput
                placeholder="UserName"
                onChange={(e) => console.log(e)}
                value=""
            />
            <BaseInput
                placeholder="Email"
                onChange={(e) => console.log(e)}
                value=""
            />
            <BaseInput
                placeholder="Password"
                onChange={(e) => console.log(e)}
                value=""
            />
            <BaseInput
                placeholder="Retype Password"
                onChange={(e) => console.log(e)}
                value=""
            />
            <BaseTextButton
                text="Sign Up"
                handleClick={onSubmit}
            />
        </div>
    );
});

export default SignUpForm;