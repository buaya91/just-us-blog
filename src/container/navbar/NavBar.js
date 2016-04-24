import React, { Component, PropTypes } from 'react';

export default class NavBar extends Component {
  render() {
    const { navs, selected } = this.props
    return (
      <ul className="nav-bar">
        {
          navs.map((nv, idx) =>
            <li key={idx} onClick={nv.onClick} className={idx === selected ? 'selected' : ''}>
              <a>{nv.name}</a>
            </li>
          )
        }
      </ul>
    )
  }
}

NavBar.propTypes = {
  navs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  })),
  selected: PropTypes.number,
}
