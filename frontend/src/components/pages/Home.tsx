import {FC} from "react";
import { HomeProject } from "../organisms";

const Home: FC = () => {
    return (
        <>
            <HomeProject items={[0,1,2,3,4]} />
        </>
    );
}

export default Home;