import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Paper } from 'material-ui'
import { Scrollbars } from 'react-custom-scrollbars'

const styles = {
  root: {
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    zIndex: 1300,
    left: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    transition: 'opacity 400ms cubic-bezier(0.4, 0, 0.2, 1)'
  },
  body: {
    width: '100%',
    marginTop: '50vh',
    height: '100vh'
  },
  content: {
    height: '100%'
  }
}

export default class ExpandableBottomSheet extends Component {
  constructor (props) {
    super(props)
    this.state = {
      outerTop: 0
    }
  }

  onOuterScroll (values) {
    if (this.state.outerTop !== values.top) {
      this.setState({outerTop: values.top}, () => {
        if (values.top >= 0.99 && this.props.onTopReached) {
          this.props.onTopReached()
        }
      })
    }
  }

  render () {
    return (
      <Scrollbars
        autoHide
        onUpdate={(values) => this.onOuterScroll(values)}
        style={{
          ...styles.root,
          ...this.props.style,
          pointerEvents: this.props.open ? null : 'none',
          opacity: this.props.open ? '1' : '0'
        }}
        onTouchTap={this.props.onRequestClose}
      >
        <Paper
          zDepth={5}
          style={{
            ...styles.body,
            ...this.props.bodyStyle
          }}
          rounded={false}
        >
          {this.props.action ? React.cloneElement(this.props.action, {
            style: {
              ...this.props.action.props.style,
              right: 16,
              marginTop: -28,
              position: 'absolute',
              transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
              transform: this.state.outerTop < 0.99 ? 'scale(1, 1)' : 'scale(0, 0)'
            }
          }) : null
          }
          {this.state.outerTop < 0.99 ? <div
            style={{
              ...styles.content,
              ...this.props.contentStyle,
              overflow: 'hidden'
            }}
          >
            {this.props.children}
          </div> : <Scrollbars
            style={{
              ...styles.content,
              ...this.props.contentStyle
            }}
          >
            {this.props.children}
          </Scrollbars>
          }
        </Paper>
      </Scrollbars>
    )
  }
}

ExpandableBottomSheet.propTypes = {
  action: PropTypes.object,
  actionStyle: PropTypes.object,
  bodyStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  open: PropTypes.bool.isRequired,
  style: PropTypes.object,
  onTopReached: PropTypes.func,
  onTop: PropTypes.func,
  overlay: PropTypes.bool
}
