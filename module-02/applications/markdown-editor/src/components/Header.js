import React, { PropTypes } from 'react';

const Header = ({ isSaving }) => (
  <header className='editor-header'>
    <span className='save-message'>{isSaving ? 'Salvando...' : 'Salvo!'}</span>
  </header>
);

Header.propTypes = {
  isSaving: PropTypes.bool.isRequired
};

export default Header;
