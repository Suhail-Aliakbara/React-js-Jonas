import React from "react";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to packing list 🚀</em>
      </p>
    );
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! ready to go ✈️"
          : ` You have ${totalItems} item in you list, and you already packed 
        ${packedItems} : (${percentage}%)`}
      </em>
    </footer>
  );
}
