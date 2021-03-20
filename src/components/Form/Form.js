import React from 'react';
import 'antd/dist/antd.css';
import './Form.css'
import  { Form, Input, SubmitButton, FormItem} from 'formik-antd';
import {Formik} from 'formik';
import * as Yup from 'yup';


const FormData = (props) => {
    const formik=({
        onSubmit: (values, onSubmitProp) => {
            !props.onEdit ? props.clicked(values) : props.onUpdate(values);
            onSubmitProp.resetForm();
        }
    })
    const validation= Yup.object({
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
    })

    const res = props.onEdit? {...props.onEdit}: {name:'',email:'',task:'',due:''}
    return (
        <Formik enableReinitialize={true}
                onSubmit={formik.onSubmit}
                initialValues={{...res}}
                validationSchema={validation}
                render={() => (
                    <Form>
                        <FormItem label='Name' name={'name'} required={true}>
                            <Input name={'name'}/>
                        </FormItem>
                        <FormItem label='Email' name={'email'} required={true}>
                            <Input name={'email'}/>
                        </FormItem>
                        <Form.Item label='Task' name={'task'} required={true}>
                            <Input name={'task'}/>
                        </Form.Item>
                        <Form.Item label='Due' name={'due'} required={true}>
                            <Input name={'due'}/>
                        </Form.Item>
                        <SubmitButton>Submit</SubmitButton>
                    </Form>
                )}
        >

        </Formik>
    );
}
export default FormData;
