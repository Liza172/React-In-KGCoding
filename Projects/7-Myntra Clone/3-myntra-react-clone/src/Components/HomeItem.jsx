import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../../Store/bagSlice";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";



const HomeItem = ({item}) =>
{

    const dispatch = useDispatch();
    const bagItems = useSelector(store => store.bag);
    const elementFound = bagItems.indexOf(item.id) >= 0;
    console.log(item.id, elementFound)

    const handleAddtoBag = () =>
    {
      dispatch(bagActions.addToBag(item.id));
    };
    const handleRemove = () =>
    {
        dispatch(bagActions.removeFromBag(item.id));
    };
  

  return (

    
      
      <div className="item-container">
        <img className="item-image" src = {item.image} alt="item image"/>
        <div className="rating">
            {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
            <span className="current-price">Rs {item.current_price}</span>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>

      {
        elementFound ?  (<button type="button" class="btn btn-danger" onClick={handleRemove}>
          <MdDeleteOutline />
          Remove  Bag
          </button>) : (<button type="button" class="btn     btn-success" onClick={handleAddtoBag}>
          <IoMdAddCircleOutline />
          Add to Bag
          </button> )
         
      }
      
       


      </div>
    );
}
export default HomeItem;