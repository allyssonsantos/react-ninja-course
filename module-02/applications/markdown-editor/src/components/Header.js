import React, { PropTypes } from 'react';

const Header = ({ isSaving, handleRemove }) => (
  <header className='editor-header'>
    <span className='save-message'>{isSaving ? 'Salvando...' : 'Salvo!'}</span>

    <button
      onClick={handleRemove}
      className='button-remove'
     >Remover</button>
  </header>
);

Header.propTypes = {
  isSaving: PropTypes.bool.isRequired,
  handleRemove: PropTypes.func.isRequired
};

export default Header;
