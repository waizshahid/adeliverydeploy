import React from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  Button,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';




class AccountDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      rowData: '',

      showModal: false,
      Orders: [
        { id: '1', startDate: '22 Nov ', address: "381 D Wapda Town", email: "xyz@gmail.com", lastName: "waishahid", phoneNumber: "JUST CBD", businessType: 'WaizXXYY', businessName: 'JUST XYZ', firstName: "Shady", city: 'hye hy yah', postalCode: 'B G', website: 'Accepted', amount: '23899.13', paidby: 'Cash', action: <Button style={{ fontFamily: "calibri", backgroundColor: "#dddddd" }} onClick={this.handleOpenModal}>Details</Button> },
        { id: '3', startDate: '29 Nov ', address: "383 D Wapda Town", email: "xyz@gmail.com", lastName: "aizshahid", phoneNumber: "JUST CBD", businessType: 'WaizXXZ', businessName: 'CD AD AN', firstName: "ShadyX", city: 'hyf hy yah', postalCode: 'B G', website: 'Accepted', amount: '28499.13', paidby: 'Cash', action: <Button style={{ fontFamily: "calibri", backgroundColor: "#dddddd" }} onClick={this.handleOpenModal}>Details</Button> },
        { id: '4', startDate: '30 Nov ', address: "384 D Wapda Town", email: "xyz@gmail.com", lastName: "waizsahid", phoneNumber: "JUST CBD", businessType: 'WaizXXE', businessName: 'CBD', firstName: "ShadyNB", city: 'hyg hy yah', postalCode: 'B G', website: 'Accepted', amount: '28929.13', paidby: 'Cash', action: <Button style={{ fontFamily: "calibri", backgroundColor: "#dddddd" }} onClick={this.handleOpenModal}>Details</Button> },
        { id: '5', startDate: '22 Dec ', address: "385 D Wapda Town", email: "xyz@gmail.com", lastName: "waizshhid", phoneNumber: "JUST CBD", businessType: 'WaizZZD', businessName: 'DD CC NN', firstName: "ShadyMA", city: 'hyh hy yah', postalCode: 'B G', website: 'Accepted', amount: '28991.13', paidby: 'Cash', action: <Button style={{ fontFamily: "calibri", backgroundColor: "#dddddd" }} onClick={this.handleOpenModal}>Details</Button> },
        { id: '6', startDate: '23 Dec ', address: "386 D Wapda Town", email: "xyz@gmail.com", lastName: "waizshahd", phoneNumber: "JUST CBD", businessType: 'WaizYYB', businessName: 'JUST BDA', firstName: "Exe", city: 'hyi hy yah', postalCode: 'B G', website: 'Accepted', amount: '2899.113', paidby: 'Cash', action: <Button style={{ fontFamily: "calibri", backgroundColor: "#dddddd" }} onClick={this.handleOpenModal}>Details</Button> },
        { id: '7', startDate: '24 Dec ', address: "387 D Wapda Town", email: "xyz@gmail.com", lastName: "waizshahi", phoneNumber: "JUST CBD", businessType: 'WaizNNC', businessName: 'Name', firstName: "Morris", city: 'hyj hy yah', postalCode: 'B G', website: 'Accepted', amount: '28990.13', paidby: 'Cash', action: <Button style={{ fontFamily: "calibri", backgroundColor: "#dddddd" }} onClick={this.handleOpenModal}>Details</Button> },
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
      <Grid container spacing={0} xs={12} style={{ padding: '0' }}>
        <Grid item xs={12} md={12}>

          <Card

            open={this.state.showModal}
            onClose={this.handleCloseModal}
          >




            <CardHeader title="User's Request Details" variant="h1" style={{ backgroundColor: "#dddddd" }} />
            <Divider />
            <CardContent>
              <Grid container spacing={2} xs={12} md={12}>
                <Grid item xs={6} md={6}>
                  <TextField id="search" label="First Name" defaultValue={this.state.rowData.firstName} type="search" style={{ width: "25ch", }} />
                </Grid>
                <Grid item xs={6} md={6}>
                  <TextField id="lastName" label="Last Name" defaultValue={this.state.rowData.lastName} type="search" style={{ width: "25ch", }} />
                </Grid>
                <Grid item xs={6} md={6}>
                  <TextField id="phoneNumber" label="Phone Number" defaultValue={this.state.rowData.phoneNumber} type="search" style={{ width: "25ch", }} />
                </Grid>
                <Grid item xs={6} md={6}>
                  <TextField id="email" label="Email" defaultValue={this.state.rowData.email} type="search" style={{ width: "25ch", }} />
                </Grid>
                <Grid item xs={6} md={6}>
                  <TextField id="email" label="Business Type" defaultValue={this.state.rowData.businessType} type="search" style={{ width: "25ch", }} />
                </Grid>
                <  Grid item xs={6} md={6}>
                  <TextField id="email" label="Business Name" defaultValue={this.state.rowData.businessName} type="search" style={{ width: "25ch", }} />
                </Grid>
                <  Grid item xs={6} md={6}>
                  <TextField id="email" label="Address" defaultValue={this.state.rowData.address} type="search" style={{ width: "25ch", }} />
                </Grid>

                <  Grid item xs={6} md={6}>
                  <TextField id="email" label="City" defaultValue={this.state.rowData.city} type="search" style={{ width: "25ch", }} />
                </Grid>
                <  Grid item xs={6} md={6}>
                  <TextField id="email" label="Postal Code" defaultValue={this.state.rowData.postalCode} type="search" style={{ width: "25ch", }} />
                </Grid>
                <  Grid item xs={6} md={6}>
                  <TextField id="email" label="Website" defaultValue={this.state.rowData.website} type="search" style={{ width: "25ch", }} />
                </Grid>
              </Grid>
              <Grid container spacing={4} xs={12} md={12}>
                <Grid item xs={6}>
                  <Button style={{ fontFamily: "calibri", backgroundColor: "#dddddd", marginLeft: "95vh", marginTop: '8vh' }}> Sumbit</Button>
                </Grid>

              </Grid>
            </CardContent>





          </Card>



        </Grid>


      </Grid>
    )
  }
}

export default AccountDetails;