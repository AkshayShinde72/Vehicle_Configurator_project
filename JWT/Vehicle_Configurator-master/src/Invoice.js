import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';

const Invoice = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    quantity: 0,
    price: 0,
  });

  const [items, setItems] = useState([]);
  const componentRef = useRef();

  const addItem = () => {
    setItems([...items, formData]);
    setFormData({ itemName: '', quantity: 0, price: 0 });
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleExportToPDF = () => {
    const pdf = new jsPDF();
    pdf.text('Invoice', 10, 10);
    
    items.forEach((item, index) => {
      const yPos = 30 + index * 10;
      pdf.text(`${item.itemName} - ${item.quantity} x $${item.price} = $${item.quantity * item.price}`, 10, yPos);
    });

    const totalYPos = 30 + items.length * 10;
    pdf.text(`Total: $${calculateTotal()}`, 10, totalYPos);

    pdf.save('invoice.pdf');
  };

  return (
    <div>
      <h1>Invoice</h1>
      <div>
        <label>Item Name:</label>
        <input
          type="text"
          value={formData.itemName}
          onChange={(e) => setFormData({ ...formData, itemName: e.target.value })}
        />
        <label>Quantity:</label>
        <input
          type="number"
          value={formData.quantity}
          onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value, 10) })}
        />
        <label>Price:</label>
        <input
          type="number"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <div>
        <h2>Items</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.itemName} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Total: ${calculateTotal()}</h2>
        <button onClick={handlePrint}>Print</button>
        <button onClick={handleExportToPDF}>Export to PDF</button>
      </div>

      <div style={{ display: 'none' }}>
        {/* This is the component we want to print and export */}
        <div ref={componentRef}>
          <h1>Invoice</h1>
          <h2>Items</h2>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item.itemName} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
              </li>
            ))}
          </ul>
          <h2>Total: ${calculateTotal()}</h2>
        </div>
      </div>
    </div>
  );
};

export default Invoice;