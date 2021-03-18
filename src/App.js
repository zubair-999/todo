// import React, {Component, useEffect, useState} from 'react';
// import './App.css';
// import Table from "./components/Table/Table";
// import Axios from './Axios';
// import FormData from "./components/Form/Form.js";
// const App = () => {
//     const [change, setChange]=useState(
//         {
//             users:[],
//             isEdit:false,
//             objectEdit:null
//         }
//     )
//     const onSubmitHandler= async (value)=>{
//         await Axios.post('api/create-task',{...value})
//         setChange({users: [...change.users, value]})
//     }
//     useEffect(async () => {
//         try {
//             const response= await Axios.get('api/tasks')
//             setChange({users: response.data});
//         }catch (e) {
//             console.error(e)
//         }
//     },[])
//     const onDeleteHandler=async (id)=> {
//         try {
//             await Axios.delete(`api/task-delete/${id}`)
//             const usersOutcome = change.users.filter(users => users.id !== id)
//             setChange({users: usersOutcome})
//         }catch(e) {
//             console.error(e)
//         }
//     }
//     const onEditHandler=(id)=>{
//         debugger
//         // eslint-disable-next-line
//         const data= change.users.filter(user=>{
//             if(user.id===id){
//                 return true
//             }
//         })
//         setChange({objectEdit:data[0] , isEdit:true})
//     }
//     console.log(change.objectEdit)
//     const onUpdateHandler=async (value)=>{
//         debugger;
//         // eslint-disable-next-line
//         setState({
//             users: [...change.users.map(user => {
//                 if (user.id === value.id) {
//                     user.name = value.name
//                     user.email = value.email
//                     user.task = value.task
//                     user.due = value.due
//                 }
//                 return user
//             })]
//             //isEdit: false
//         })
//         const backend = {
//             name: value.name,
//             email: value.email,
//             task: value.task,
//             due: value.due
//         }
//         const response=await Axios.patch(`api/task-update/${value.id}`, {...backend})
//         setChange({isEdit:false, objectEdit:null})
//     }
//     return(
//         <div>
//             <div>
//                 <FormData clicked={onSubmitHandler} onEdit={change.objectEdit} onUpdate={onUpdateHandler}/>
//                 <Table users={change.users} clickedDelete={onDeleteHandler} clickedEdit={onEditHandler}/>
//             </div>
//         </div>
//     )
// }
// export default App;


import React, {Component} from 'react';
import './App.css';
import Table from "./components/Table/Table";
import Axios from './Axios';
import FormData from "./components/Form/Form.js";

class App extends Component{
    state={
        users:[],
        isEdit:false,
        objectEdit:null
    }
    debugger;
    onSubmitHandler= async (value)=>{
        await Axios.post('api/create-task',{...value})
        this.setState({users: [...this.state.users, value]})
    }
    async componentDidMount() {
        const response= await Axios.get('api/tasks')
        this.setState({users: response.data});
    }

    onDeleteHandler=async (id)=> {
        await  Axios.delete(`api/task-delete/${id}`)
        const usersOutcome = this.state.users.filter(users => users.id !== id)
        this.setState({users: usersOutcome})
    }
    onEditHandler=(id)=>{
        // eslint-disable-next-line
        const data= this.state.users.filter(user=>{
            if(user.id===id){
                return true
            }
        })

        this.setState({objectEdit:data[0] , isEdit:true})
    }
    onUpdateHandler=async (value)=>{
        debugger;
        // eslint-disable-next-line
        this.setState({
            users: [...this.state.users.map(user => {
                if (user.id === value.id) {
                    user.name = value.name
                    user.email = value.email
                    user.task = value.task
                    user.due = value.due
                }
                return user
            })]
            //isEdit: false
        })
        const backend = {
            name: value.name,
            email: value.email,
            task: value.task,
            due: value.due
        }
        const response=await Axios.patch(`api/task-update/${value.id}`, {...backend})
        console.log(response);
        this.setState({isEdit:false, objectEdit:null})
    }
    render() {
        console.log(this.state.users);
        console.log(this.state.objectEdit);
        return(
            <div>
                <h1 style={{textAlign:"center", fontWeight:"bold"}}>TodoApp</h1>
                <div>
                    <FormData clicked={this.onSubmitHandler} onEdit={this.state.objectEdit} onUpdate={this.onUpdateHandler}/>
                    <Table users={this.state.users} clickedDelete={this.onDeleteHandler} clickedEdit={this.onEditHandler}/>
                </div>
            </div>

        )
    }
}

export default App;
