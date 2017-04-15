# Material Bottom Sheet [![Build Status](https://travis-ci.org/TeamWertarbyte/material-ui-bottom-sheet.svg?branch=master)](https://travis-ci.org/TeamWertarbyte/material-ui-bottom-sheet)

[![Greenkeeper badge](https://badges.greenkeeper.io/TeamWertarbyte/material-ui-bottom-sheet.svg)](https://greenkeeper.io/)

Bottom sheets slide up from the bottom of the screen to reveal more content. See the [material specs](https://material.io/guidelines/components/bottom-sheets.html#)

There are two variants:
* Modal bottom sheets
* Persistent bottom sheets

For now we'll focus on the modal variant.

See this component in [action](https://teamwertarbyte.github.io/material-ui-bottom-sheet/)

## Installation
```shell
npm i --save react-custom-scrollbars material-ui-bottom-sheet
```

## Usage
```js
import { BottomSheet } from 'material-ui-bottom-sheet'
import { List, ListItem, Subheader } from 'material-ui'

// ...
render() {
  return(
    <div>
        <BottomSheet
            onRequestClose={() => console.log('close')}
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
  )
}
```

### Material Bottom Sheet Properties

|Name            |Type        |Default     |Description
|----------------|------------|------------|--------------------------------
|action          | `node`     |            | Adds an action element at the top right corner.
|actionStyle     | `object`   |            | Override the inline-styles of the action element.
|bodyStyle       | `object`   |            | Override the inline-styles of the body container.
|contentStyle    | `object`   |            | Override the inline-styles of the content container.
|onRequestClose  | `function` | `noop`     | Fired when the gray background of the popup is pressed when it is open.
|open*            | `bool`     | `false`    | Controls whether the bottom sheet is opened or not.
|style           | `object`   |            | Override the inline-styles of the root element.


\* required property

## License

The files included in this repository are licensed under the MIT license.
