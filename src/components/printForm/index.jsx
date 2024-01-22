import React, { useState, useEffect } from 'react';
import { COLOR_OPTIONS, PAGE_SIZES } from '../../utils/printConfigs';
import { PriceCalculator } from '../../utils';

const PrintForm = () => {
  // State variables
  const [noOfPages, setNoOfPages] = useState(0);
  const [colorOption, setColorOption] = useState(COLOR_OPTIONS.COLOR); // Default value 'color'
  const [noOfCopies, setNoOfCopies] = useState(0);
  const [pageSizeFormat, setPageSizeFormat] = useState(PAGE_SIZES.A4);

  const [price, setPrice] = useState('0');
  // Event handlers
  const handleRadioChange = (event) => {
    setColorOption(event.target.value);
  };

  const handleDropdownChange = (event) => {
    setPageSizeFormat(event.target.value);
  };

  useEffect(() => {
    const priceCalculator = new PriceCalculator();
    priceCalculator
      .setNoOfPages(noOfPages)
      .setColorOption(colorOption)
      .setNoOfCopies(noOfCopies)
      .setPageSizeFormat(pageSizeFormat);
  
    // Now you can call calculate method in PriceCalculator or do further calculations
    // priceCalculator.calculate(); 
    // For now, let's set the calculated price in the PrintForm state
    setPrice(new String(priceCalculator.calculate()));
  }, [noOfPages, colorOption, noOfCopies, pageSizeFormat]);

  return (
    <div>
      <div>
        <label htmlFor="noOfPages">No of Pages.</label>
        <input
          id="noOfPages"
          type="number"
          min="0"
          value={noOfPages}
          onChange={(e) => setNoOfPages(parseInt(e.target.value, 10))}
        />
      </div>
      <div>
        <label htmlFor="colorOption">GrayScale/Colored</label>
        <input
          name="colorOption"
          id="colorOptionColor"
          type="radio"
          value={COLOR_OPTIONS.COLOR}
          checked={colorOption === COLOR_OPTIONS.COLOR}
          onChange={handleRadioChange}
        />
        <label htmlFor="colorOptionColor">{COLOR_OPTIONS.COLOR}</label>
        <input
          name="colorOption"
          id="colorOptionGreyscale"
          type="radio"
          value={COLOR_OPTIONS.GREYSCALE}
          checked={colorOption === COLOR_OPTIONS.GREYSCALE}
          onChange={handleRadioChange}
        />
        <label htmlFor="colorOptionGreyscale">{COLOR_OPTIONS.GREYSCALE}</label>
      </div>
      <div>
        <label htmlFor="noOfCopies">No. of Copies:</label>
        <input
          id="noOfCopies"
          type="number"
          min="0"
          value={noOfCopies}
          onChange={(e) => setNoOfCopies(parseInt(e.target.value, 10))}
        />
      </div>
      <div>
        <label htmlFor="pageFormat">Page Size Format:</label>
        <select value={pageSizeFormat} onChange={handleDropdownChange}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div>
        <label htmlFor="calculatedPrice">Calculated Price:</label> <div> {price} </div>
      </div>
    </div>
  );
};

export default PrintForm;
