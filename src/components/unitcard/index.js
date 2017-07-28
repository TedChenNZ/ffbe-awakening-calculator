import React, { Component } from 'react';
import { Card } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import EnhancementSummary from './EnhancementSummary';

export default class CharacterCard extends Component {
  render() {
    const titleStyle = {
      textAlign: 'center',
    };
    const unit = this.props.unitStore.unit;
    if (this.props.unitStore.cart != null && this.props.unitStore.cart.length === 0) {
      this.props.unitStore.addToCart(204550001);
    }
    return (
      <Card style={{ width: '30em', margin: '2em' }}>
        {unit.sprite &&
          (
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '2em' }}>
              <img src={`./assets/sprites/${unit.sprite}`} alt={unit.name} />
            </div>
          )
        }

        <h1 style={titleStyle}>{unit.name}</h1>
        <EnhancementSummary summary={this.props.unitStore.summary} />
        <div>
          <Button label="Edit" style={{ fontWeight: '700', float: 'right' }} />
        </div>
      </Card>
    );
  }
}
