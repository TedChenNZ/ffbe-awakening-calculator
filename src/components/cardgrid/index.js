import React, { Component } from 'react';
import UnitCard from '../unitcard';

export default class CardGrid extends Component {
  render() {
    const cards = this.props.store.cart;
    return (
      <div>
        {
          cards.map(unitStore => (
            <UnitCard unitStore={unitStore} key={unitStore.unit.id} />
          ))
        }
      </div>
    );
  }
}
