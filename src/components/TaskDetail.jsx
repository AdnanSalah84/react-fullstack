import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as mutations from '../store/mutations';

const TaskDetail = ({id, comments, task, isComplete, groups, setTaskCompletetion,setTaskGroup, setTaskName })=>(
    <div>
        <div>
            <input onChange={setTaskName} value={task.name}/>
        </div>
        <div>
            <button onClick={()=>setTaskCompletetion(id, !isComplete)}>{isComplete? 'Reopen' : 'Complete'}</button>
        </div>
        <div>
            <select onChange={setTaskGroup} value={task.group}>
            {groups.map(group=>(
                <option key={group.id} value={group.id}>{group.name}</option>
                ))}
            </select>
        </div>
        <div>
            <Link to='/dashboard'>
                <button>Done</button>
            </Link>
        </div>
    </div>
)

// const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch, ownProps) =>{
    let id = ownProps.match.params.id;
    return{
        setTaskCompletetion(id, isComplete){
            dispatch(mutations.setTaskCompletetion(id, isComplete));
        },
        setTaskGroup(e){
            dispatch(mutations.setTaskGroup(id, e.target.value));
        },
        setTaskName(e){
            dispatch(mutations.setTaskName(id, e.target.value));
        }
    }
}

const mapStateToProps = (state, ownProps)=>{
    let id = ownProps.match.params.id;
    let task = state.tasks.find(task => task.id === id);
    let groups = state.groups;
    return{
        id,
        task,
        groups,
        isComplete: task.isComplete
    }
}

export const ConnectTaskDetail = connect(mapStateToProps,mapDispatchToProps)(TaskDetail)