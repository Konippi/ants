import {FC} from "react";
import { ProfileLeft } from "../molecules";
import { ProfileRight } from "../molecules";

const Profile: FC = () => {
    return (
        <div className="bg-gray-200 w-[600px] h-72 flex justify-between mt-10 mx-auto rounded-3xl">
            <ProfileLeft />
            <ProfileRight />
        </div>
    );
};

export default Profile;