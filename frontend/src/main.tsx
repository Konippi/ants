import React, { Provider } from "react-redux";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Layout } from "./components/layouts";
import {Chat, Home, Login, Project, Task, Wiki} from "./components/pages";
import "./css/index.css";
import "./styles/Ants.scss";
import store from "./redux/store/store";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path="/"
                    element={
                        <Layout>
                            <Home/>
                        </Layout>
                    }
                />
                <Route path="/login"
                    element={
                        <Layout>
                            <Login/>
                        </Layout>
                    }
                />
                <Route path="/project"
                    element={
                        <Layout>
                            <Project/>
                        </Layout>
                    }
                />
                <Route path="/project/:projectId"
                    element={
                        <Layout>
                            <Wiki/>
                        </Layout>
                    }
                />
                <Route path="/task"
                    element={
                        <Layout>
                            <Task/>
                        </Layout>
                    }
                />
                <Route path="/chat"
                    element={
                        <Layout>
                            <Chat/>
                        </Layout>
                    }
                />
            </Routes>
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);
