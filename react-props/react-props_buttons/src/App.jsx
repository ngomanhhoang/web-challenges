export default function App() {
  function handleClick() {
    console.log("clicked");
  }
  return (
    <Button
      handleClick={handleClick}
      color={"white"}
      disabled={false}
      text={"Hello World"}
    />
  );
}

function Button({ handleClick, color, disabled, text }) {
  console.log("HandleClick", handleClick);
  return (
    <button
      onClick={handleClick}
      style={{
        color,
        backgroundColor: "black",
        fontSize: "30px",
        padding: "10px 20px",
        borderRadius: "8px",
        cursor: "pointer",
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
