 import React from 'react';
import {Button, Table, Tooltip, Popconfirm} from 'antd';
 import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

const table=(props)=> {
    return (
        <Table style={{marginTop:"40px"}}
            columns={[
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: 'Email',
                    dataIndex: 'email',
                    key: 'email',
                },
                {
                    title: 'Task',
                    dataIndex: 'task',
                    key: 'task',
                },
                {
                    title: 'Due',
                    dataIndex: 'due',
                    key: 'due',
                },
                {
                    title: 'Action',
                    dataIndex: '',
                    key: 'x',
                    render: (record) => (
                        <div style={{display: 'flex'}} className="d-flex">
                            <div style={{marginRight: '10px'}}>
                                <Popconfirm
                                    title="Are you sure to Edit this Task?"
                                    okText="Yes"
                                    cancelText="No"
                                    onConfirm={() => props.clickedEdit(record.id)}
                                >
                                    <Tooltip title="Edit Task">
                                        <Button
                                            className="d-flex justify-content-center align-items-center"
                                            shape="circle"
                                            icon={<EditOutlined/>}
                                        />
                                    </Tooltip>
                                </Popconfirm>
                            </div>
                            <Popconfirm
                                title="Are you sure to delete this Task?"
                                okText="Yes"
                                cancelText="No"
                                style={{marginLeft: '30px'}}
                                onConfirm={() => props.clickedDelete(record.id)}
                            >
                                <Tooltip title="Delete Task">
                                    <Button
                                        className="d-flex justify-content-center align-items-center"
                                        shape="circle"
                                        icon={<DeleteOutlined/>}
                                    />
                                </Tooltip>
                            </Popconfirm>
                        </div>
                    ),
                },
            ]}
            dataSource={props.users}
        />
    );
}
export default table;
