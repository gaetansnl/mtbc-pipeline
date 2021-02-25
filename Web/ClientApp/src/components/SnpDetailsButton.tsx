import React, { ReactChild, useState } from "react";
import { api } from "../state/grpc";
import { Button, Modal, Space, Typography, Descriptions } from "antd";
import SnpAnnotationList from "./SnpAnnotationList";

function SnpDetailsButton({ snp, children }: { snp: api.ISnp; children: ReactChild }) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    console.log(snp);
    return (
        <>
            <span onClick={showModal}>{children}</span>
            <Modal
                title={snp.id}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <Space direction="vertical">
                    <Descriptions column={1} title="Informations">
                        <Descriptions.Item label="SPDI"><Typography.Text copyable>{snp.id}</Typography.Text></Descriptions.Item>
                        <Descriptions.Item label="Reference"><Typography.Text copyable>{snp.reference}</Typography.Text></Descriptions.Item>
                        <Descriptions.Item label="Position"><Typography.Text copyable>{snp.position}</Typography.Text></Descriptions.Item>
                        <Descriptions.Item label="Deletion">{snp.reference}</Descriptions.Item>
                        <Descriptions.Item label="Insertion">{snp.insertion}</Descriptions.Item>
                    </Descriptions>
                    <div>
                        <Typography.Title level={5}>Studies</Typography.Title>
                        <SnpAnnotationList snp={snp} />
                    </div>
                    <div>
                        <Typography.Title level={5}>Tools</Typography.Title>
                        {snp.ncbiUrl && (
                            <a target="_blank" rel="noreferrer" href={snp.ncbiUrl}>
                                <Button>View on NCBI</Button>
                            </a>
                        )}
                    </div>
                </Space>
            </Modal>
        </>
    );
}

export default SnpDetailsButton;
