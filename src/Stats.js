export function Stats({ items }) {
  const numItems = items.length;
  const packedItems = items.filter((x) => x.packed).length;
  const percent = Math.round((packedItems / numItems) * 100);
  console.log(percent);

  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  } else {
    return (
      <footer className="stats">
        <em>
          {percent === 100
            ? `You've packed everthing! Ready to go! ✈️`
            : `You have ${numItems} items on your list and you already packed
        ${packedItems} ${percent}%
       💼`}
        </em>
      </footer>
    );
  }
}
