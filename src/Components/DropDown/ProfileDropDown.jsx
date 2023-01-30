import css from './ProfileDropDown.module.css';

function ProfileDropDown() {
    return (
        <div className={css.profileSelect}>
            <p className={css.profile}>Profile</p>
            <p className={css.logOut}>Log out</p>
        </div>
    )
}

export default ProfileDropDown