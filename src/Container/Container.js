import React, {useEffect, useState} from 'react';
import Table from "../components/Table/Table";
import Axios from '../Axios';
import FormData from "../components/Form/Form.js";

const Container=()=>{
    const [states, setStates]=useState({
        users:[],
    })
    const [obj, setObj]=useState({
        objectEdit:null,
        isEdit:false
    })
    const onSubmitHandler= async (value)=>{
        await Axios.post('api/create-task',{...value})
        setStates({users: [...states.users, value]})
    }
    useEffect( () => {
        ( async () => {
            const response = await Axios.get('api/tasks')
            setStates({users: response.data});
        })()
    },[])

    const onDeleteHandler=async (id)=> {
        await  Axios.delete(`api/task-delete/${id}`)
        const usersOutcome = states.users.filter(users => users.id !== id)
        setStates({users: usersOutcome})
    }
    const onEditHandler=(id)=>{
        debugger
        const data= states.users.filter(user => user.id===id)
        setObj({objectEdit:data[0] , isEdit:true})
    }
    const onUpdateHandler=async (value)=>{
        // eslint-disable-next-line
        setStates({
            users: [...states.users.map(user => {
                if (user.id === value.id) {
                    user.name = value.name
                    user.email = value.email
                    user.task = value.task
                    user.due = value.due
                }
                return user
            })]
        })
        const backend = {
            name: value.name,
            email: value.email,
            task: value.task,
            due: value.due
        }
        await Axios.patch(`api/task-update/${value.id}`, {...backend})
        setObj({isEdit:false, objectEdit:null})
    }
        return(
            <div>
                <h1 style={{textAlign:"center", fontWeight:"bold"}}>TodoApp</h1>
                <div>
                    <FormData clicked={onSubmitHandler} onEdit={obj.objectEdit} onUpdate={onUpdateHandler}/>
                    <Table users={states.users} clickedDelete={onDeleteHandler} clickedEdit={onEditHandler}/>
                </div>
            </div>

        )
}

export default Container;
