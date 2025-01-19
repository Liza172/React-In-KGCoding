const WelcomeMsg = ({onGetPosts}) =>
{
  return <center className="WelComeMSG">
    <h1 >There is no posts.</h1>
    <button type="button"
    onClick={onGetPosts}
    className="btn btn-primary">Get Posts From Server</button>

    </center>
}
export default WelcomeMsg;