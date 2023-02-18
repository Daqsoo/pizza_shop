import React from 'react';

function Categories() {
  const [activeCategorie, setActiveCategorie] = React.useState(0);

  const categories = ['All', 'Meat', 'Vegetarian', 'Grilled', 'Spicy', 'Closed'];

  const onClickCategorie = (index) => {
    setActiveCategorie(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, item) => (
          <li
            onClick={() => onClickCategorie(item)}
            className={activeCategorie === item ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
