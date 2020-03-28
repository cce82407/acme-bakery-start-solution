import React from 'react'
import { connect } from 'react-redux'
import { loadChef, updateChef } from './store'

class SingleChef extends React.Component {
  constructor(props) {
    let name = ''
    if (props.chef && props.chef.name) {
      name = props.chef.name
    }
    super()
    this.state = {
      name: name,
      error: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
  }
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getChef(id)
  }
  componentDidUpdate(prevProps) {
    if (prevProps.chef.name !== this.props.chef.name) {
      this.setState({ name: this.props.chef.name })
    }
  }
  async onSubmit(ev) {
    ev.preventDefault()
    try {
      this.props.update({
        id: this.props.chef.id,
        name: this.state.name
      }, this.props.history.push)

    }
    catch (ex) {
      this.setState({ error: ex.response.data.message })
    }
  }
  render() {
    const { onSubmit } = this
    const { name, error } = this.state
    return (
      <form onSubmit={onSubmit}>
        {
          error
        }
        <input value={name} onChange={ev => this.setState({ name: ev.target.value })} />
        <button disabled={!name}>Update</button>
      </form>
    )
  }
}

const mapStateToProps = ({ chef }) => ({
  chef,
})

const mapDispatchToProps = (dispatch) => {
  return {
    getChef: (id) => dispatch(loadChef(id)),
    // pass the "redirect" method to our thunk
    update: (chef, push) => dispatch(updateChef(chef, push))
  }
}

const Connected = connect(mapStateToProps, mapDispatchToProps)(SingleChef)

export default Connected
