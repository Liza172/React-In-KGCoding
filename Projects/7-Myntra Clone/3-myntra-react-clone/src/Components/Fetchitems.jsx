import {useDispatch, useSelector} from "react-redux"
import { itemActions } from "../../Store/itemsSlice";
import { useEffect } from "react";
import { fetchStatusActions } from "../../Store/fetchStatusSlice";

const Fetchitems = () =>
{
  const fetchStatus = useSelector(store => store.fetchStatus)

  const dispatch = useDispatch();

  useEffect(() =>
  {
    if(fetchStatus.fetchDone)
        return;
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());
    fetch("http://localhost:8080/items", {signal})
    .then((res) => res.json())
    .then(({items}) => {
      dispatch(fetchStatusActions.markFetchingDone());
      dispatch(fetchStatusActions.markFetchingFinished());
      dispatch(itemActions.addInitialItems(items));
  })
  return() =>
  {
    controller.abort();
  };
}, [fetchStatus])


  return <>
    <div>
    Fetch Done : {fetchStatus.fetchDone}
    Currently Fetching : {fetchStatus.currentlyFetching}
    </div>
  </>
}
export default Fetchitems;