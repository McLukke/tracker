import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import CurrencyInput from 'react-currency-input-field'
import { resolve } from "dns";

import data from "./data.json";
import "./App.css";

const {
  longTermAsset: longTermAssetData,
  liabilities: liabilitiesData,
  cashInvestments: cashInvestmentsData,
  debt: debtData
} = data;

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    marginTop: 16,
    margin: 16,
    fontSize: 14
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "70%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
    marginLeft: 100
  },
  table: {
    minWidth: 100
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

// let id = 0;
//
// function clearID(){
//   id = 0;
// }

// function createData1(name, interest, amount) {
//   id += 1;
//   return { id, name, interest, amount };
// }
//
//
// function createData2(name, pay, interest, amount) {
//   id += 1;
//   return { id, name, pay, interest, amount };
// }

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

class CustomizedTable extends Component {
  // const { classes } = props;
  red = { color: "red" };
  green = { color: "green" };

  state = {
    currency: "Choose your currency",
    longTermAsset: [],
    liabilities: [],
    cashInvestments: [],
    debt: []
  };

  componentDidMount() {
    const setupInputs = arr => arr.map(_ => ({ [_.id]: _.amount }));

    this.setState({
      cashInvestments: setupInputs(cashInvestmentsData),
      debt: setupInputs(debtData),
      liabilities: setupInputs(liabilitiesData),
      longTermAssets: setupInputs(longTermAssetData)
    });
  }

  handleInput = (segment, id, event) => {
    console.log("segment: ", segment);
    const newSegment = this.state[segment];
    console.log("newSegment: ", newSegment);
    if (newSegment[id] === event.target.value) {
      return;
    }

    newSegment[id] = event.target.value;

    this.setState({ [segment]: newSegment });
  };

  render() {
    console.log("state: ", this.state);

    return (
      <Paper className="root">
        <h1> Tracking your Networth</h1>

        <TableRow>
          <select
            value={this.state.currency}
            onChange={event => {
              this.setState({ currency: event.target.value });
              console.log(this.state.currency);
            }}
          >
            <option value="CAD">CAD</option>
            <option value="USD">USD</option>
          </select>

          <button>Calculate</button>
        </TableRow>

        <TableRow>
          <CustomTableCell style={this.green}>Net Worth</CustomTableCell>
          <CustomTableCell align="right" style={this.green}>
            10000
          </CustomTableCell>
        </TableRow>

        <TableRow>
          <CustomTableCell style={this.green}>Assets:</CustomTableCell>
        </TableRow>

        <Table className="Assets">
          <TableHead>
            <TableRow>
              <CustomTableCell>Cash and Investments</CustomTableCell>
              <CustomTableCell align="right">Interest Rate</CustomTableCell>
              <CustomTableCell align="right" />
            </TableRow>
          </TableHead>
          <TableBody>
            {cashInvestmentsData.map(asset => {
              return (
                <TableRow className="assets" key={asset.id}>
                  <CustomTableCell component="th" scope="row">
                    {asset.name}
                  </CustomTableCell>
                  <CustomTableCell align="right" style={this.red}>
                    {asset.interest}
                  </CustomTableCell>

                  <CustomTableCell>
                    <div className="form-row">
                      <input
                        type="number"
                        style={this.red}
                        min="0"
                        step="0.01"
                        data-number-to-fixed="2"
                        data-number-stepfactor="100"
                        className="currency"
                        placeholder="Place input"
                        onChange={event =>
                          this.handleInput("cashInvestments", asset.id, event)
                        }
                        value={
                          this.state.cashInvestments[asset.id] || asset.amount
                        }
                      />
                    </div>
                  </CustomTableCell>
                </TableRow>
              );
            })}
          </TableBody>

          <TableHead>
            <TableRow>
              <CustomTableCell>Long Term Assets</CustomTableCell>
              <CustomTableCell />
              <CustomTableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {longTermAssetData.map(longTermAsset => {
              return (
                <TableRow className={longTermAsset.row} key={longTermAsset.id}>
                  <CustomTableCell component="th" scope="row">
                    {longTermAsset.name}
                  </CustomTableCell>
                  <CustomTableCell align="right" style={this.red}>
                    {longTermAsset.interest}
                  </CustomTableCell>
                  <CustomTableCell>
                    <div className="form-row">
                      <input
                        type="number"
                        style={this.red}
                        min="0"
                        step="0.01"
                        data-number-to-fixed="2"
                        data-number-stepfactor="100"
                        className="currency"
                        onChange={event =>
                          this.handleInput(
                            "longTermAsset",
                            longTermAsset.id,
                            event
                          )
                        }
                        value={
                          this.state.longTermAsset[longTermAsset.id] ||
                          longTermAsset.amount
                        }
                      />
                    </div>
                  </CustomTableCell>
                </TableRow>
              );
            })}
          </TableBody>

          <TableRow>
            <CustomTableCell style={this.green}>Total Assets:</CustomTableCell>
            <CustomTableCell />
            <CustomTableCell align="right" style={this.green}>
              $10000
            </CustomTableCell>
          </TableRow>
        </Table>

        <Table className="Liabilities">
          <TableHead>
            <TableRow>
              <CustomTableCell>Short Tem Liabilities</CustomTableCell>
              <CustomTableCell align="right">Monthly payment</CustomTableCell>
              <CustomTableCell align="right">Interest Rate</CustomTableCell>
              <CustomTableCell />
              <CustomTableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {liabilitiesData.map(liabilities => {
              return (
                <TableRow className={liabilities.row} key={liabilities.id}>
                  <CustomTableCell component="th" scope="row">
                    {liabilities.name}
                  </CustomTableCell>
                  <CustomTableCell align="right" style={this.red}>
                    {liabilities.pay}
                  </CustomTableCell>
                  <CustomTableCell align="right" style={this.red}>
                    {liabilities.interest}
                  </CustomTableCell>
                  <CustomTableCell>
                    <div className="form-row">
                      <input
                        type="number"
                        style={this.red}
                        min="0"
                        step="0.01"
                        data-number-to-fixed="2"
                        data-number-stepfactor="100"
                        className="currency"
                        onChange={event =>
                          this.handleInput("liabilities", liabilities.id, event)
                        }
                        value={
                          this.state.liabilities[liabilities.id] ||
                          liabilities.amount
                        }
                      />
                    </div>
                  </CustomTableCell>
                </TableRow>
              );
            })}
          </TableBody>

          <TableHead>
            <TableRow>
              <CustomTableCell>Long Tem Debt</CustomTableCell>
              <CustomTableCell align="right" />
              <CustomTableCell align="right" />
              <CustomTableCell />
              <CustomTableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {debtData.map(debt => {
              return (
                <TableRow className={debt.row} key={debt.id}>
                  <CustomTableCell component="th" scope="row">
                    {debt.name}
                  </CustomTableCell>
                  <CustomTableCell align="right" style={this.red}>
                    {debt.pay}
                  </CustomTableCell>
                  <CustomTableCell align="right" style={this.red}>
                    {debt.interest}
                  </CustomTableCell>
                  <CustomTableCell>
                    <div className="form-row">
                      <input
                        type="number"
                        align={"right"}
                        style={this.red}
                        min="0"
                        step="0.01"
                        data-number-to-fixed="2"
                        data-number-stepfactor="100"
                        className="currency"
                        onChange={event =>
                          this.handleInput("debt", debt.id, event)
                        }
                        value={this.state.debt[debt.id] || debt.amount}
                      />
                    </div>
                  </CustomTableCell>
                </TableRow>
              );
            })}
          </TableBody>

          <TableRow>
            <CustomTableCell style={this.red}>
              Total Liabilities:
            </CustomTableCell>
            <CustomTableCell />
            <CustomTableCell />
            <CustomTableCell />
            <CustomTableCell align="right" style={this.red}>
              $10000
            </CustomTableCell>
          </TableRow>
        </Table>
      </Paper>
    );
  }
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedTable);
