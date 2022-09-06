import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { SampleReducer } from "../utils/sample";
import { AllProjectsReducer } from "../utils/allProjects";
import { ColorReducer } from "../utils/color";

const createStore = () => {
    const logger = createLogger({
        collapsed: true,
        diff: true
    });

    return reduxCreateStore(
        combineReducers({
            // utils
            sample: SampleReducer,
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