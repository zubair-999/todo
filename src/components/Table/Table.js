 import React from 'react';
import {Button, Table, Tooltip, Popconfirm} from 'antd';
 import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

const table=(props)=> {
    return (
        <Table
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
                    render: (record) => <span>{record ? record.name : null}</span>,
                },
                {
                    title: 'Action',
                    dataIndex: '',
                    key: 'x',
                    render: (record) => (
                        <div style={{display: 'flex'}} className="d-flex">
                            <div style={{marginRight: '10px'}}>
                                <Popconfirm
                                    title="Are you sure to Edit this Company?"
                                    okText="Yes"
                                    cancelText="No"
                                    onConfirm={() => props.onEditHandler(record.id)}
                                >
                                    <Tooltip title="Edit Company">
                                        <Button
                                            className="d-flex justify-content-center align-items-center"
                                            shape="circle"
                                            icon={<EditOutlined/>}
                                        />
                                    </Tooltip>
                                </Popconfirm>
                            </div>
                            <Popconfirm
                                title="Are you sure to delete this Company?"
                                okText="Yes"
                                cancelText="No"
                                style={{marginLeft: '30px'}}
                                onConfirm={() => props.onDeleteHandler(record.id)}
                            >
                                <Tooltip title="Delete Company">
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







// const table= (props) => {
//     return(
//         <table className="ui celled table">
//             <thead>
//             <tr>
//                 <td>Name</td>
//                 <td>Email</td>
//                 <td>Task</td>
//                 <td>Due</td>
//                 <td data-label="Action">Action</td>
//             </tr>
//             </thead>
//             <tbody>
//             {props.users && props.users.map(user => {
//             return <tr key={user.id}>
//                 <td data-label="Name">{user.name}</td>
//                 <td data-label="Email">{user.email}</td>
//                 <td data-label="Task">{user.task}</td>
//                 <td data-label="Due">{user.due}</td>
//                 <td>
//                     <button id={user.id} onClick={() => props.clickedEdit(user.id)}>Edit</button>
//                     <button id={user.id} onClick={() => props.clickedDelete(user.id)}>Delete</button>
//                 </td>
//             </tr>
//             })}
//             </tbody>
//         </table>
//     )
// }
// export default table;
