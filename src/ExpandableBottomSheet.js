import React, { Component, PropTypes } from 'react'
import { Paper } from 'material-ui'

const styles = {
  root: {
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    zIndex: 1300,
    left: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    transition: 'opacity 400ms cubic-bezier(0.4, 0, 0.2, 1)',
    overflowY: 'scroll'
  },
  wrapper: {
    width: '100%',
    minHeight: '100%',
    marginTop: '50vh',
    overflowY: 'scroll'
  },
  body: {
    width: '100%',
    padding: 16,
    minHeight: '100vh'
  }
}

export default class ExpandableBottomSheet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollTop: 0
    }
  }

  componentDidMount() {
    this.setState({ scrollTop: this.outer.getBoundingClientRect().top })
  }

  onOuterScroll(e) {
    const scrollTop = this.outer.getBoundingClientRect().top
    const oldScrollTop = this.state.scrollTop
    if (scrollTop <= 0 && oldScrollTop > 0) {
      if (this.props.onTopReached) {
        this.props.onTopReached()
      }
    } else {
      if (this.state.scrollTop < 1) {
        if (this.props.onTopLeft) {
          this.props.onTopLeft()
        }
      }
    }
    this.setState({
      scrollTop
    })
  }

  render() {
    return (
      <div
        style={{
          ...styles.root,
          ...this.props.style,
          pointerEvents: this.props.open ? null : 'none',
          opacity: this.props.open ? '1' : '0',
          overflowY: 'scroll'
        }}
        onScroll={(e) => this.onOuterScroll(e)}
        onTouchTap={this.props.onRequestClose}
      >
        <div
          style={{
            ...styles.wrapper,
            overflowY: 'hidden'

          }}
          ref={(outer) => this.outer = outer}
        >
          <Paper
            zDepth={5}
            style={{
              ...styles.body,
              ...this.props.bodyStyle,
              marginTop: 30
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
                  transform: this.state.scrollTop <= 0 ? 'scale(0, 0)' : 'scale(1, 1)'
                }
              }) : null
            }
            <div style={this.props.contentStyle}>
              {this.props.children}
            </div>
          </Paper>
        </div>
      </div>
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
