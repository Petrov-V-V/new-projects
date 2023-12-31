import './App.css';
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";
import React from "react";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {NotFoundPage} from "./pages/NotFoundPage";
import NavBar from './components/NavBar';

function App() {


    return (
      <div>
        <Layout className="layout">
        <NavBar />
            <Content style={{padding: '0 50px'}}>
                <Routes>
                    <Route index element={<MainPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </Content>
        </Layout>
        </div>
    );
}

export default App;