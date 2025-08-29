import "./Divider.css";

export default function Divider({show = true}) {
  if(!show) return null
  return <hr className="divider" role="none" />;
}
