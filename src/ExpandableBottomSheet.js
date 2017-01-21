import React, { Component, PropTypes } from 'react'
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
  wrapper: {
    width: '100%',
    minHeight: '100%',
    marginTop: '50vh'
  },
  body: {
    width: '100%',
    padding: 16,
    minHeight: '100vh',
    marginTop: 30
  }
}

export default class ExpandableBottomSheet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      outerTop: 0
    }
  }

  onOuterScroll(values) {
    if (this.state.outerTop !== values.top) {
      this.setState({ outerTop: values.top }, () => {
        if (values.top === 1 && this.props.onTopReached) {
          this.props.onTopReached()
        }
      })
    }
  }

  render() {
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
        <Scrollbars
          autoHide
          style={{
            ...styles.wrapper
          }}
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
                  marginTop: -44,
                  position: 'absolute',
                  transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: this.state.outerTop < 1 ? 'scale(1, 1)' : 'scale(0, 0)'
                }
              }) : null
            }
            <div style={this.props.contentStyle}>
              {this.props.children}
            </div>
          </Paper>
        </Scrollbars>
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
