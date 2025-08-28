import "./Card.css";

export default function Card({ name, color }) {
  return (
    <p className={`card card--${color.toLowerCase()}`}>
      {name}
      ({color})
    </p>
  );
}
