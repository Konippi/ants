import {FC} from "react";
import {Profile, HomeProject} from "../organisms";

const Home: FC = () => {
    return (
        <>
            <Profile />
            <div className="border-t border-solid border-black my-8"></div>
            <HomeProject items={[0,1,2,3,4]} />
        </>
    );
}

export default Home;