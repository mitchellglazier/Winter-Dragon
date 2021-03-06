import React from 'react';
import axios from 'axios';
import {Form, Container, Button, List, Header, Segment} from 'semantic-ui-react';
import { Calendar } from 'react-calendar';
import styled from 'styled-components';
import reservation_header from '../assets/reservation_header.jpg';
class ReservationForm extends React.Component {
    defaultValues = {id: '', name:'', phone:'', email:'', date:'', time:'', party:''}
    state = {...this.defaultValues}
    state={ date: new Date(), } 
    onChange = date => this.setState({date})
    componentDidMount(){
        if(this.props.id){
            this.setState({...this.props})
        }
    }
   handleChange = (e) => {
        const { target: {name, value}} = e;
        this.setState({ [name]: value })
    }
    addReserv = (reservation) => {
        axios.post('/api/reservations', { reservation })
        .then(res => {
            this.setState()
        })
    }
    handleSubmit = (e) => {
        const { submit } = this.props
        e.preventDefault();
        const reservation = { ...this.state }
        this.addReserv(reservation)
        this.setState({...this.defaultValues})
    }
    handlePageChange() {
        window.location = "/confirmation";
      }
    render() {
        const {name, phone, email, date, time, party}=this.state;
        return(
            <div style={{}}>
                <Reservation>
                    <Header as='h1' style={{fontSize: '50px', color:'white'}}>RESERVATION</Header>
               </Reservation>
                <Container>
                    <br/>
                <Segment style={{padding: "10px 30px"}}>
                <div>
                    <br/>
                    <br/>
                    <p>Please fill out the information in the Form below.<br/>
                    </p>
                    Please Note: Submitting this form does not guarantee the reservation.
                    <br/><br />
                </div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths="equal">
                    <List>
                    <Form.Input fluid
                    style={{width:'500px'}}
                    value={name}
                    label="Name"
                    name={"name"}
                    onChange={this.handleChange}
                    required
                    placeholder="Please Enter Your Full Name"/>
                    <br />
                    <Form.Input fluid
                    value={phone}
                    label="Phone"
                    name={"phone"}
                    onChange={this.handleChange}
                    required
                    placeholder="Phone Number"/>
                    <br />
                    <Form.Input fluid
                    value={email}
                    label="Email"
                    name={"email"}
                    onChange={this.handleChange}
                    placeholder="Email address"
                    required
                    />
                    <br />
                    
                    <div>
                    <strong>Date Requested *</strong><br/><br/>
                    <Calendar fluid
                    style={{boxSizing:"border-box"}}
                    label="Date"
                    name={"date"}
                    value={date}
                    onChange={this.onChange}
                    required
                    placeholder="Date Requested"/>
                    </div>
                    <br /><br/>
                    <Form.Input fluid
                    value={time}
                    label="Time"
                    name={"time"}
                    onChange={this.handleChange}
                    placeholder="Time Requested"
                    required
                    />
                    <br />
                    <br/>
                    <Form.Input fluid
                    value={party}
                    label="Party"
                    name={"party"}
                    onChange={this.handleChange}
                    required
                    placeholder="Please Enter the Number of People Attending" />
                    <br />
                    </List>
                    </Form.Group>
                        <Form.Button primary onClick={this.handlePageChange} style={{backgroundColor:'#e0d538',
                            color:'black',
                            height:'60px',
                            fontSize:'20px'}}>Submit
                        </Form.Button>
                </Form>
                </Segment>
                </Container>
                <br/><br/><br/>
            </div>
        )
    }
}
export default ReservationForm;
const Reservation = styled.div`
background-image: url(${reservation_header});
text-align: center;
color: white;
min-height: 200px;
padding: 265px 0px;
height: 100% !important;
position: relative;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`