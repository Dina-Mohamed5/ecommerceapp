import { Container, Table ,Button} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart, clear } from "../ReduxToolkit/slices/cart-slice";
import '../cart.css'

function Cart(){
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const totalPrice = cart.reduce((acc,product) => {
      let qut = product.quantity * product.price;
      acc += qut;
      return acc;
    },0)
    return (
        <Container>
            <h2 className='welcome-cart'>Welcome To Cart ya dinaaaa</h2>
            <h4 className='totalPrice'>Total Price: {totalPrice.toFixed(2)} $</h4>
            <Button variant="primary" onClick={() => dispatch(clear())}>Clear Cart</Button>
    <Table striped bordered hover size="sm" className='table'>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Image</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((product) => {
            return (
                <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td><img src={product.image}  width='100px' height='100px' alt={product.title}/></td>
          <td>{product.quantity}</td>
          <td>{product.price}</td>
          <td><Button variant='danger' onClick={() => dispatch(deleteFromCart(product))}>Delete</Button></td>
        </tr>
            )
        })}
      </tbody>
    </Table>
        </Container>
    )
}

export default Cart;