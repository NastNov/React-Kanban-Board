import { LIST_TYPES, LIST_COPY } from '../../config';
import css from './Footer.module.css';

function Footer(props) {
	const {tasks} = props;
	return (
		<footer className={css.footer}>
			<div className={css.tasksCount}>
				{Object.values(LIST_TYPES).map(type => {
						const listTasks = tasks.filter(task => task.status === type);
						return (
							<div key={LIST_COPY[type]}>
							{type === LIST_TYPES.BACKLOG && (<p className={css.active}>Active tasks: {listTasks.length}</p>
							)}
							{type === LIST_TYPES.FINISHED && (<p className={css.finished}>Finished tasks: {listTasks.length}</p>
							)}
							</div>
						)
					})}
			</div>
			<p className={css.authorName}>Kanban board by Anastasia Novoselskaya, 2023</p>
		</footer>
	)
}

export default Footer