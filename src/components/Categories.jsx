import React from 'react';

function Categories({ value, onClickCategory }) {
  const categories = ['All', 'Meat', 'Vegetarian', 'Grilled', 'Spicy', 'Closed'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, item) => (
          <li
            key={item}
            onClick={() => onClickCategory(item)}
            className={value === item ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
