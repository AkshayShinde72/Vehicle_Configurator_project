// InvoiceGenerator.js
import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import "./InvoiceGenerator.css";
import "jspdf-autotable";

function InvoiceGenerator({ price, orderSize, modelname }) {
  const [totalPrice, setTotalPrice] = useState(null);

  useEffect(() => {
    // Calculate total price based on order size and model price
    if (price !== null && orderSize !== null) {
      const basePrice = price * orderSize;
      const taxRate = 0.1;
      const taxAmount = basePrice * taxRate;
      const totalPrice = basePrice + taxAmount;
      setTotalPrice(totalPrice);
    }
  }, [price, orderSize]);

  const generateAndDownloadPDF = () => {
    const doc = new jsPDF();
    const currentDate = new Date().toLocaleDateString();

    // Header
    doc.setFontSize(18);
    doc.text("Vehicle Configurator Invoice", 10, 20);

    // Date
    doc.setFontSize(12);
    doc.text(`Order Date: ${currentDate}`, 10, 30);

    // Table
    const tableData = [
      ["Model Price", `Rs ${price}`],
      ["Order Size", orderSize],
      ["Total Price (Including Tax)", `Rs ${totalPrice} /-`],
    ];

    // Customize styles
    const styles = {
      textColor: [0, 0, 0], // Black text color
      lineColor: [0, 0, 0], // Black table line color
      lineWidth: 0.5, // Table line width
      fontStyle: "normal", // Normal font style
      cellPadding: 2, // Padding for each cell
    };

    // Customize theme
    const theme = "grid";

    doc.autoTable({
      startY: 40,
      head: [["Description", "Amount"]],
      body: tableData,
      theme: theme,
      styles: styles,
    });

    // Footer
    doc.setFontSize(10);
    doc.text(
      "Thank you for your order!",
      10,
      doc.autoTable.previous.finalY + 20
    );

    // Save the PDF with a filename
    doc.save("invoice.pdf");
  };

  const handleConfirmOrder = () => {
    // Confirm order logic
    alert("Order confirmed!");
    generateAndDownloadPDF();
    // Navigate or perform additional actions if needed
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Invoice</h1>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <div class="invoice-title">
                  <h4 class="float-end font-size-15">
                    Invoice #DS0204{" "}
                    <span class="badge bg-success font-size-12 ms-2"></span>
                  </h4>
                  <div class="mb-4">
                    <h2 class="mb-1 text-muted">V-Conf</h2>
                  </div>
                  <div class="text-muted">
                    <p class="mb-1">3184 Spruce Drive Pittsburgh, PA 15201</p>
                    <p class="mb-1">
                      <i class="uil uil-envelope-alt me-1"></i> xyz@987.com
                    </p>
                    <p>
                      <i class="uil uil-phone me-1"></i> 012-345-6789
                    </p>
                  </div>
                </div>

                <hr class="my-4" />

                <div class="row">
                  <div class="col-sm-6">
                    <div class="text-muted">
                      <h5 class="font-size-16 mb-3">Billed To:</h5>
                      <h5 class="font-size-15 mb-2">
                        {sessionStorage.getItem("username")}
                      </h5>
                      <p class="mb-1">{sessionStorage.getItem("address")}</p>
                      <p class="mb-1">{sessionStorage.getItem("emailid")}</p>
                      <p>{sessionStorage.getItem("telephone")}</p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="text-muted text-sm-end">
                      <div>
                        <h5 class="font-size-15 mb-1">Invoice No:</h5>
                        <p>#DZ0112</p>
                      </div>
                      <div class="mt-4">
                        <h5 class="font-size-15 mb-1">Invoice Date:</h5>
                        <p>20 Feb, 2024</p>
                      </div>
                      <div class="mt-4">
                        <h5 class="font-size-15 mb-1">Order No:</h5>
                        <p>#1123456</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="py-2">
                  <h5 class="font-size-15">Order Summary</h5>

                  <div class="table-responsive">
                    <table
                      class="table align-middle table-nowrap table-centered mb-0"
                      style={{ width: "100%" }}>
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>Item</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th class="text-end">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">01</th>
                          <td>
                            <div>
                              <h5 class="text-truncate font-size-14 mb-1"></h5>
                              <p class="text-muted mb-0"> {modelname}</p>
                            </div>
                          </td>
                          <td>{price}</td>
                          <td>{orderSize}</td>
                          <td class="text-end">{price}</td>
                        </tr>

                        <tr>
                          <th scope="row" colspan="4" class="border-0 text-end">
                            Discount :
                          </th>
                          <td class="border-0 text-end">- Rs 00.00</td>
                        </tr>

                        <tr>
                          <th scope="row" colspan="4" class="border-0 text-end">
                            Shipping Charge :
                          </th>
                          <td class="border-0 text-end">Rs 00.00</td>
                        </tr>

                        <tr>
                          <th scope="row" colspan="4" class="border-0 text-end">
                            Tax
                          </th>
                          <td class="border-0 text-end">Rs {0.1 * price}</td>
                        </tr>

                        <tr>
                          <th scope="row" colspan="4" class="border-0 text-end">
                            Total
                          </th>
                          <td class="border-0 text-end">
                            <h4 class="m-0 fw-semibold">{totalPrice}</h4>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        style={{
          display: "block",
          margin: "20px auto",
          padding: "10px 20px",
          borderRadius: "5px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
        onClick={handleConfirmOrder}>
        Confirm Order
      </button>
    </div>
  );
}

export default InvoiceGenerator;
