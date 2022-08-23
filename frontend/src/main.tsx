import ReactDOM from "react-dom";
import {HashRouter, Route, Routes} from "react-router-dom";
import { Layout } from "./components/layouts";
import {Home} from "./components/pages";
import "./css/index.css";
import "./styles/Ants.scss";


ReactDOM.render(
    <HashRouter>
        <Routes>
            <Route path="/"
                element={
                    <Layout>
                        <Home/>
                    </Layout>
                }
            />
        </Routes>  
    </HashRouter>,
  document.getElementById("root")
);
