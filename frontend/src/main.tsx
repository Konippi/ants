import React, { Provider } from "react-redux";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Layout } from "./components/layouts";
import {Chat, Home, Login, Project, Task} from "./components/pages";
import "./css/index.css";
import "./styles/Ants.scss";
import store from "./redux/store/store";
import AuthWrapper from "./components/layouts/AuthWrapper";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path="/login"
                    element={
                        <Layout>
                            <Login/>
                        </Layout>
                    }
                />
                <Route path="/"
                    element={
                        <Layout>
                            <AuthWrapper>
                                <Home/>
                            </AuthWrapper>
                        </Layout>
                    }
                />
                <Route path="/project"
                    element={
                        <Layout>
                            <AuthWrapper>
                                <Project/>
                            </AuthWrapper>
                        </Layout>
                    }
                />
                <Route path="/task"
                    element={
                        <Layout>
                            <AuthWrapper>
                                <Task/>
                            </AuthWrapper>
                        </Layout>
                    }
                />
                <Route path="/chat"
                    element={
                        <Layout>
                            <AuthWrapper>
                                <Chat/>
                            </AuthWrapper>
                        </Layout>
                    }
                />
            </Routes>
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);
