import "../css/Button.css";

function Button(props) {
    function consoleName() {
        console.log(props.name);
    }
  return (
   <button onClick={consoleName}>Buy Now</button>
  )
}

export default Button;
