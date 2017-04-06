import React from 'react';
import {Link} from 'react-router-dom'

import './AppMenu.css';


const MenuItem = ({ name, to, backgroundImage }) => (
  <Link
    className='AppMenu-item'
    to={to}
    style={{
      backgroundImage: `url(${backgroundImage})`
    }}
  >
    <div className='AppMenu-item-name'>
      {name}
    </div>
  </Link>
);


class AppMenu extends React.Component {
  render() {
    return (
      <div className="AppMenu">
        <MenuItem backgroundImage='/images/perfil.jpg' name='Perfil' to='/perfil' />
        <MenuItem backgroundImage='/images/familia.jpg' name='Familia <3' to='/familia' />
        <MenuItem backgroundImage='/images/pocillo.jpg' name='Productos' to='/productos' />
        <MenuItem backgroundImage='/images/iglesia.jpg' name='Contenido' to='/contenido' />
      </div>
    )
  }
}


export default AppMenu;
