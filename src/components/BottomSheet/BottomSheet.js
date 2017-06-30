import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Paper } from 'material-ui'

const styles = {
  root: {
    height: '100%',
    width: '100%',
    position: 'fixed',
    zIndex: 1300,
    left: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    transition: 'opacity 400ms cubic-bezier(0.4, 0, 0.2, 1)'
  },
  body: {
    width: '100%',
    maxHeight: 600,
    position: 'fixed',
    bottom: 0
  }
}

/**
 * Material design bottom sheet
 * @see [Bottom Sheet](https://material.io/guidelines/components/bottom-sheets.html)
 */
export default class BottomSheet extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div
        style={{
          ...styles.root,
          pointerEvents: this.props.open ? null : 'none',
          opacity: this.props.open ? '1' : '0',
          ...this.props.style
        }}
        onTouchTap={this.props.onRequestClose}
      >
        <Paper
          style={{
            ...styles.body,
            ...this.props.bodyStyle
          }}
          rounded={false}
          onTouchTap={(e) => e.stopPropagation()}
        >
          {this.props.action ? React.cloneElement(this.props.action, {
            style: {
              ...this.props.action.style,
              marginRight: 16,
              marginTop: -28,
              float: 'right', ...this.props.actionStyle
            }
          }) : null
          }
          <div style={this.props.contentStyle}>
            {this.props.children}
          </div>
        </Paper>
      </div>
    )
  }
}

BottomSheet.propTypes = {
  /** Adds an action element at the top right corner. */
  action: PropTypes.object,
  /** Override the inline-styles of the action element. */
  actionStyle: PropTypes.object,
  /** Override the inline-styles of the body element. */
  bodyStyle: PropTypes.object,
  /** Override the inline-styles of the content element. */
  contentStyle: PropTypes.object,
  /** Fired when the the background is clicked. */
  onRequestClose: PropTypes.func.isRequired,
  /** Controls whether the bottom sheet is opened or not. */
  open: PropTypes.bool.isRequired,
  /** Override the inline-styles of the root element. */
  style: PropTypes.object,
}
