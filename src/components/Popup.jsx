import ProductItem from "./ProductItem";
import Button from "../ui-elements/Button";

// eslint-disable-next-line react/prop-types
const Popup = ({ isOpen, onClose, popupContent }) => {
    if (!isOpen) return null;

    console.log('popupContent', popupContent)

    const handleOverlayClick = (event) => {
      if (event.target === event.currentTarget) {
          onClose();
      }
  };
  
    return (
      <div className="popup-overlay" onClick={handleOverlayClick}>
        <div className="popup-content">
          <Button className="close-btn" onClick={onClose}>Close</Button>
          <ProductItem {...popupContent} />
        </div>
      </div>
    );
};

export default Popup