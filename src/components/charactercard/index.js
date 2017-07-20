import React, { Component } from 'react';
import { Card } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import EnhancementSummary from './EnhancementSummary';

export default class CharacterCard extends Component {
  render() {
    const titleStyle = {
      textAlign: 'center',
    };
    return (
      <Card style={{ width: '30em', margin: '2em' }}>
        {this.props.sprite &&
          (
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '2em' }}>
              <img src={`./assets/sprites/${this.props.sprite}`} alt={this.props.name} />
            </div>
          )
        }

        <h1 style={titleStyle}>{this.props.name}</h1>
        <EnhancementSummary enhancements={this.props.enhancements} />
        <div>
          <Button label="Edit" style={{ fontWeight: '700', float: 'right' }} />
        </div>
      </Card>
    );
  }
}
