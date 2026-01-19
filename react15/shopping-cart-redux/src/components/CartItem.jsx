import { MdDelete } from "react-icons/md";

const CartItem = (props) => {
  const item = props.item;
  return (
    <div>

      <div>
        <img src={item.image} alt="item-img" />
      </div>

      <div>
        <h1>{item.title}</h1>
        <h1>{item.description}</h1>
        <div>
          <p>{item.price}</p>
          <div>
            <MdDelete />
          </div>
        </div>
      </div>

    </div>
  );
};

export default CartItem;
