import { useState } from "react";
import { PackingList } from "./PackingList";
import Logo from "./Logo";
import Form from "./Form";
import { Stats } from "./Stats";
export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleDeleteItems(item) {
    setItems(function (items) {
      return items.filter((x) => item.id !== x.id);
    });
  }

  function handlePackedItems(item) {
    setItems((items) =>
      items.map((x) => (x.id === item.id ? { ...x, packed: !x.packed } : x))
    );
  }

  function handleClear(items) {
    const confirmed = window.confirm(
      "Are you sure you want to delete all the items?"
    );
    if (confirmed) return setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onPackedItems={handlePackedItems}
        onClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}
