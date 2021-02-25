import { Table, Typography, Tag, Button, Tooltip } from "antd";
import { client } from "../../state/state";
import { api } from "../../state/grpc";
import { GenericErrorMessage } from "../../ui/GenericErrorMessage";
import  SnpAnnotationList  from "../../components/SnpAnnotationList";
import { CaretRightOutlined } from "@ant-design/icons";
import { useQuery } from "react-query";

const columns = [
    {
        title: "Reference sequence",
        dataIndex: "sequenceId",
    },
    {
        title: "Position (1-based)",
        dataIndex: "position",
    },
    {
        title: (
            <span>
                Deletion <CaretRightOutlined />
                Insertion
            </span>
        ),
        render: (text: string, record: api.ISnp) => {
            return (
                <span>
                    <Typography.Text type="danger">
                        <b>{record.reference}</b>
                    </Typography.Text>
                    <CaretRightOutlined />
                    <Typography.Text type="success">
                        <b>{record.insertion}</b>
                    </Typography.Text>
                </span>
            );
        },
        dataIndex: "reference",
    },
    {
        title: "Authors",
        render: (text: string, record: api.ISnp) => {
            return (
                <SnpAnnotationList snp={record}/>
            );
        },
        dataIndex: "authors",
    },
    {
        title: "Actions",
        render: (text: string, record: api.ISnp) => {
            return (
                <span>
                    {record.ncbiUrl && (
                        <a target="_blank" rel="noreferrer" href={record.ncbiUrl}>
                            <Button>Viewer</Button>
                        </a>
                    )}
                </span>
            );
        },
        dataIndex: "actions",
    },
];

export function SnpDatabasePage() {
    const { isLoading, isError, data } = useQuery("snp-list", () => client.listSnp({ page: 0 }));
    if (isError) return <GenericErrorMessage />;
    return (
        <Table
            sticky
            loading={isLoading}
            rowKey={(v: api.ISnp) => v.id || ""}
            columns={columns}
            dataSource={data?.snps}
            pagination={false}
        />
    );
}
