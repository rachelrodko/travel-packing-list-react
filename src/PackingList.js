import { useState } from "react";

export function PackingList({ items, onDeleteItems, onPackedItems, onClear }) {
  const [sort, setSort] = useState("input");

  let sortedItems;

  if (sort === "input") sortedItems = items;
  if (sort === "desc")
    sortedItems = items.slice().sort((a, b) => a.desc.localeCompare(b.desc));
  if (sort === "packed")
    sortedItems = items.slice().sort((a, b) => +a.packed - +b.packed);
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItems={onDeleteItems}
            onPackedItems={onPackedItems}
            key={item.id}
          />
        ))}
      </ul>
      <div class="actions">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="input">Sort by input value</option>
          <option value="desc">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={() => onClear(items)}>Clear list</button>
      </div>
    </div>
  );
}
function Item({ item, onDeleteItems, onPackedItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onPackedItems(item)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.qty} {item.desc}
      </span>
      <button onClick={() => onDeleteItems(item)}>❌</button>
    </li>
  );
}
