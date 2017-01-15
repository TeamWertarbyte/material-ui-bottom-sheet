import React from 'react'
import { AppBar, Divider, FloatingActionButton, List, ListItem, Paper, Subheader } from 'material-ui'
import DirectionsCar from 'material-ui/svg-icons/maps/directions-car'
import Place from 'material-ui/svg-icons/maps/place'
import LocalPhone from 'material-ui/svg-icons/maps/local-phone'
import AccessTime from 'material-ui/svg-icons/device/access-time'
import { action, storiesOf } from '@kadira/storybook'
import { BottomSheet } from '../src'
import { themed } from './storyUtil'

const styles = {
  card: {
    padding: 24,
    marginBottom: 24
  }
}

storiesOf('Mobile', module)
  .add('Action', () => themed(
    <div>
      <AppBar/>
      <div style={{ padding: 24 }}>
        <Paper style={styles.card}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </Paper>
      </div>
      <BottomSheet
        action={
          <FloatingActionButton>
            <DirectionsCar/>
          </FloatingActionButton>
        }
        onRequestClose={action('onRequestClose')}
        open
      >
        <h1 style={{ marginLeft: 72, marginTop: 40 }}>Dandelion Chocolate</h1>
        <Divider inset/>
        <List>
          <ListItem primaryText="740 Valencia St,, San Francisco, CA" leftIcon={<Place/>}/>
          <ListItem primaryText="(415) 349-0942" leftIcon={<LocalPhone/>}/>
          <ListItem primaryText="Wed, 10 AM - 9 PM" leftIcon={<AccessTime/>}/>
        </List>
      </BottomSheet>
    </div>
  ))
  .add('Normal', () => themed(
    <div>
      <AppBar/>
      <div style={{ padding: 24 }}>
        <Paper style={styles.card}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </Paper>
      </div>
      <BottomSheet
        onRequestClose={action('onRequestClose')}
        open
      >
        <Subheader>Open in</Subheader>
        <List>
          <ListItem primaryText="Google Plus"/>
          <ListItem primaryText="Facebook"/>
          <ListItem primaryText="Inbox"/>
          <ListItem primaryText="TextEditor"/>
        </List>
      </BottomSheet>
    </div>
  ))
