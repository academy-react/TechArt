import React, { useState } from 'react';

const FilterByPrice = () => {
  const initialItems = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 20 },
    { id: 3, name: 'Item 3', price: 15 },
    // Add more items with their respective prices
  ];

  const [items, setItems] = useState(initialItems);
  const [filteredItems, setFilteredItems] = useState(initialItems);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
    filterItems(e.target.value, maxPrice);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
    filterItems(minPrice, e.target.value);
  };

  const filterItems = (min, max) => {
    const filtered = items.filter((item) => {
      const itemPrice = item.price;
      return (!min || itemPrice >= parseInt(min)) && (!max || itemPrice <= parseInt(max));
    });
    setFilteredItems(filtered);
  };

  return (
    <div className="mx-auto max-w-2xl p-4 ">
      <div className="flex flex-col mb-4">
       
        <input
          type="number"
          placeholder="حداقل قیمت"
          value={minPrice}
          onChange={handleMinPriceChange}
          className="border border-gray-300 rounded-md p-2  w-full remove"
        />
       
          
           <input
          type="number"
          placeholder="حداکثر قیمت"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          className="border border-gray-300 rounded-md p-2 mt-2  w-full"
        /> 
      
        
      </div>

      {/* <ul>
        {filteredItems.map((item) => (
          <li key={item.id} className="border border-gray-300 rounded-md p-4 mb-2">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export  {FilterByPrice};