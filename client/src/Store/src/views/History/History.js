import MaterialTable from 'material-table';
import React from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,


  Button,

} from '@material-ui/core';

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




class History extends React.Component {
  constructor () {
    super();
    this.state = {
      open: false,
      rowData: '',

      showModal: false,
      Orders : [
        {id:'1', User: '22 Nov ',Deliveryman: "381 D Wapda Town",Date:"xyz@gmail.com" ,Total:"waishahid@gmail.com",Status: "JUST CBD", action: <Button  style={{fontFamily:"calibri",backgroundColor:"#dddddd"}} onClick={this.handleOpenModal}>Details</Button>  },
        {id:'3', User: '29 Nov ',Deliveryman: "383 D Wapda Town", Date:"xyz@gmail.com" ,Total:"aizshahid@gmail.com",Status: "JUST CBD",action: <Button  style={{fontFamily:"calibri",backgroundColor:"#dddddd"}} onClick={this.handleOpenModal}>Details</Button>  },
        {id:'4', User: '30 Nov ',Deliveryman: "384 D Wapda Town",Date:"xyz@gmail.com" , Total:"waizsahid@gmail.com",Status: "JUST CBD",action: <Button  style={{fontFamily:"calibri",backgroundColor:"#dddddd"}} onClick={this.handleOpenModal}>Details</Button>  },
        {id:'5', User: '22 Dec ',Deliveryman: "385 D Wapda Town",Date:"xyz@gmail.com" , Total:"waizshhid@gmail.com",Status: "JUST CBD",action: <Button  style={{fontFamily:"calibri",backgroundColor:"#dddddd"}} onClick={this.handleOpenModal}>Details</Button>  },
        {id:'6', User: '23 Dec ',Deliveryman: "386 D Wapda Town",Date:"xyz@gmail.com" , Total:"waizshahd@gmail.com",Status: "JUST CBD" ,action: <Button  style={{fontFamily:"calibri",backgroundColor:"#dddddd"}} onClick={this.handleOpenModal}>Details</Button>  },
        {id:'7', User: '24 Dec ',Deliveryman: "387 D Wapda Town",Date:"xyz@gmail.com" , Total:"waizshahi@gmail.com",Status: "JUST CBD" ,action: <Button  style={{fontFamily:"calibri",backgroundColor:"#dddddd"}} onClick={this.handleOpenModal}>Details</Button>  },
      ]
    };
  
  }
  
  handleOpenModal = () => {
    this.setState({ showModal: true });
  }
  
  handleCloseModal= () => {
    this.setState({ showModal: false });
  }

  onRowClick= (e,rowData) => {
    this.setState({rowData: rowData})
  }

  render() {
    return (
      <Grid container spacing={2} xs={12} style={{padding: '3vh'}}>
       <Grid item xs={12} md={8}>
          <Card>

          <CardHeader

title="History"
style={{backgroundColor:"#dddddd"}}
/>
<Divider />



      <MaterialTable
        title=""
        onRowClick= {this.onRowClick}
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
          Add:AddBox,
          ViewColumn: ViewColumn,
          Clear: Clear,
          ResetSearch: Clear,
          Edit:Edit,
          Delete: Delete
        }}
        
         columns={[
          {
            title: 'ID', field: 'id',
            cellStyle: {
            fontFamily:"calibri",
            },
          },
          {
            title: 'Start Date', field: 'startdate',
            cellStyle: {
             
                fontFamily:"calibri",
                
            },
           
          },
          {
            title: 'User', field: 'user',
        
              cellStyle: {
                fontFamily:"calibri",
                
            },
          },
          {
            title: 'Store', field: 'store',
            cellStyle: {
              fontFamily:"calibri",
              },
          },
          {
            title: 'Status', field: 'status',
            cellStyle: {
              fontFamily:"calibri",
              },
          },
          {
            title: 'Amount', field: 'amount',
            cellStyle: {
              fontFamily:"calibri",
              },
          },
          {
            title: 'Paid By', field: 'paidby',
            cellStyle: {
              fontFamily:"calibri",
              },
          },
          {
            title: 'Action', field: 'action',
            cellStyle: {
              fontFamily:"calibri",
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
                if(rowData.id != order.id)
                {
                  newData.push(order)
                }
               // console.log(rowData.id)
                //if (order.name != value) newData.push(tableRow);
              });
              this.setState({Orders: newData})
              //setTableLanguages(newData);
            },

          })
        ]}
        options={{
          actionsColumnIndex: -1,
          tableLayout:"fixed",
       
          searchable:undefined,
            paging: false,
            actionsColumnIndex: -1,
      
        }}
      />

    </Card>
    
     


      </Grid>

      
    </Grid>
  )}
}

export default History;
