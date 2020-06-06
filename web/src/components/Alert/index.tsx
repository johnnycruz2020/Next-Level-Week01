import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import './styles.css';

const Alert = () => {
  const history = useHistory();

  function handleEnter() {
    history.push('/');
  }

  return (
    <div className="container-alert" onClick={handleEnter}>
      <FiCheckCircle />
      <h1>Cadastro concluído!</h1>
    </div>
  );
}

export default Alert;