import React from "react";
import { Route } from "react-router";
import HomePage from "./components/pages/HomePage";
import { Layout, Menu } from "antd";
import "antd/dist/antd.less";
import "./custom.css";
import { SnpDatabasePage } from "components/pages/SnpDatabasePage";
import { Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

const { Header, Content } = Layout;
const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Layout style={{ height: "100%" }}>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
                        <Menu.Item key="1">
                            <Link to={`/`}>Network</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to={`/snp`}>SNP Database</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ overflowY: "scroll", overflowX:'hidden' }}>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/snp" component={SnpDatabasePage} />
                </Content>
            </Layout>
        </QueryClientProvider>
    );
}
