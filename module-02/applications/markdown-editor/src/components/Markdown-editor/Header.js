'use strict';

import React, { PropTypes } from 'react';
import Button from 'components/Button';

const Header = ({ isSaving, handleRemove, handleCreate }) => (
  <header className='editor-header'>
    {isSaving !== null && (
      <span className='save-message'>{isSaving ? 'Salvando...' : 'Salvo!'}</span>
    )}

    <Button
      onClick={handleCreate}
      kind='success'
     >Criar novo</Button>

    <Button
      onClick={handleRemove}
      kind='danger'
     >Remover</Button>
  </header>
);

Header.propTypes = {
  isSaving: PropTypes.bool,
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
};

export default Header;
