import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SET_LOGIN } from '../Redux/store';
import s from './Style.module.css';

const Profile = () => {

	const login = useSelector(state => state.login);
	const dispatch = useDispatch()

	if (!login) {
		window.location = '/';
	 }

	return (
		<div className={s.wrapper}>
			<h1 className={s.title}>{'Welcome ' + login}</h1>
			<Link
				to='/' 
				onClick={() => dispatch({type: SET_LOGIN, payload: ''})}
				className={s.button}
			 >
				Back
			</Link>
		</div>
	);
}

export default Profile;