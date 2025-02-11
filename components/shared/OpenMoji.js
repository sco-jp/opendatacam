import React, { Component } from 'react'
import SVG from 'react-inlinesvg';

class OpenMoji extends Component {

  render() {
    return (
      <SVG 
        className="svg-openmoji w-10"
        cacheRequests={true}
        src={process.env.basePath + `/static/icons/openmojis/${this.props.hexcode}.svg`}
        aria-label={this.props.label}
      />
    )
  }
}

export default OpenMoji


