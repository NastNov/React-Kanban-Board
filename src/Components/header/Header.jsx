import { useState } from 'react';
import Logo from '../../assets/user-avatar.png';
import VectorDown from '../../assets/vector-down.svg';
import VectorUp from '../../assets/vector-up.svg';
import css from './Header.module.css';
import ProfileDropDown from '../DropDown/ProfileDropDown.jsx';

function Header() {
	const [isOpen, setOpen] = useState(false);
	const handleClick = () => {
		setOpen(!isOpen)
	};

	return (
		<header className={css.header}>
			<h1 className={css.title}>Awesome Kanban Board</h1>
			<div className={css.userAvatar} onClick={handleClick}>
				<div className={css.profileImgs}>
					<img className={css.logo} src={Logo} alt='user avatar'/>
					{isOpen ? <img className={css.vector} src={VectorUp} alt='vector'/> : <img className={css.vector} src={VectorDown} alt='vector'/>}
				</div>
				<div>
					{isOpen && (
						<ProfileDropDown />
					)}
				</div>
			</div>
		</header>
	)
}

export default Header