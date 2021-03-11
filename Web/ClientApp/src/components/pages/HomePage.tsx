import React, { useCallback, useEffect, useState } from "react";
import { Layout, Space, Spin, Typography } from "antd";
import PhylogeneticNetwork from "components/PhylogeneticNetwork";
import SearchPanel from "components/search/SearchPanel";
import PhylogeneticNetworkSettings from "components/PhylogeneticNetworkSettings";
import StrainInfo from "components/StrainInfo";
import { useQuery } from "react-query";
import { api } from "state/grpc";
import { client } from "state/state";
import StrainComparaison from "components/StrainComparaison";

const { Sider } = Layout;

function HomePage(props: any) {
    const [networkSettings, setNetworkSettings] = useState({ precision: 4 });
    const edgePrecision = 2 * Math.pow(10, -(networkSettings.precision / 2) - 2);
    let [selectedNodes, setSelectedNodes] = useState<any>([]);
    let [searchedNodes, setSearchedNodes] = useState<any>([]);
    let [infoOpened, setInfoOpened] = useState<boolean>(false);

    let [currentSearch, setCurrentSearch] = useState<api.IStrainCondition | null>(null);
    const { isLoading, isError, data, error, remove } = useQuery(
        ["search", currentSearch],
        async () => {
            if (!currentSearch) return null;
            return client.search({ condition: currentSearch });
        },
        {
            staleTime: Number.POSITIVE_INFINITY,
        }
    );
    const handleNodeSelected = useCallback((v: any) => {
        setCurrentSearch(null);
        setSelectedNodes(v.map((v: any) => v.name));
    }, []);
    useEffect(() => setSearchedNodes(data?.ids || []), [data?.ids]);

    const currentSelectedNodes = selectedNodes.length ? selectedNodes : searchedNodes;
    useEffect(() => setInfoOpened(currentSelectedNodes.length > 0), [currentSelectedNodes.length]);

    console.log(currentSelectedNodes);
    return (
        <Layout style={{ height: "100%" }}>
            <Sider width={300} style={{ padding: 15 }}>
                <Space direction="vertical" style={{ width: "100%" }}>
                    {" "}
                    <Spin spinning={isLoading} delay={500}>
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

                        <SearchPanel
                            onSearch={(v) => {
                                setSelectedNodes([]);
                                setCurrentSearch(v);
                            }}
                        />
                    </Spin>
                </Space>
            </Sider>
            <Layout>
                {/*@ts-ignore*/}
                <PhylogeneticNetwork
                    edgePrecision={edgePrecision}
                    selectedNodeNames={currentSelectedNodes}
                    onNodesSelected={handleNodeSelected}
                />
            </Layout>
            {infoOpened && (
                <Sider width={500} style={{ height: "100%", overflowY: "scroll" }}>
                    {currentSelectedNodes.length === 1 ? (
                        <StrainInfo id={currentSelectedNodes[0]} />
                    ) : (
                        <StrainComparaison ids={currentSelectedNodes} />
                    )}
                </Sider>
            )}
        </Layout>
    );
}

HomePage.propTypes = {};

HomePage.defaultProps = {};
export default HomePage;
