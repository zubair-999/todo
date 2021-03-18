import React, {useState} from 'react';
import 'antd/dist/antd.css';
import './Form.css'
import * as Yup from 'yup';
import { Form, Input, SubmitButton, ResetButton } from 'formik-antd';
import {Formik} from 'formik'


const FormData = (props, onSubmitProp) => {
    const formik=({
        onSubmit : (values, onSubmitProp) => {
            !props.onEdit ?props.clicked(values): props.onUpdate(values);
            onSubmitProp.resetForm();
        },
        validationSchema: Yup.object({
             name: Yup.string()
                 .min(2, "Minimum 2 characters")
                 .max(15, "Maximum 15 characters")
                 .required("Required!"),
             email: Yup.string()
                 .email("Invalid email format")
                 .required("Required!"),
             task: Yup.string()
                 .required("Required!"),
             due: Yup.string()
                 .required("Required!")
         }),

    })


    const res = props.onEdit? {...props.onEdit}: {name:'',email:'',task:'',due:''}
    debugger
    return (
        <Formik enableReinitialize={true}
                onSubmit={formik.onSubmit}
                initialValues={{...res}}
                render={() => (
                    <Form>
                        <Form.Item label='Name' name={'name'} >
                            <Input name={'name'}/>
                        </Form.Item>
                        <Form.Item label='Email' name={'email'} >
                            <Input name={'email'}/>
                        </Form.Item>
                        <Form.Item label='Task' name={'task'} >
                            <Input name={'task'}/>
                        </Form.Item>
                        <Form.Item label='Due' name={'due'} >
                            <Input name={'due'}/>
                        </Form.Item>
                            <SubmitButton>Submit</SubmitButton>
                    </Form>
                )
                }
        >

        </Formik>
    );
};
export default FormData;


// import React from 'react';
// import {useFormik} from "formik";
// import * as Yup from 'yup';
//
// const FormData=(props)=>{
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
// export default FormData;
