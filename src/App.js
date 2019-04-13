import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import CurrencyInput from 'react-currency-input-field'
import './App.css'

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    marginTop: 16,
    margin: 16,
    fontSize: 14,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '70%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    marginLeft: 100
  },
  table: {
    minWidth: 100,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
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
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


class CustomizedTable extends Component {
  // const { classes } = props;
  red = {color: 'red'};
  green = {color: 'green'};

  state = {
    currency: 'Choose your currency',
    assets: [
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
        {id: 5, value: 0},
        {id: 6, value: 0},
        {id: 7, value: 0},
        {id: 8, value: 0},
        {id: 9, value: 0},
        {id: 10, value: 0},
        {id: 11, value: 0},
       ],

    longTermasset: [
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 0},
    ],

    liabilities: [
      {id: 1, value: 0},
      {id: 2, value: 0},
    ],

    debt: [
      {id: 1, value: 0},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0},
      {id: 5, value: 0},
      {id: 6, value: 0},
    ]
  }


   cashInvestments = [
    {id: 1, name: 'Chequing', interest: "0%", amount:0},
    {id: 2, name: 'Savings for Taxes', interest: "0%", amount:0},
    {id: 3, name: 'Rainy Day Fund', interest: "0%", amount:0},
    {id: 4, name: 'Savings for Fun', interest: "0%", amount:0},
    {id: 5, name: 'Savings for Travel', interest: "0%", amount:0},
    {id: 6, name: 'Savings for Personal Development', interest: "1.50%", amount:0},
    {id: 7, name: 'Investment1', interest: "2.3%", amount:0},
    {id: 8, name: 'Investment2', interest: "2%", amount:0},
    {id: 9, name: 'Investment3', interest: "5%", amount:0},
    {id: 10, name: 'Investment4', interest: "10%", amount:0},
    {id: 11, name: 'Investment5', interest: "0%", amount:0},


  ];


   longTermAsset = [
    {id:1, name: 'Primary Home', interest:"1%", amount: 0},
    {id:2, name:'Second Home', interest:"2%", amount:0},
    {id:3, name:'Other', interest:"", amount: 0},

  ];


   liabilities = [
    {id:1, name:'Credit Card 1', pay:"200.00", interest:"50%", amount:0},
    {id:2, name:'Credit Card 2', pay:"150.00", interest:"22%", amount:0},
  ]


   debt = [
    {id: 1, name: 'Mortgage 1', pay:"2000.00", interest:"2.60%", amount:0},
    {id: 2, name: 'Mortgage 2', pay:"3500.00", interest:"22%", amount: 0},
    {id:3,  name:'Line of Credit', pay:"500.00", interest: "5%", amount:0},
    {id:4,  name:'Investment Loan',pay: "700.00", interest:"6%", amount:0},
    {id:5,  name:'Student Loan', pay:"3500.00", interest:"22%", amount:0},
    {id:6,  name:'Car Loan', pay:"3500.00", interest:"22%", amount:0},
  ]


  changeCashInput = (id, event) => {
    //Spread Operator: "..."
    const cashInvest = {
      ...this.cashInvestments[id-1]
    };
    cashInvest.amount = event.target.value;

    const new_assets = [...this.cashInvestments];
    new_assets[id-1] = cashInvest;

    // console.log(new_assets);
    this.setState({cashInvestments: new_assets});
  }



  changeLongTerm = (id, event) => {
        //Spread Operator: "..."
        const longTermInvest = {
            ...this.longTermAsset[id-1]
        };
        longTermInvest.amount = event.target.value;

        const new_assets = [...this.longTermAsset];
        new_assets[id-1] = longTermInvest;

        // console.log(new_assets);
        this.setState({longTermAsset: new_assets});
    }


    changeLiabilities = (id, event) => {
        //Spread Operator: "..."
        const lia = {
            ...this.liabilities[id-1]
        };
        lia.amount = event.target.value;

        const new_lia = [...this.liabilities];
        new_lia[id-1] = lia;

        // console.log(new_assets);
        this.setState({liabilities: new_lia});
    }


    changeDebt = (id, event) => {
        //Spread Operator: "..."
        const debt = {
            ...this.debt[id-1]
        };
        debt.amount = event.target.value;

        const new_debt = [...this.debt];
        new_debt[id-1] = debt;

        // console.log(new_assets);
        this.setState({debt: new_debt});
    }



  render() {
    return (
        <Paper className="root">
          <h1> Tracking your Networth</h1>

          <TableRow>
          <select value={this.state.currency} onChange={(event) => {this.setState({currency: event.target.value});
                      console.log(this.state.currency);} }>
            <option value="CAD">CAD</option>
            <option value="USD">USD</option>
          </select>

          <button>Calculate</button>

          </TableRow>

          <TableRow>
            <CustomTableCell style={this.green}>Net Worth</CustomTableCell>
            <CustomTableCell align="right" style={this.green}>10000</CustomTableCell>
          </TableRow>

          <TableRow>
            <CustomTableCell style={this.green}>Assets:</CustomTableCell>
          </TableRow>

          <Table className="Assets">
            <TableHead>
              <TableRow>
                <CustomTableCell>Cash and Investments</CustomTableCell>
                <CustomTableCell align="right">Interest Rate</CustomTableCell>
                <CustomTableCell align="right"></CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.cashInvestments.map(asset => {
                return (
                    <TableRow className="assets" key={asset.id}>
                      <CustomTableCell component="th" scope="row">
                        {asset.name}
                      </CustomTableCell>
                      <CustomTableCell align="right" style={this.red}>{asset.interest}</CustomTableCell>

                      <CustomTableCell>
                        <div className="form-row">
                          <input type="number" style={this.red} min="0" step="0.01" data-number-to-fixed="2"
                                 data-number-stepfactor="100" className="currency" placeholder="Place input"
                                 onChange={(event) => { this.changeCashInput(asset.id, event) } }/>
                        </div>
                      </CustomTableCell>
                    </TableRow>
                );
              })}
            </TableBody>

            <TableHead>
              <TableRow>
                <CustomTableCell>Long Term Assets</CustomTableCell>
                <CustomTableCell></CustomTableCell>
                <CustomTableCell></CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.longTermAsset.map(longTermAsset => {
                return (
                    <TableRow className={longTermAsset.row} key={longTermAsset.id}>
                      <CustomTableCell component="th" scope="row">
                        {longTermAsset.name}
                      </CustomTableCell>
                      <CustomTableCell align="right" style={this.red}>{longTermAsset.interest}</CustomTableCell>
                      <CustomTableCell>
                        <div className="form-row">
                          <input type="number" style={this.red} min="0" step="0.01" data-number-to-fixed="2"
                                 data-number-stepfactor="100" className="currency"
                                 onChange={(event)=>{this.changeLongTerm(longTermAsset.id, event)}}/>
                        </div>
                      </CustomTableCell>
                    </TableRow>
                );
              })}
            </TableBody>

            <TableRow>
              <CustomTableCell style={this.green}>Total Assets:</CustomTableCell>
              <CustomTableCell/>
              <CustomTableCell align="right" style={this.green}>$10000</CustomTableCell>
            </TableRow>

          </Table>

          <Table className="Liabilities">
            <TableHead>
              <TableRow>
                <CustomTableCell>Short Tem Liabilities</CustomTableCell>
                <CustomTableCell align="right">Monthly payment</CustomTableCell>
                <CustomTableCell align="right">Interest Rate</CustomTableCell>
                <CustomTableCell/>
                <CustomTableCell/>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.liabilities.map(liabilities => {
                return (
                    <TableRow className={liabilities.row} key={liabilities.id}>
                      <CustomTableCell component="th" scope="row">
                        {liabilities.name}
                      </CustomTableCell>
                      <CustomTableCell align="right" style={this.red}>{liabilities.pay}</CustomTableCell>
                      <CustomTableCell align="right" style={this.red}>{liabilities.interest}</CustomTableCell>
                      <CustomTableCell>
                        <div className="form-row">
                          <input type="number" style={this.red} min="0" step="0.01" data-number-to-fixed="2"
                                 data-number-stepfactor="100" className="currency"
                                 onChange = {(event) => {this.changeLiabilities(liabilities.id, event)}}/>
                        </div>
                      </CustomTableCell>
                    </TableRow>
                );
              })}
            </TableBody>

            <TableHead>
              <TableRow>
                <CustomTableCell>Long Tem Debt</CustomTableCell>
                <CustomTableCell align="right"></CustomTableCell>
                <CustomTableCell align="right"></CustomTableCell>
                <CustomTableCell/>
                <CustomTableCell/>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.debt.map(debt => {
                return (
                    <TableRow className={debt.row} key={debt.id}>
                      <CustomTableCell component="th" scope="row">
                        {debt.name}
                      </CustomTableCell>
                      <CustomTableCell align="right" style={this.red}>{debt.pay}</CustomTableCell>
                      <CustomTableCell align="right" style={this.red}>{debt.interest}</CustomTableCell>
                      <CustomTableCell>
                        <div className="form-row">
                          <input type="number" align={"right"} style={this.red} min="0" step="0.01" data-number-to-fixed="2"
                                 data-number-stepfactor="100" className="currency"
                                 onChange = {(event => {this.changeDebt(debt.id, event)})}/>
                        </div>
                      </CustomTableCell>
                    </TableRow>
                );
              })}
            </TableBody>

            <TableRow>
              <CustomTableCell style={this.red}>Total Liabilities:</CustomTableCell>
              <CustomTableCell/>
              <CustomTableCell/>
              <CustomTableCell/>
              <CustomTableCell align="right" style={this.red}>$10000</CustomTableCell>
            </TableRow>

          </Table>


        </Paper>
    );
  }
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
