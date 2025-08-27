import { useState } from "react";
import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";

export default function FavoriteButton() {
  // This should be a state variable.
  const [isFavorite, setIsFavourite] = useState(false)

  function toggleClick() {
    setIsFavourite(!isFavorite)
  }

  return (
    <button
      className="favorite-button"
      onClick={toggleClick}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
