import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResponsiveTable({ headings, categories }) {
  const [tableData, setTableData] = useState(categories);
  const [couponCode, setCouponCode] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (catIndex, itemIndex, key, value) => {
    const updatedData = [...tableData];
    updatedData[catIndex].items[itemIndex][key] = {
      ...updatedData[catIndex].items[itemIndex][key],
      value,
    };
    setTableData(updatedData);
  };

  const subtotal = tableData.reduce((total, category) => {
    const catTotal = category.items.reduce((sum, item) => {
      const discountPrice = parseFloat(item.discountprice?.value || 0);
      const qty = parseFloat(item.quantity?.value || 0);
      return sum + discountPrice * qty;
    }, 0);
    return total + catTotal;
  }, 0);

  const couponDiscount = (() => {
    switch (couponCode.toLowerCase()) {
      case "offer30": return 0.3;
      case "offer50": return 0.5;
      case "offer70": return 0.7;
      default: return 0;
    }
  })();

  const grandTotal = subtotal * (1 - couponDiscount);

  const goToCart = () => {
    // Collect products with quantity > 0
    const cartItems = tableData
      .flatMap(category => category.items)
      .filter(item => parseInt(item.quantity?.value) > 0);
    
    // Navigate to /cart with state
    navigate("/cart", { state: { cartItems, couponCode, grandTotal } });
  };

  return (
    <div className="table-container">
      <table className="table table-bordered table-striped text-center m-0">
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th key={index} className={index === 0 ? "sticky-col sticky-col-header" : ""}>
                {heading}
              </th>
            ))}
            <th className="sticky-col sticky-col-header">Price</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((category, catIndex) => (
            <React.Fragment key={catIndex}>
              <tr className="table-primary">
                <td colSpan={headings.length + 1} className="fw-bold">{category.category}</td>
              </tr>
              {category.items.map((item, itemIndex) => {
                const discountPrice = parseFloat(item.discountprice?.value || 0);
                const inputQty = parseFloat(item.quantity?.value || 0);
                const price = discountPrice * inputQty;

                return (
                  <tr key={itemIndex}>
                    {headings.map((heading, colIndex) => {
                      const key = heading.replace(/\s+/g, "").toLowerCase();
                      const cell = item[key];
                      const type = cell?.type || "paragraph";

                      return (
                        <td key={colIndex} className={colIndex === 0 ? "sticky-col sticky-col-cell" : ""}>
                          {type === "input" ? (
                            <input
                              type="number"
                              className="form-control"
                              value={cell.value || ""}
                              min="0"
                              step="1"
                              onChange={(e) => {
                                let val = e.target.value.replace(/[^0-9]/g, "");
                                handleInputChange(catIndex, itemIndex, key, val);
                              }}
                            />
                          ) : <span>{cell.value || cell}</span>}
                        </td>
                      );
                    })}
                    <td className="sticky-col sticky-col-cell">{price}</td>
                  </tr>
                );
              })}
            </React.Fragment>
          ))}
        </tbody>
        <tfoot>
          <tr className="grand-total-row" style={{ background: "#28a745", color: "#fff" }}>
            <td></td>
            <td></td>
            <td>
              <button className="btn btn-light" onClick={goToCart}>
                Go To Cart
              </button>
            </td>
            <td>
              <input
                className="coupon-input form-control"
                placeholder="Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                style={{ width: "95%" }}
              />
            </td>
            <td>Grand Total</td>
            <td>{grandTotal.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
