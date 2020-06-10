import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css'

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.content[0].item,
      content: false,
    }
  }

  changeItem = (id) => {
    this.setState(state => {
      return {item: this.props.content[id].item}
    })
  }

  showContent = () => {
    this.setState(state => {
      return {content: !state.content}
    });
  }

  render() {
    const { content, children } = this.props;
    return (
      <div>
        <div>
          {children}
        </div>
        <div className="box-content" onClick={this.showContent.bind(this)}>
          {(this.state.item)}
        </div>
        <div className={this.state.content ? 'dropdown' : 'non-dropdown'}>
          {content.map(element => (
            <div key={element.id} onClick={() => this.changeItem(element.id)}>
              <span className='each-dropdown'>
                {element.item}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

Dropdown.defaultProps = {
  children: <h1>Lista de algo</h1>,
};

Dropdown.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({id: PropTypes.number, item: PropTypes.string}),
  ).isRequired,
  children: PropTypes.string,
};

export default Dropdown;
