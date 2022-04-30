import React from "react";

class CreateMonitoredDatum extends React.Component {
  state = {
    event: '',
    date: '',
    crop: '',
  }
  create = (e) => {
    e.preventDefault();
    if (this.state.event === "") {
      alert('field event is mandatory!');
      return
    }
    this.props.createHandle(this.state);
    this.setState({ event: "", date: "", crop: "" })
  }

  render() {
    return (
      <div className="ui main">
        <h2>Load event</h2>
        <form className="ui form" onSubmit={this.create}>
          <div className="field">
            <label>Event</label>
            <select name="event" onChange={(e) => this.setState({ event: e.target.value })}>
              <option value="start">Start</option>
              <option value="end">End</option>
              <option value="fertilization">Fertilization</option>
              <option value="maintenance">Maintenance</option>
              <option value="irrigation">Irrigation</option>
            </select>
          </div>
          <div className="field">
            <label>Date</label>
            <input type="date" name="date" value={this.state.date} onChange={(e) => this.setState({ date: e.target.value })} />
          </div>
          <div className="field">
            <label>Crop</label>
            <input type="text" name="crop" placeholder="crop" value={this.state.crop} onChange={(e) => this.setState({ crop: e.target.value })} />
          </div>
          <button className="ui button blue">Load</button>
        </form>
      </div>
    );
  }
}

export default CreateMonitoredDatum;