import React, {useState} from 'react';
import 'antd/dist/antd.css';
import './Form.css'

import { Form, Input, InputNumber, Button } from 'antd';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const FormData = (props) => {
    const [data, setData]=useState({
            initialValues:props.onEdit?props.onEdit:{
                name:"",
                email:"",
                task:"",
                due:""
            },
            enableReinitialize:true,
    }
    )
    const onFinish = (values, onSubmitProp) => {
               !props.onEdit ?props.clicked(values): props.onUpdate(values);
                onSubmitProp.resetForm();
    };

    return (
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item
                name={['user', 'name']}
                label="Name"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'email']}
                label="Email"
                rules={[
                    {
                        type: 'email',
                        required: true
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'task']}
                label="Task"
                rules={[
                    {
                        type: 'string',
                        required: true
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'due']} label="Due"
                       rules={[
                           {
                               type: 'string',
                               required: true
                           },
                       ]}
            >
                <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};
export default FormData;


// import React from 'react';
// import {useFormik} from "formik";
// import * as Yup from 'yup';
// import './Form.css';
//
// const form=(props)=>{
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const formik = useFormik({
//             initialValues:props.onEdit?props.onEdit:{
//                 name:"",
//                 email:"",
//                 task:"",
//                 due:""
//             },
//         validationSchema: Yup.object({
//             name: Yup.string()
//                 .min(2, "Minimum 2 characters")
//                 .max(15, "Maximum 15 characters")
//                 .required("Required!"),
//             email: Yup.string()
//                 .email("Invalid email format")
//                 .required("Required!"),
//             task: Yup.string()
//                 .required("Required!"),
//             due: Yup.string()
//                 .required("Required!")
//         }),
//         enableReinitialize:true,
//         onSubmit: (values, onSubmitProp) => {
//                 !props.onEdit ?props.clicked(values): props.onUpdate(values);
//                 onSubmitProp.resetForm();
//         }
//     })
//     return(
//         <div className="Form">
//             <form onSubmit={formik.handleSubmit}>
//                 <div>
//                     <label>Name</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={formik.values.name}
//                         onChange={formik.handleChange}
//                     />
//                     {formik.errors.name && formik.touched.name && (
//                         <p>{formik.errors.name}</p>
//                     )}
//                 </div>
//                 <div>
//                     <label>Email</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={formik.values.email}
//                         onChange={formik.handleChange}
//                     />
//                     {formik.errors.email && formik.touched.email && (
//                         <p>{formik.errors.email}</p>
//                     )}
//                 </div>
//                 <div>
//                     <label>Task</label>
//                     <input
//                         type="text"
//                         name="task"
//                         value={formik.values.task}
//                         onChange={formik.handleChange}
//                     />
//                     {formik.errors.task && formik.touched.task && (
//                         <p>{formik.errors.task}</p>
//                     )}
//                 </div>
//                 <div>
//                     <label>Due</label>
//                     <input
//                         type="text"
//                         name="due"
//                         value={formik.values.due}
//                         onChange={formik.handleChange}
//                     />
//                     {formik.errors.due && formik.touched.due && (
//                         <p>{formik.errors.due}</p>
//                     )}
//                 </div>
//                 <div>
//                     <button type="submit" onSubmit={formik.handleSubmit} disabled={!formik.isValid}>Submit</button>
//                 </div>
//             </form>
//         </div>
//     );
// }
// export default form;
