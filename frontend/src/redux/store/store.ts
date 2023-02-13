import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { AllProjectsInLoginUserReducer } from "../utils/allProjectsInLoginUser";
import { ColorReducer } from "../utils/color";
import { LoginUserInfoReducer } from "../utils/loginUserInfo";
import { ProjectApiStatusReducer } from "../project/projectApiStatus";
import { ProjectInputReducer } from "../project/projectInput";
import { AllUsersReducer } from "../utils/allUsers";
import { ChatDataReducer } from "../chat/chatData";

const createStore = () => {
    const logger = createLogger({
        collapsed: true,
        diff: true
    });
    
    return reduxCreateStore(
        combineReducers({
            // ChatPage
            chatData: ChatDataReducer,
            
            // ProjectPage
            projectApiStatus: ProjectApiStatusReducer,
            projectInput: ProjectInputReducer,

            // utils
            loginUserInfo: LoginUserInfoReducer,
            allProjectsInLoginUser: AllProjectsInLoginUserReducer,
            allUsers: AllUsersReducer,
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