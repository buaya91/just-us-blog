import React, { Component, PropTypes } from 'react';

export default class NavBar extends Component {
  render() {
    const { navs, selected } = this.props
    return (
      <ul className="nav-bar">
        {
          navs.map((nv, idx) =>
            <li onClick={nv.onClick} selected={idx === selected}>
              <span>{nv.name}</span>
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
