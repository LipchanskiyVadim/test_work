import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SET_LOGIN } from '../Redux/store';
import s from './Style.module.css';

const Main = () => {

	const dispatch = useDispatch()
	const [loginState, setLoginState] = useState('');
	const [passwordState, setPasswordState]= useState('');
	const [buttonState, setButtonState] = useState(true);

	useEffect(() => {
		if(loginState === 'developer23' && passwordState === '123456') {
			setButtonState(false);
		} else {
			setButtonState(true);
		}
	}, [loginState, passwordState])

	const onClickLogin = () => {
		dispatch({type: SET_LOGIN, payload: loginState});
	}

	return (
		<div className={s.wrapper}>
			<div className={s.input}>
				<input 
					value={loginState} 
					onChange={(e) => setLoginState(e.target.value)}
					placeholder='Login'
				 />
			</div>
			<div className={s.input}>
				<input 
					value={passwordState}
					onChange={(e) => setPasswordState(e.target.value)}
					placeholder='Password'
					type='password'
				 />
			</div>
			<Link to='/profile'>
				<button 
					disabled={buttonState} 
					className={s.button} 
					onClick={() => !buttonState && onClickLogin()}
				>
					Login
				</button>
			</Link>
		</div>
	);
}

export default Main;