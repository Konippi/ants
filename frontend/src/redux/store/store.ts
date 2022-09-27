import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { AllProjectsReducer } from "../utils/allProjects";
import { ColorReducer } from "../utils/color";
import { UserInfoReducer } from "../utils/userInfo";
import { ProjectApiStatusReducer } from "../project/projectApiStatus";
import { ProjectInputReducer } from "../project/projectInput";

const createStore = () => {
    const logger = createLogger({
        collapsed: true,
        diff: true
    });

    return reduxCreateStore(
        combineReducers({
            // ProjectPage
            projectApiStatus: ProjectApiStatusReducer,
            projectInput: ProjectInputReducer,

            // utils
            userInfo: UserInfoReducer,
            allProjects: AllProjectsReducer,
            color: ColorReducer,
        }),

        applyMiddleware(
            logger,
            thunk
        )
    );
};

const store = createStore();

export default store;