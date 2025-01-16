import styles from "./ButtonsContainer.module.css"
const ButtonsContainer = ({onClickBtn}) => {

  const buttonnames = ['C', '1', '2', '+', '3', '4', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
  return(
    
    <div className={styles.buttons_container}>
      {buttonnames.map(buttonnames => 
      <button className={styles.button} onClick={() => onClickBtn(buttonnames)}>{buttonnames}</button>)}
        
        
      </div>
  )
}
export default ButtonsContainer