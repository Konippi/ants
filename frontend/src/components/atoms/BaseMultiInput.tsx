import React, {FC} from "react";
import Select, { MultiValue, StylesConfig } from "react-select";
import { MultiSelectType } from "../../type/multiSelectType";

type Props = {
    title: string;
    value: Array<MultiSelectType>;
    options: Array<MultiSelectType>;
    onChange: (e: MultiValue<MultiSelectType>) => void;
}

const BaseMultiInput: FC<Props> = (props: Props) => {
    const {title, value, options, onChange} = props;

    const styles: StylesConfig<MultiSelectType, true> = {
        multiValueLabel: (base, state) => {
            return state.data.isFixed
                ? { ...base, paddingRight: 6 }
                : base;
        },
        multiValueRemove: (base, state) => {
            return state.data.isFixed ? { ...base, display: "none" } : base;
        },
    };
    
    return (
        <div className="my-8">
            <h3 className="mb-3">{title}</h3>
            <Select
                isMulti
                styles={styles}
                value={value}
                options={options}
                onChange={onChange}
                isClearable={false}
            />
        </div>
    );
};

export default BaseMultiInput;