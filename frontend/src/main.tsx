import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {HashRouter, Route, Routes} from "react-router-dom";
import { Layout } from "./components/layouts";
import {Home} from "./components/pages";
import "./css/index.css";
import "./styles/Ants.scss";
import store from "./redux/store/store";


ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <Routes>
                <Route path="/"
                    element={
                        <Layout>
                            <Home/>
                        </Layout>
                    }
                />
            </Routes>
        </Provider>
    </HashRouter>,
    document.getElementById("root")
);
