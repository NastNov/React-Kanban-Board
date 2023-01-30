import { useRouteMatch, Link } from 'react-router-dom';
import css from './TaskDetail.module.css';

function TaskDetail(props) {
const match = useRouteMatch();
const {taskId} = match.params;
const {tasks} = props;

const task = tasks.find(task => task.id === taskId);

    return (
        <div className={css.wrapper}>
            <div className={css.header}>
                <h2 className={css.title}>
                    {task.title}
                </h2>
                <Link to='/' className={css.homeLink}>
                    &#10006;
                </Link>
            </div>
            <p>{task.description || '(no description)'}</p>
        </div>
    )
}

export default TaskDetail