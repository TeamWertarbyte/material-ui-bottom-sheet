import React, { Component, PropTypes } from 'react'
import { Paper } from 'material-ui'

const styles = {
  root: {
    height: '100%',
    width: '100%',
    position: 'fixed',
    zIndex: 1300,
    left: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    transition: 'opacity 400ms cubic-bezier(0.4, 0, 0.2, 1)'
  },
  content: {
    width: '100%',
    maxHeight: 600,
    position: 'fixed',
    bottom: 0
  }
}

export class BottomSheet extends Component {
  constructor(props) {
    super(props)
  }

  render() {
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
            ...styles.content,
            ...this.props.contentStyle
          }}
          rounded={false}
        >
          {React.cloneElement(this.props.action, {
            style: { ...this.props.action.style, marginRight: 16, marginTop: -28, float: 'right', ...this.props.actionStyle }
          })}
          {this.props.children}
        </Paper>
      </div>
    )
  }
}

BottomSheet.defaultProps = {
  onRequestClose: () => {
  },
  open: false
}

BottomSheet.propTypes = {
  action: PropTypes.object,
  actionStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  onRequestClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
  style: PropTypes.object
}
