import React, {Suspense, useEffect} from "react";
import {ConfigProvider} from "antd";
import zhCN from 'antd/locale/zh_CN';
import { BrowserRouter as Router, Route, Routes, useLocation, useHistroy } from 'react-router-dom';
import HomeLayout from './homeLayout';
import routes from "./router/index";

function App() {
    return (
        <ConfigProvider locale={zhCN}>
            <Router>
                <HomeLayout>
                    <Suspense fallback={<div>loading...</div>}>
                        <Routes>
                            {
                                routes.map((route, index)=> {
                                    const { path, exact, element, render } = route;
                                    return (
                                        <Route
                                            key={path}
                                            path={path}
                                            exact={exact}
                                            element={element}
                                        />
                                    );
                                })
                            }
                        </Routes>
                    </Suspense>
                </HomeLayout>
            </Router>
        </ConfigProvider>
    )
}

export default App;
