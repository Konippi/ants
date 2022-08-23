import {FC} from "react";
import {ProfileDetail} from "../atoms"
import {BsEnvelope, BsGithub, BsKey} from "react-icons/bs"

const ProfileRight: FC = () => {
    return (
        <div className="w-[55%] flex justify-center flex-col rounded-3xl">
            <div className="mb-4">
                <ProfileDetail icon={<BsEnvelope size={24} color={"#52525b"} />} content="sample@sample.co.jp" />
            </div>
            <div className="mb-4">
                <ProfileDetail icon={<BsGithub size={24} color={"#52525b"} />} content="sample" />
            </div>
            <div>
                <ProfileDetail icon={<BsKey size={24} color={"#52525b"} />} content="xxxxx" />
            </div>
        </div>
    );
};

export default ProfileRight;