import MaterialTable from 'material-table';
import React from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  Fade,
  Modal,
  Backdrop,
  Typography,
  Button,

} from '@material-ui/core';
import CustomizedStepper from "./adminStepper";
import {
  Check,
  ChevronRight,
  SaveAlt,
  FilterList,
  FirstPage,
  LastPage,
  ChevronLeft,
  Search,
  Remove,
  ArrowDownward,
  AddBox,
  ViewColumn,
  Clear,
  Edit,
  Delete


} from "@material-ui/icons";

import {
  FaWindowClose
} from 'react-icons/fa';
import CardZZ from './adminCard';



class Orders extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      rowData: '',

      showModal: false,
      Orders: [
        { id: '1', startdate: '22 Nov ', address: "381 D Wapda Town", emailUser: "xyz@gmail.com", emailClient: "waishahid@gmail.com", orderTo: "JUST CBD", orderFrom: 'WaizXXYY', phoneClient: '+91 1234607890', phoneUser: '+91 7894607890', storeAddress: "Indira Cricle,India", user: 'hye hy yah', store: 'B G', status: 'Accepted', amount: '23899.13', paidby: 'Cash', action: <Button style={{ fontFamily: "calibri", backgroundColor: "#dddddd" }} onClick={this.handleOpenModal}>Details</Button> },
        { id: '3', startdate: '29 Nov ', address: "383 D Wapda Town", emailUser: "xyz@gmail.com", emailClient: "aizshahid@gmail.com", orderTo: "JUST CBD", orderFrom: 'WaizXXZ', phoneClient: '+91 1256780090', phoneUser: '+92 1234127890', storeAddress: "Indira Cricle,India", user: 'hyf hy yah', store: 'B G', status: 'Accepted', amount: '28499.13', paidby: 'Cash', action: <Button style={{ fontFamily: "calibri", backgroundColor: "#dddddd" }} onClick={this.handleOpenModal}>Details</Button> },
        { id: '4', startdate: '30 Nov ', address: "384 D Wapda Town", emailUser: "xyz@gmail.com", emailClient: "waizsahid@gmail.com", orderTo: "JUST CBD", orderFrom: 'WaizXXE', phoneClient: '+91 1234000090', phoneUser: '+93 5554607890', storeAddress: "Indira Cricle,India", user: 'hyg hy yah', store: 'B G', status: 'Accepted', amount: '28929.13', paidby: 'Cash', action: <Button style={{ fontFamily: "calibri", backgroundColor: "#dddddd" }} onClick={this.handleOpenModal}>Details</Button> },
        { id: '5', startdate: '22 Dec ', address: "385 D Wapda Town", emailUser: "xyz@gmail.com", emailClient: "waizshhid@gmail.com", orderTo: "JUST CBD", orderFrom: 'WaizZZD', phoneClient: '+91 1234123490', phoneUser: '+94 1234607890', storeAddress: "Indira Cricle,India", user: 'hyh hy yah', store: 'B G', status: 'Accepted', amount: '28991.13', paidby: 'Cash', action: <Button style={{ fontFamily: "calibri", backgroundColor: "#dddddd" }} onClick={this.handleOpenModal}>Details</Button> },
        { id: '6', startdate: '23 Dec ', address: "386 D Wapda Town", emailUser: "xyz@gmail.com", emailClient: "waizshahd@gmail.com", orderTo: "JUST CBD", orderFrom: 'WaizYYB', phoneClient: '+91 1345678874', phoneUser: '+95 8884607890', storeAddress: "Indira Cricle,India", user: 'hyi hy yah', store: 'B G', status: 'Accepted', amount: '2899.113', paidby: 'Cash', action: <Button style={{ fontFamily: "calibri", backgroundColor: "#dddddd" }} onClick={this.handleOpenModal}>Details</Button> },
        { id: '7', startdate: '24 Dec ', address: "387 D Wapda Town", emailUser: "xyz@gmail.com", emailClient: "waizshahi@gmail.com", orderTo: "JUST CBD", orderFrom: 'WaizNNC', phoneClient: '+91 8247567890', phoneUser: '+96 1114607890', storeAddress: "Indira Cricle,India", user: 'hyj hy yah', store: 'B G', status: 'Accepted', amount: '28990.13', paidby: 'Cash', action: <Button style={{ fontFamily: "calibri", backgroundColor: "#dddddd" }} onClick={this.handleOpenModal}>Details</Button> },
      ]
    };

  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  onRowClick = (e, rowData) => {
    this.setState({ rowData: rowData })
  }

  render() {
    return (
      <Grid container spacing={2} xs={12} style={{
        padding: '3vh', backgroundColor: "white",
        height: "100vh"
      }}>
        <Grid item xs={12} md={8}>
          <Card>


            <MaterialTable
              title=""
              onRowClick={this.onRowClick}
              icons={{
                Check: Check,
                DetailPanel: ChevronRight,
                Export: SaveAlt,
                Filter: FilterList,
                FirstPage: FirstPage,
                LastPage: LastPage,
                NextPage: ChevronRight,
                PreviousPage: ChevronLeft,
                Search: Search,
                ThirdStateCheck: Remove,
                SortArrow: ArrowDownward,
                Add: AddBox,
                ViewColumn: ViewColumn,
                Clear: Clear,
                ResetSearch: Clear,
                Edit: Edit,
                Delete: Delete
              }}

              columns={[
                {
                  title: 'ID', field: 'id',
                  cellStyle: {
                    fontFamily: "calibri",
                  },
                },
                {
                  title: 'Start Date', field: 'startdate',
                  cellStyle: {

                    fontFamily: "calibri",

                  },

                },
                {
                  title: 'User', field: 'user',

                  cellStyle: {
                    fontFamily: "calibri",

                  },
                },
                {
                  title: 'Store', field: 'store',
                  cellStyle: {
                    fontFamily: "calibri",
                  },
                },
                {
                  title: 'Status', field: 'status',
                  cellStyle: {
                    fontFamily: "calibri",
                  },
                },
                {
                  title: 'Amount', field: 'amount',
                  cellStyle: {
                    fontFamily: "calibri",
                  },
                },
                {
                  title: 'Paid By', field: 'paidby',
                  cellStyle: {
                    fontFamily: "calibri",
                  },
                },
                {
                  title: 'Action', field: 'action',
                  cellStyle: {
                    fontFamily: "calibri",
                  },
                },

              ]}
              data={this.state.Orders}
              options={{
                headerStyle: {
                  backgroundColor: '#dddddd',
                  color: '#black'
                }
              }}
              actions={[

                rowData => ({
                  icon: Delete,
                  tooltip: 'Delete User',
                  // eslint-disable-next-line no-restricted-globals
                  onClick: (event, rowData) => {
                    let newData = [];
                    this.state.Orders.map((order) => {
                      //console.log(order)
                      if (rowData.id != order.id) {
                        newData.push(order)
                      }
                      // console.log(rowData.id)
                      //if (order.name != value) newData.push(tableRow);
                    });
                    this.setState({ Orders: newData })
                    //setTableLanguages(newData);
                  },

                })
              ]}
              options={{
                actionsColumnIndex: -1,
                tableLayout: "fixed",


                paging: false,
                actionsColumnIndex: -1,

              }}
            />

          </Card>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className="Modal"
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
            open={this.state.showModal}
            onClose={this.handleCloseModal}
          >
            <Fade in={this.state.showModal}>
              <div className="Paper">
                <Card >
                  <CardHeader title="Order Details" subheader="September 14, 2016" subheader="September 14, 2016" height="100%" action={<Button onClick={this.handleCloseModal}><FaWindowClose /></Button>} ></CardHeader>
                  <Divider />

                  <CardContent>
                    <Grid container spacing={2} xs={12} style={{ height: "100%" }}>
                      <Grid item xs={12} md={4} style={{ height: "100%" }}>
                        <Card >
                          <CardHeader title="ORDER DETAILS" style={{ backgroundColor: "#dddddd" }} />
                          <Divider />

                          <MaterialTable
                            title="xxxxxx"
                            columns={[
                              {
                                title: 'Pizza', field: 'pizza', cellStyle: {
                                  width: "5vh"
                                },
                              },
                              { title: 'Spec.price', field: 'specprice' },
                              { title: 'Price', field: 'price', type: 'numeric' },
                              { title: 'Quantity', field: 'quantity', type: 'numeric' },
                              { title: 'Total', field: 'total', type: 'numeric' },
                            ]}
                            data={[
                              { pizza: 'Margeritta', specprice: '0', price: 1300, quantity: 1, total: 1300 },
                              { pizza: 'Margeritta', specprice: '0', price: 1300, quantity: 1, total: 1300 },
                              { pizza: 'Margeritta', specprice: '0', price: 1300, quantity: 1, total: 1300 },
                              { pizza: 'Margeritta', specprice: '0', price: 1300, quantity: 1, total: 1300 },
                              { pizza: 'Margeritta', specprice: '0', price: 1300, quantity: 1, total: 1300 },
                              { pizza: 'Margeritta', specprice: '0', price: 1300, quantity: 1, total: 1300 },
                              { pizza: 'Margeritta', specprice: '0', price: 1300, quantity: 1, total: 1300 },
                              { pizza: 'Margeritta', specprice: '0', price: 1300, quantity: 1, total: 1300 },
                              { pizza: 'Margeritta', specprice: '0', price: 1300, quantity: 1, total: 1300 },
                              { pizza: 'Margeritta', specprice: '0', price: 1300, quantity: 1, total: 1300 },

                            ]}

                            options={{

                              toolbar: false,
                              paging: false,
                              actionsColumnIndex: -1,
                            }}
                          />

                        </Card>
                      </Grid>

                      <Grid item xs={12} md={4}>

                        <Card style={{ height: "100%" }}>
                          <CardHeader title="ORDER STATUS" style={{ backgroundColor: "#dddddd" }} />
                          <Divider />
                          <CustomizedStepper />

                        </Card>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Card >
                          <CardHeader title="ED OE 22112019 0000019" style={{ backgroundColor: "#dddddd" }} />
                          <Divider />
                          <Grid container xs={12} spacing={2} style={{ marginTop: "3%", marginLeft: "3%", }}>
                            <Grid item xs={6}>
                              <div style={{ backgroundColor: "#dddddd", mraginTop: "8%", height: "70%", marginbottom: "-3%", }}>
                                <Typography style={{ marginLeft: "5%", marginTop: "%", fontFamily: "calibri", }}>
                                  Cash
                              </Typography>
                                <Typography style={{ marginLeft: "5%", marginBottom: "8%", fontFamily: "calibri", }}>
                                  <h4>2899.13</h4>
                                </Typography>
                              </div>


                            </Grid>
                            <Grid item xs={6}>
                              <div style={{ backgroundColor: "#dddddd", mraginTop: "8%", marginRight: "10%", height: "70%" }}>
                                <Typography style={{ marginLeft: "5%", marginTop: "%", fontFamily: "calibri", }}>
                                  Wallet
                              </Typography>
                                <Typography style={{ marginLeft: "5%", marginBottom: "8%", fontFamily: "calibri", }}>
                                  <h4>0.00</h4>
                                </Typography>
                              </div>


                            </Grid>
                          </Grid>
                          <Grid container xs={12} spacing={2} style={{ marginTop: "%", marginLeft: "3%", }}>
                            <Grid item xs={6}>
                              <div style={{ backgroundColor: "#dddddd", mraginTop: "%", height: "70%", }}>
                                <Typography style={{ marginLeft: "5%", marginTop: "%", fontFamily: "calibri", }}>
                                  Other
                              </Typography>
                                <Typography style={{ marginLeft: "5%", marginBottom: "6%", fontFamily: "calibri", }}>
                                  <h4>2899.13</h4>
                                </Typography>
                              </div>


                            </Grid>
                            <Grid item xs={6}>
                              <div style={{ backgroundColor: "#dddddd", mraginTop: "%", marginRight: "10%", height: "70%" }}>
                                <Typography style={{ marginLeft: "5%", marginTop: "%", fontFamily: "calibri", }}>
                                  Promo Bonus
                              </Typography>
                                <Typography style={{ marginLeft: "5%", marginBottom: "6%", fontFamily: "calibri", }}>
                                  <h4>0.00</h4>
                                </Typography>
                              </div>


                            </Grid>
                          </Grid>
                          <Grid container xs={12} spacing={0} style={{ marginTop: "3%", marginLeft: "3%", }}>
                            <Grid item xs={10}>
                              <h5>Delivery Price</h5>
                            </Grid>
                            <Grid item xs={2}>
                              <h5>2745.73</h5>
                            </Grid>
                          </Grid>
                          <Grid container xs={12} spacing={0} style={{ marginTop: "%", marginLeft: "3%", }}>
                            <Grid item xs={10}>
                              <span> Delivery Price</span>
                            </Grid>
                            <Grid item xs={2}>
                              <span>2745.73</span>
                            </Grid>
                          </Grid>
                          <Grid container xs={12} spacing={0} style={{ marginTop: "%", marginLeft: "3%", }}>
                            <Grid item xs={10}>
                              <span> Tax Price</span>
                            </Grid>
                            <Grid item xs={2}>
                              <span>274</span>

                            </Grid>
                          </Grid>
                          <hr style={{ marginTop: "3%", marginbottom: "3%" }}></hr>
                          <Grid container xs={12} spacing={0} style={{ marginTop: "3%", marginLeft: "3%", }}>
                            <Grid item xs={10}>
                              <h5>Order Price</h5>
                            </Grid>
                            <Grid item xs={2}>
                              <h5>2745.73</h5>
                            </Grid>
                          </Grid>
                          <Grid container xs={12} spacing={0} style={{ marginTop: "%", marginLeft: "3%", }}>
                            <Grid item xs={10}>
                              <span> Order Price</span>
                            </Grid>
                            <Grid item xs={2}>
                              <span>2745.73</span>
                            </Grid>
                          </Grid>
                          <Grid container xs={12} spacing={0} style={{ marginTop: "%", marginLeft: "3%", }}>
                            <Grid item xs={10}>
                              <span> Tax Price</span>
                            </Grid>
                            <Grid item xs={2}>
                              <span>274</span>

                            </Grid>
                          </Grid>
                          <hr style={{ marginTop: "3%", marginbottom: "3%" }}></hr>
                          <Grid container xs={12} spacing={0} style={{ marginTop: "3%", marginLeft: "3%", }}>
                            <Grid item xs={10}>
                              <span>Store bear delivery fee</span>
                            </Grid>
                            <Grid item xs={2}>
                              <span>NO</span>
                            </Grid>
                          </Grid>
                          <Grid container xs={12} spacing={0} style={{ marginTop: "%", marginLeft: "3%", }}>
                            <Grid item xs={10}>
                              <span>Delivery paid order cash to</span>
                            </Grid>
                            <Grid item xs={2}>
                              <span>NO</span>
                            </Grid>
                          </Grid>
                          <Grid container xs={12} spacing={0} style={{ marginTop: "%", marginLeft: "3%", }}>
                            <Grid item xs={10}>
                              <span>Store</span>
                            </Grid>

                          </Grid>
                          <hr style={{ marginTop: "3%", marginbottom: "3%" }}></hr>

                          <Grid container xs={12} spacing={0} style={{ marginTop: "3%", marginLeft: "3%", }}>
                            <Grid item xs={10}>
                              <span>Store Profit</span>
                            </Grid>
                            <Grid item xs={2}>
                              <span>127.12</span>
                            </Grid>
                          </Grid>
                          <Grid container xs={12} spacing={0} style={{ marginTop: "%", marginLeft: "3%", }}>
                            <Grid item xs={10}>
                              <span style={{ color: "red" }}>Settlement with store</span>
                            </Grid>
                            <Grid item xs={2}>
                              <span style={{ color: "red" }}>126.12</span>
                            </Grid>
                          </Grid>

                          <hr style={{ marginTop: "3%", marginbottom: "3%" }}></hr>

                          <Grid container xs={12} spacing={0} style={{ marginTop: "3%", marginLeft: "3%", }}>
                            <Grid item xs={10}>
                              <span>Deliveryman Profit</span>
                            </Grid>
                            <Grid item xs={2}>
                              <span>127.12</span>
                            </Grid>
                          </Grid>
                          <Grid container xs={12} spacing={0} style={{ marginTop: "%", marginLeft: "3%", }}>
                            <Grid item xs={10}>
                              <span style={{ color: "red" }}>Settlement with deliveryman</span>
                            </Grid>
                            <Grid item xs={2}>
                              <span style={{ color: "red" }}>126.12</span>
                            </Grid>
                          </Grid>

                          <hr style={{ marginTop: "3%", marginbottom: "3%" }}></hr>

                          <Grid container xs={12} spacing={0} style={{ marginTop: "3%", marginLeft: "3%", }}>
                            <Grid item xs={10}>
                              <span>Admin order profit</span>
                            </Grid>
                            <Grid item xs={2}>
                              <span>127.12</span>
                            </Grid>
                          </Grid>
                          <Grid container xs={12} spacing={0} style={{ marginTop: "%", marginLeft: "3%", }}>
                            <Grid item xs={10}>
                              <span style={{ color: "red" }}>Settlement with admin</span>
                            </Grid>
                            <Grid item xs={2}>
                              <span style={{ color: "red" }}>126.12</span>
                            </Grid>
                          </Grid>
                        </Card >
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </div>
            </Fade>
          </Modal>



        </Grid>

        <Grid item xs={12} md={4}>
          <CardZZ rowData={this.state.rowData} />
        </Grid>
      </Grid>
    )
  }
}

export default Orders;