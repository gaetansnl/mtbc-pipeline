import React, { useEffect, useState } from "react";
import { Layout, Space, Typography } from "antd";
import PhylogeneticNetwork from "components/PhylogeneticNetwork";
import SearchPanel from "components/search/SearchPanel";
import PhylogeneticNetworkSettings from "components/PhylogeneticNetworkSettings";
import StrainInfo from "components/StrainInfo";

const { Sider } = Layout;

function HomePage(props: any) {
    const [networkSettings, setNetworkSettings] = useState({ precision: 4 });
    const edgePrecision = 2 * Math.pow(10, -(networkSettings.precision / 2) - 2);
    let [selectedNodes, setSelectedNodes] = useState<any>([]);
    let [infoOpened, setInfoOpened] = useState<boolean>(false);
    useEffect(() => {
        setInfoOpened(selectedNodes.length > 0);
    }, [selectedNodes.length]);

    return (
        <Layout style={{ height: "100%"}}>
            <Sider width={300} style={{ padding: 15 }}>
                <Space direction="vertical" style={{ width: "100%" }}>
                    <Typography.Text>
                        <b>Display configuration</b>
                    </Typography.Text>
                    {/*@ts-ignore*/}
                    <PhylogeneticNetworkSettings
                        value={networkSettings}
                        onChange={(v) => setNetworkSettings(v)}
                    />
                    <Typography.Text>
                        <b>Filter</b>
                    </Typography.Text>
                    <SearchPanel />
                </Space>
            </Sider>
            <Layout>
                {/*@ts-ignore*/}
                <PhylogeneticNetwork
                    edgePrecision={edgePrecision}
                    selectedNodeIds={selectedNodes.map((v: any) => v.id)}
                    onNodesSelected={(v: any) => setSelectedNodes(v)}
                />
            </Layout>
            {infoOpened && (
                <Sider width={500} style={{height: '100%', overflowY: "scroll"}}>
                    <StrainInfo id={"ERR245662"} />
                </Sider>
            )}
        </Layout>
    );
}

HomePage.propTypes = {};

HomePage.defaultProps = {};
export default HomePage;
