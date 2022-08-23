import {FC} from "react";
import {UserName, EditProfileButton} from "../atoms";
import {BsPersonCircle} from "react-icons/bs"

const ProfileLeft: FC = () => {
    return ( 
        <div className="w-[200px] flex justify-center flex-col pl-10 rounded-3xl text-center">
            <div className="mb-4 my-0 mx-auto">
                <BsPersonCircle size={60} className="fill-zinc-600" />
            </div>
            <div className="mb-6">
                <UserName />
            </div>
            <div>
                <EditProfileButton />
            </div>
        </div>
    );
};

export default ProfileLeft;