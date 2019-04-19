import React from 'react';
import axios from 'axios';
import { Container, Grid, Header, Segment, Divider, Icon, Form, Button, } from 'semantic-ui-react';

class Cart extends React.Component {
    state = { taxnfees: {delivery: '', tax: ''}, cartItems: [], allItems:[],  edit:false, items: [], subTotal: null, tax: null, total: null }

  componentDidMount() {
        if(this.props.location.state){
          this.setState({ cartItems: this.props.location.state.cart })
        } else {
          this.setState({ cartItems: [0]})
        }
        axios.get('/api/all_items')
          .then(res => {
            this.setState({ allItems: res.data })
            this.getTax()
          })  
  }

  compareItems = () => {
      return this.state.cartItems.map(i => {
        return this.state.allItems.map(j => {
          if (i == j.id) {
            this.setState({items: [...this.state.items, j]})
          }
        })
    })
  }

  getTax = () => {
    axios.get('/api/taxnfees')
        .then(res => {
            this.setState({taxnfees: {delivery: res.data[0].delivery, tax: res.data[0].tax }})
            this.compareItems()
            this.findSubTotal()
            this.total()
          }
        )
  }

  removeItem = (id) => {
      this.state.items.map(i => {
      const item = this.state.items.filter(i => i.id !== id)
      this.setState({items: item})
    })
  }

  showSelectedItems = () => {
    return this.state.items.map(i => {
      return (
        <Segment style={{marginLeft: '10%', marginRight: '10%'}}>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Header as="h3">{i.name}</Header>
                <Header as="h3">Price: ${i.price}</Header>
              </Grid.Column>
              <Grid.Column>
                <Button negative 
                  content="Remove from cart"
                  style={{marginTop:'5%'}}
                  onClick={() => this.removeItem(i.id)}
                />  
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      )
    })
  }

  findSubTotal = () => {
    let subTotal = null
    this.state.items.map(i => {
      subTotal += i.price
    })
    this.setState({subTotal})
    this.findTax()
  }

  findTax = () => {
    let tax = null
    tax += (this.state.taxnfees.tax * .01) * this.state.subTotal
    tax = tax.toFixed(2)
    this.setState({tax})
  }

  total = () => {
    let total = null
    let subTotal = this.state.subTotal
    let tax = this.state.tax 
    let delivery = this.state.taxnfees.delivery 

    subTotal = parseFloat(subTotal)
    tax = parseFloat(tax)
    delivery = parseFloat(delivery)

    total += subTotal
    total += tax 
    total += delivery

    total = parseFloat(total)

    this.setState({total})
  }

  payment = () => {
    this.props.history.push({
      pathname: '/payment',
      state: { total: this.state.total }
    })
  }

 render () {
    return (
        <Container style={{width:'50%', paddingTop: '10%', paddingBottom: '10%'}}>
          <Segment>
            <Grid>
                <Grid.Row>
                  <Grid.Column>
                      <Header as='h2'>The Following Items are added to the Cart: </Header>
                        <Divider horizontal>
                          <Icon name='food'/>
                        </Divider>
                        {this.showSelectedItems()}
                        <Divider horizontal>
                          <Header as='h2'><Icon name='car' />Delivery/Pickup Option</Header>
                        </Divider>
                        <Form.Radio
                          label='Delivery'
                        />
                        <Form.Radio
                          label='Pickup'
                        />
                        <Divider horizontal>
                          <Header as='h2'><Icon name='credit card' />Taxes/Fees</Header>
                        </Divider>
                      <Container textAlign='justify'>
                        <Header as={'h4'}>Subtotal : ${this.state.subTotal }</Header>
                        <Header as={'h4'}>Delivery Fee : ${this.state.taxnfees.delivery}</Header>
                        <Header as={'h4'}>Tax : ${this.state.tax}</Header>
                      </Container>
                      <Divider horizontal>
                        <Header as='h4'><Icon name='dollar' />Total</Header>
                      </Divider>
                      <Header as={'h3'}>Total: ${this.state.total}</Header>
                  </Grid.Column>
              </Grid.Row>
              <Grid.Row  style={{padding:'20px'}}>
              <Button 
                positive 
                content="Checkout" 
                onClick={() => this.payment()} 
              />
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>
    )
 }
}
  
export default Cart;
