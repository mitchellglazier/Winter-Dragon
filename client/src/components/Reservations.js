import React from 'react'
import axios from 'axios'
import { Container, Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class Reservations extends React.Component {
   state= { reservations: [] }

   componentDidMount() {
       axios.get('/api/reservations')
       .then(res => {
           this.setState({ reservations: res.data})
       })
   }

   removeReserv = (id) => {
    axios.delete(`/api/reservations/${id}`)
    .then(res => {
         this.setState({reservations: res.data})
    });
    return (
        window.location.href="/admin"
    )
    }

   showReservations = () => {
       return this.state.reservations.map(d => {
           return (
             <Table.Body key={d.id}>
             <Table.Row>
                 <Table.Cell>{d.name}</Table.Cell>
                 <Table.Cell>{d.phone}</Table.Cell>
                 <Table.Cell>{d.email}</Table.Cell>
                 <Table.Cell>{d.date}</Table.Cell>
                 <Table.Cell>{d.time}</Table.Cell>
                 <Table.Cell>{d.party}</Table.Cell>
                 <Table.Cell>
                <Button color='red' style={{margin:'10px'}}>
                  <Link style={{color:'white'}}
                        to={"/reservations"}
                        onClick={() => this.removeReserv(d.id)}>
                    Delete
                  </Link>
                </Button>
              </Table.Cell>
             </Table.Row>
             </Table.Body>

           )
       })
   }

   render() {
       return (
           <Container>
               <Table singleLine>
                   <Table.Header>
                       <Table.Row>
                           <Table.HeaderCell>Name </Table.HeaderCell>
                           <Table.HeaderCell>Phone</Table.HeaderCell>
                           <Table.HeaderCell>Email</Table.HeaderCell>
                           <Table.HeaderCell>Requested Date</Table.HeaderCell>
                           <Table.HeaderCell>Requested Time</Table.HeaderCell>
                           <Table.HeaderCell>Number of People</Table.HeaderCell>
                       </Table.Row>
                       </Table.Header>
                       {this.showReservations()}
               </Table>
           </Container>
       );
   }
}


export default Reservations
