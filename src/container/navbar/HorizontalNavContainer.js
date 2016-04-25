import React, { Component, PropTypes } from 'react';
import NavBar from './NavBar'

export default class HorizontalNavContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeView: 0,
    }
  }

  changeActiveView(idx) {
    this.setState({ activeView: idx })
  }

  render() {
    const { id, views } = this.props
    const { activeView } = this.state
    const activeComponent = views[activeView].component
    return (
      <div id={id} className="nav-bar-container">
        <NavBar
          navs={views.map((v, k) => ({ name: v.name, onClick: () => this.changeActiveView(k) }))}
          selected={activeView}
        />
        <div className="nav-bar-content">
          {activeComponent}
        </div>
      </div>
    )
  }
}

HorizontalNavContainer.propTypes = {
  id: PropTypes.string,
  views: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    component: PropTypes.any.isRequired,
  })),
  changeActiveView: PropTypes.func,
}
