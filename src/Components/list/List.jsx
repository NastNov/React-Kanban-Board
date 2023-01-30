import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LIST_TYPES } from '../../config.js';
import FormAddNewTask from '../form/FormAddNewTask.jsx';
import css from './List.module.css';

function List(props) {

    const {title, type, tasks, addNewTask} = props;
    const [isFormVisible, setFormVisible] = useState(false);
    const handleClick = () => {
        setFormVisible(!isFormVisible)
    }

    return (
        <div className={css.list}>
            <p className={css.listTitle}>{title}</p>
            {tasks.map(task => {
                return (
                    <Link key={task.id} to={`/tasks/${task.id}`} className={css.taskLink}>
                        <div className={css.task}>
                            {task.title}
                        </div>
                    </Link>
                )
            })}
            <button className={css.addButton} onClick={handleClick}>+ Add card</button>
            {type === LIST_TYPES.BACKLOG && isFormVisible && (
                <FormAddNewTask addNewTask={addNewTask}/>
            )}
            {/* {type === LIST_TYPES.READY && (
                <select className={css.select} value={LIST_TYPES.BACKLOG.tasks}>
                    <option value={tasks.title}>{tasks.title}</option>
                </select>
            )} */}
        </div>
    )
};

export default List