import React, { useState } from "react";

const MyComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [listItems, setListItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setListItems([...listItems, inputValue]);
    setInputValue("");
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded"
          placeholder="Enter an item"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      <ul className="list-disc pl-6">
        {listItems.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
