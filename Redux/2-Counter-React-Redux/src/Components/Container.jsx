const Container = ({children}) =>
{
  return <>
    <div className="card" style={{width: "30rem"}}>
    <div className="card-body">
      {children}
    </div>
  </div>
  </>
}
export default Container;