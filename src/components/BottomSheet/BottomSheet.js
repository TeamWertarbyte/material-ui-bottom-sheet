import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Paper } from 'material-ui'

/**
 * Material design bottom sheet
 * @see [Bottom Sheet](https://material.io/guidelines/components/bottom-sheets.html)
 */
export default class BottomSheet extends Component {
  getStyles () {
    const {
      open
    } = this.props

    return {
      root: {
        height: '100%',
        width: '100%',
        position: 'fixed',
        zIndex: 1300,
        left: 0,
        top: 0,
        backgroundColor: 'rgba(0,0,0,0.2)',
        transition: 'opacity 400ms cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: open ? null : 'none',
        opacity: open ? '1' : '0',
      },
      body: {
        width: '100%',
        maxHeight: open ? 600 : 0,
        position: 'fixed',
        bottom: 0,
        transition: 'max-height 400ms cubic-bezier(0.4, 0, 0.2, 1)'
      },
      action: {
        marginRight: 16,
        marginTop: -28,
        float: 'right'
      }
    }
  }

  handleClickOverlay = (e) => {
    e.preventDefault()
    this.props.onRequestClose()
  }

  render () {
    const styles = this.getStyles()

    return (
      <div
        style={{
          ...styles.root,
          ...this.props.style
        }}
        onClick={this.handleClickOverlay}
      >
        <Paper
          style={{
            ...styles.body,
            ...this.props.bodyStyle
          }}
          rounded={false}
          onClick={(e) => e.stopPropagation()}
        >
          {this.props.action && React.cloneElement(this.props.action, {
            style: {
              ...styles.action,
              ...this.props.actionStyle
            }
          })}
          <div style={this.props.contentStyle}>
            {this.props.children}
          </div>
        </Paper>
      </div>
    )
  }
}

BottomSheet.defaultProps = {
  open: null
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
  open: PropTypes.bool,
  /** Override the inline-styles of the root element. */
  style: PropTypes.object,
}
