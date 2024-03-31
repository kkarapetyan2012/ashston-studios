// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import Popup from './Popup';
import { fetchData } from '../Api/api';

// eslint-disable-next-line react/prop-types
const ProductList = ({ searchTerm }) => {
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState([]);

    const [isOpen, setIsOpen] = useState(false);
    const [popupContent, setPopupContent] = useState(null);

    const openPopup = (item) => {
      setPopupContent(item);
      setIsOpen(true);
  };
  const closePopup = () => setIsOpen(false);

  const filteredData = data.filter((item) => {
    // eslint-disable-next-line react/prop-types
    const searchTermLower = searchTerm.toLowerCase();
    const titleMatches = item.title.toLowerCase().includes(searchTermLower);
    const categoryMatches = item.tags.toLowerCase().includes(searchTermLower);
    const dateMatches = item.date.toLowerCase().includes(searchTerm);
    const viewsMatches = item.views.toString().toLowerCase().includes(searchTerm);
    const descriptionMatches = item.text.toLowerCase().includes(searchTermLower);

    return titleMatches || categoryMatches || dateMatches || viewsMatches || descriptionMatches;
  });

    useEffect(() => {   
      fetchData(setData);
    }, []);

    return (
      <div className="container">        
        <ul className="product__list">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
                <ProductItem key={item.title} {...item} onClick={() => openPopup(item)} />
            ))
          ) : (
            <li>No results found</li>
          )}
        </ul>

        {isOpen && (
          <Popup isOpen={isOpen} onClose={closePopup} popupContent={popupContent} />
        )}
      </div>
    );
};

export default ProductList;