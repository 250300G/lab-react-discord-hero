function Button({ text, variant }) {
  const isDark = variant === "dark";
  
  const btnStyle = {
    backgroundColor: isDark ? "#23272a" : "white",
    color: isDark ? "white" : "#23272a",
    padding: "15px 30px",
    borderRadius: "25px",
    border: "none",
    fontSize: "16px",
    fontWeight: "500",
 
  };

  return <button style={btnStyle}>{text}</button>;
}
export default Button;

 