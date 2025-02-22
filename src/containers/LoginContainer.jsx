import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { login, setAccessToken } from '../actions';

import LoginForm from '../components/LoginForm';

export default function LoginContainer() {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => ({
    accessToken: state.accessToken,
  }));

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { target: { name, value } } = e;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const { email, password } = form;

    dispatch(login({ email, password }));
  };

  const handleClickLogout = () => {
    dispatch(setAccessToken(''));
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        {accessToken ? (
          <button type="button" onClick={handleClickLogout}>
            logout
          </button>
        ) : (
          <LoginForm onChange={handleChange} onSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
}
