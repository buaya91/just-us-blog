import React, { Component, PropTypes } from 'react'
import config from '../config'
import { Card, CardText, CardTitle, CardMedia } from 'material-ui/Card'

export default class AboutUsCard extends Component {
  render() {
    return (
      <Card>
        <CardMedia
          overlay={<CardTitle title="Qingwei & Suhui" subtitle="Just Us being Us" />}
        >
          <img src="http://lorempixel.com/600/337/nature/" />
        </CardMedia>
        <CardTitle title="About Us" />
        <CardText>
          {config.aboutUs}
        </CardText>
      </Card>
    )
  }
}
