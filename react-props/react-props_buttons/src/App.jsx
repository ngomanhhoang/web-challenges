export default function App(onClick) {
  return (
    <Button
      handleClick={onClick}
      color={"white"}
      disabled={false}
      text={"Hello World"}
    />
  );
}

function Button({ color, disabled, text }) {
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

  function handleClick() {
    console.log("You clicked me!");
  }
}
