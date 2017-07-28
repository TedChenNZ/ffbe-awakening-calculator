import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { table } from './styles.scss';

export default class EnhancementSummary extends Component {
  static defaultProps = {
    summary: [],
  }
  static propTypes = {
    summary: PropTypes.object,
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
    if (!this.props.summary) {
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
            { this.props.summary && Object.keys(this.props.summary).map((type) => {
              const materials = this.props.summary[type];
              if (materials.T1) {
                return (
                  <tr key={type} style={{ color: this.typeToColor(type) }}>
                    <td>{type.toUpperCase()}</td>
                    <td>{materials.T1}</td>
                    <td>{materials.T2}</td>
                    <td>{materials.T3}</td>
                    <td>{materials.T4}</td>
                    <td>{materials.T5}</td>
                  </tr>
                );
              }
              return null;
            }) }
          </tbody>
        </table>
      </div>
    );
  }
}
