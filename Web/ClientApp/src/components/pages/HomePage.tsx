import React from "react";
import { Layout, Space, Typography } from "antd";
import PhylogeneticNetwork from "components/PhylogeneticNetwork";
import SearchPanel from "components/search/SearchPanel";
import PhylogeneticNetworkSettings from "components/PhylogeneticNetworkSettings";

const { Sider } = Layout;
function HomePage(props: any) {
    return (
        <Layout style={{ height: "100%" }}>
            <Sider width={300} style={{ padding: 15 }}>
                <Space direction="vertical" style={{ width: "100%" }}>
                    <Typography.Text>
                        <b>Display configuration</b>
                    </Typography.Text>
                    <PhylogeneticNetworkSettings />
                    <Typography.Text>
                        <b>Filter</b>
                    </Typography.Text>
                    <SearchPanel />
                </Space>
            </Sider>
            <Layout>
                {/*@ts-ignore*/}
                <PhylogeneticNetwork />
            </Layout>
            <Sider width={300} style={{ padding: 15 }}>
                gg
            </Sider>
        </Layout>
    );
}

HomePage.propTypes = {};

HomePage.defaultProps = {};
export default HomePage;
