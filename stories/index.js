import React from 'react'
import { AppBar, List, ListItem, Paper, Subheader } from 'material-ui'
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
          <ListItem primaryText="Google Plus" />
          <ListItem primaryText="Facebook" />
          <ListItem primaryText="Inbox" />
          <ListItem primaryText="TextEditor" />
        </List>
      </BottomSheet>
    </div>
  ))
