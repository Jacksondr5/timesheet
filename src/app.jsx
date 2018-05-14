import React from 'react';
import { withStyles } from '@material-ui/core';
import { AgGridReact } from 'ag-grid-react';
// import ag-grid-styles from './jss/ag-grid.json';
// import ag-grid-theme-balham from './jss/ag-theme-balham.json';

const drawerWidth = 240;
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  content: {
    // position: 'absolute',
    // marginLeft: drawerWidth,
    // [theme.breakpoints.up('md')]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    // },
    // width: `calc(100% - ${drawerWidth}px)`,
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      // marginTop: 64,
    },
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    height: '100%',
    // padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,

  filters: { padding: theme.spacing.unit },
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        { headerName: 'Make', field: 'make' },
        { headerName: 'Model', field: 'model' },
        { headerName: 'Price', field: 'price' },
      ],
      rowData: [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
      ],
    };
  }

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: '500px',
          width: '600px',
        }}
      >
        <AgGridReact columnDefs={this.state.columnDefs} rowData={this.state.rowData} />
      </div>
    );
  }
}

export default withStyles(styles)(App);
