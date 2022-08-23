import {FC} from "react";
import {Profile HomeProject} from "../organisms";

const Home: FC = () => {
    return (
        <>
            <Profile />
            <HomeProject items={[0,1,2,3,4]} />
        </>
    );
}

export default Home;