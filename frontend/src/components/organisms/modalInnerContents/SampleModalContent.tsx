import React, {FC, memo} from "react";
import { BaseModalInput } from "../../atoms";

const SampleModalContent: FC = memo(function sampleModalContent() {

    return (
        <>
            <BaseModalInput title="sample" placeholder="sample"/>
            <BaseModalInput title="sample" placeholder="sample"/>
            <BaseModalInput title="sample" placeholder="sample"/>
        </>
    );
});

export default SampleModalContent;