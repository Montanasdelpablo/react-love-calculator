import React from 'react';
var request = require('request');

const body = {
  fontFamily: "Helvetica",
  fontSize: 24,
  fontWeight: 400
}

const red = {
  color: "#f64747",
}

var LoveCalculator = React.createClass({
  getInitialState: function () {
      return {
        fname: "",
        sname: "",
        percentage: '',
        result: '',
      }
  },
  componentDidMount: function () {
    this.fetchData()
  },

  fetchData: function () {
    var fname = this.state.fname
    var sname = this.state.sname
    var url = "https://love-calculator.p.mashape.com/getPercentage?fname="
    url += fname
    url += "&sname="
    url += sname

    var options = {
      url: url,
      headers: {
        "X-Mashape-Key": "N6NTiXhpnAmshtpPbqDwM5MV3Pi7p1GVSYbjsnVRe63tycLCqq",
        "Accept": "application/json"
      }
    }

    request(options, function (error, response, body){
      if (!error && response.statusCode === 200) {
        var parsedBody = JSON.parse(body)
        this.setState({
          fname: parsedBody.fname,
          sname: parsedBody.sname,
          percentage: parsedBody.percentage,
          result: parsedBody.result
        });

        console.log("Love is being calculated for: " + parsedBody.fname + " and " + parsedBody.sname)
        console.log("Love result is: " + parsedBody.percentage + "%")
        console.log("Tip: " + parsedBody.result )
      }
      else {
        console.log(error)
      }
    }.bind(this));
  },
  handleInput: function () {
    var fname = this.refs.fname.value
    var sname = this.refs.sname.value
    console.log("Adding these two people to the magic calculator: " + fname + " and " + sname )
    this.setState({
      fname: fname,
      sname: sname
    })
  },

  render: function() {
    return (
      <div style={body} className="love-calculator">
        <h1> <span style={red}> Love </span> Calculator </h1>

        <input ref="fname" onChange={this.handleInput} defaultValue={this.state.fname}/>
        <input ref="sname" onChange={this.handleInput} defaultValue={this.state.sname}/>
        <button onClick={this.fetchData}> Calculate love </button>

        <p> The <span style={red}> love </span> score is being calculated with: <strong>{this.state.fname}</strong> and <strong>{this.state.sname}</strong> </p>
        <p> Your score is {this.state.percentage}%.. </p>
        <p> <strong> Tip: </strong> {this.state.result} </p>

      </div>
    );
  }

});

export default LoveCalculator;
