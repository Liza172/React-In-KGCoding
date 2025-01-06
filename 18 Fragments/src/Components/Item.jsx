const Item = (props) =>
{
  let {foodItem} = props
  return (
  <li key = {foodItem} className = "list-group-item">{foodItem}</li>
)

}
export default Item