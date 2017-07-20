import React, { Component } from 'react';
import { table } from './styles.scss';

export default class EnhancementSummary extends Component {
  static defaultProps = {
    enhancements: [],
  }
  static propTypes = {
    enhancements: React.PropTypes.arrayOf(React.PropTypes.object),
  }
  typeToColor = (type) => {
    switch (type) {
      case 'power':
        return 'red';
      case 'support':
        return 'green';
      default:
        return 'black';
    }
  }
  render() {
    if (!this.props.enhancements) {
      return null;
    }
    return (
      <div>
        <table className={table}>
          <thead>
            <tr>
              <th />
              <th>T1</th>
              <th>T2</th>
              <th>T3</th>
              <th>T4</th>
              <th>T5</th>
            </tr>
          </thead>
          <tbody>
            {/** this.props.enhancements.map(item => (
              <tr key={item.type} style={{ color: this.typeToColor(item.type) }}>
                <td>{item.type.toUpperCase()}</td>
                <td>{item.t1}</td>
                <td>{item.t2}</td>
                <td>{item.t3}</td>
                <td>{item.t4}</td>
                <td>{item.t5}</td>
              </tr>
            )) **/}
          </tbody>
        </table>
      </div>
    );
  }
}
