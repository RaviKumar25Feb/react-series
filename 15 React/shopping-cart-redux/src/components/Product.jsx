import { useDispatch, useSelector } from "react-redux";

const Product = ({post}) => {

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>

      <div>
        <p>{post.title}</p>
      </div>

      <div>
        <p>{post.description}</p>
      </div>

      <div>
        <img src={post.image} alt="product-img" />
      </div>

      <div>
        <p>{post.price}</p>
      </div>

      <div>
        
        {
          cart.some((ele) => ele.id === cart.id) ?
          (<button onClick={removeFromCart}>
            Remove Item
          </button>) :
          (<button onClick={addToCart}>
            Add to Cart
          </button>)
        }

      </div>
    </div>
  );
};

export default Product;
