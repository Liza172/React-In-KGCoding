import BagSummery from "../Components/BagSummery"
import BagItem from "../Components/BagItem"
import { useSelector } from "react-redux"
const Bag = () =>
{
  
  const bagItems = useSelector(state => state.bag);
  const items = useSelector(state => state.items);
  const finalItems = items.filter(item =>
  {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  }
  )
  return <main>
      <div className="bag-page">
        
        <BagSummery/>
        {finalItems.map(item =>  <BagItem item = {item}/>)}
       
      </div>
    </main>
}
export default Bag