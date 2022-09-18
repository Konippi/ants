import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../../redux/store";
import { AllProjectsType, getAllProjects } from "../../redux/utils/allProjects";
import { ColorType, getColor } from "../../redux/utils/color";
import { changeSample, getSample, SampleType } from "../../redux/utils/sample";
import { BaseModal } from "../molecules";
import { Profile, HomeProject, SampleModalContent } from "../organisms";

const Home: FC = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state: StoreType) => state);
    const sample: SampleType = getSample(selector);
    const color: ColorType = getColor(selector);
    const allProjects: AllProjectsType = getAllProjects(selector);

    const handleSample = () => {
        dispatch(changeSample());
    };

    return (
        <div className="flex flex-col items-center">

            {/* test */}
            <button className="w-fit my-3 hover:opacity-70"
                onClick={handleSample}
            >Open Modal</button>
            {/* test */}

            <Profile />
            <div className="border-t border-solid my-8"
                style={{borderColor: color.baseColor.color}}
            >
            </div>
            <HomeProject items={allProjects.projects} />

            {sample.isTrue && (
                <BaseModal
                    title="Sample"
                    buttonText="Submit"
                    content={<SampleModalContent/>}
                    handleClick={handleSample}
                    handleClose={handleSample}
                />
            )}
        </div>
    );
};

export default Home;