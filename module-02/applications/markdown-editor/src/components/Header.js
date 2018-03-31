import React from 'react';

const Header = ({ handleSave }) => (
  <header className='editor-header'>
    <button className='save' onClick={handleSave}>Salvar</button>
  </header>
);

export default Header;
