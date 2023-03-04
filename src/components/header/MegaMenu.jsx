import React from 'react';

function MegaMenu({handleMouseLeave}) {
  return (
    <div className="mega-menu" onMouseLeave={handleMouseLeave}>
      <div className="mega-menu__column">
        <h3>Column 1</h3>
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
      </div>
      <div className="mega-menu__column">
        <h3>Column 2</h3>
        <ul>
          <li><a href="#">Link 4</a></li>
          <li><a href="#">Link 5</a></li>
          <li><a href="#">Link 6</a></li>
        </ul>
      </div>
      <div className="mega-menu__column">
        <h3>Column 3</h3>
        <ul>
          <li><a href="#">Link 7</a></li>
          <li><a href="#">Link 8</a></li>
          <li><a href="#">Link 9</a></li>
        </ul>
      </div>
    </div>
  );
}

export default MegaMenu;