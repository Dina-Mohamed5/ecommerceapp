import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './product.css';
import { fetchProducts } from '../ReduxToolkit/slices/product-slice';
import { useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { addToCart  } from '../ReduxToolkit/slices/cart-slice';


function Product() {
    let products = useSelector((state) => state.products);

    const dispatch = useDispatch();
    console.log(products)

    useEffect(() => {
        dispatch(fetchProducts());
    },[])

    return (
        <>
            <div className='containerCard'>
            {products.map((pro) =>{
                    return (
                        <div className='cards' key={pro.id}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={pro.image} style={{ height: '300px' }} />
                    <Card.Body>
                        <Card.Title>{pro.title}</Card.Title>
                        <Card.Text>
                            {pro.description}
                        </Card.Text>
                        <Card.Title>Price: {pro.price}</Card.Title>
                        <Button variant="primary" onClick={()=> dispatch(addToCart(pro))}>Add to cart</Button>
                    </Card.Body>
                </Card>
                </div>
                    )
                })}
            </div>
        </>
    )
}

export default Product;
