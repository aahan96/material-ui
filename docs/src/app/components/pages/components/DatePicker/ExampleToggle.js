import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';

const DateTimeFormat = global.Intl.DateTimeFormat;

const optionsStyle = {
  maxWidth: 255,
  marginRight: 'auto',
};

export default class DatePickerExampleToggle extends React.Component {

  constructor(props) {
    super(props);

    const minDate = new Date();
    const maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 1);
    minDate.setHours(0, 0, 0, 0);
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    maxDate.setHours(0, 0, 0, 0);

    this.state = {
      minDate: minDate,
      maxDate: maxDate,
      autoOk: false,
      disableYearSelection: false,
    };
  }

  handleChangeMinDate = (x, date) => {
    this.setState({
      minDate: date,
    });
  };

  handleChangeMaxDate = (x, date) => {
    this.setState({
      maxDate: date,
    });
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  render() {
    return (
      <div>
        <DatePicker
          formatDate={new DateTimeFormat('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            weekday: 'short',
          }).format}
          floatingLabelText="Ranged Date Picker"
          autoOk={this.state.autoOk}
          minDate={this.state.minDate}
          maxDate={this.state.maxDate}
          disableYearSelection={this.state.disableYearSelection}
        />
        <div style={optionsStyle}>
          <DatePicker
            formatDate={new DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
              weekday: 'short',
            }).format}
            onChange={this.handleChangeMinDate}
            autoOk={this.state.autoOk}
            floatingLabelText="Min Date"
            defaultDate={this.state.minDate}
          />
          <DatePicker
            formatDate={new DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
              weekday: 'short',
            }).format}
            onChange={this.handleChangeMaxDate}
            autoOk={this.state.autoOk}
            floatingLabelText="Max Date"
            defaultDate={this.state.maxDate}
          />
          <Toggle
            name="autoOk"
            value="autoOk"
            label="Auto Accept"
            defaultToggled={this.state.autoOk}
            onToggle={this.handleToggle}
          />
          <Toggle
            name="disableYearSelection"
            value="disableYearSelection"
            label="Disable Year Selection"
            defaultToggled={this.state.disableYearSelection}
            onToggle={this.handleToggle}
          />
        </div>
      </div>
    );
  }
}
