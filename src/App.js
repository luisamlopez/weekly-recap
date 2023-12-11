import { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState(0);

  const generateRows = () => {
    let rows = [];
    for (let i = 0; i < items; i++) {
      const rowClass = i % 2 === 0 ? 'evenRow' : 'oddRow';
      rows.push(
        <tr key={i} className={rowClass}>
          <td className='report'>
            <input type="text" name={`report_${i}`} required />
          </td>
          <td className='report'>
            <input type="text" name={`period_${i}`} required />
          </td>
          <td className='report'>
            <input type="text" name={`actual_${i}`} required />
          </td>
          <td className='report'>
            <input type="text" name={`previous_${i}`} required />
          </td>
        </tr>
      );
    }
    return rows;
  };

  const generateHTMLCode = () => {
    const htmlCode = `
<table>
  <tbody>
    <tr style="background-color: #d9edf7; font-weight: bold; text-decoration: underline;">
      <td style="border: none; padding: 5px; border-right: none;">Report</td>
      <td style="border: none; padding: 5px; border-right: none;">Period</td>
      <td style="border: none; padding: 5px; border-right: none;">Actual</td>
      <td style="border: none; padding: 5px; border-right: none;">Previous</td>
    </tr>
    ${Array.from({ length: items }, (_, i) => (
      `<tr style="background-color: ${i % 2 === 0 ? '#ffffff' : '#f9f9f9'};">
        <td style="border: none; padding: 5px; text-align: left; border-top: 1px solid #dddddd; border-bottom: 1px solid #dddddd; border-right: none;"></td>
        <td style="border: none; padding: 5px; text-align: left; border-top: 1px solid #dddddd; border-bottom: 1px solid #dddddd; border-right: none;"></td>
        <td style="border: none; padding: 5px; text-align: left; border-top: 1px solid #dddddd; border-bottom: 1px solid #dddddd; border-right: none;"></td>
        <td style="border: none; padding: 5px; text-align: left; border-top: 1px solid #dddddd; border-bottom: 1px solid #dddddd; border-right: none;"></td>
      </tr>`
    ))}
  </tbody>
</table>`;

    return htmlCode;
  };

  return (
    <div className="App">
      <h1>Weekly recap generator</h1>
      <h2>Econ</h2>
      <p>First add the number of items for the table. Once the table is generated, add the data for the Report, Period, Actual, and Previous columns. </p>
      <form>
        <div>
          <label>Number of items:</label>
          <input type="number" id="items" name="items" min="1" required />
        </div>
        <button onClick={(e) => {
          e.preventDefault();
          const rows = document.getElementById("items").value;
          if (rows <= 0) {
            alert("Please add a number of items");
          } else {
            // Save the data
            setItems(Number(rows));
          }
        }}>Generate</button>
      </form>
      <table>
        <tbody>
          <tr className='thead'>
            <td className='report'>Report</td>
            <td className='report'>Period</td>
            <td className='report'>Actual</td>
            <td className='report'>Previous</td>
          </tr>
          {generateRows()}
        </tbody>
      </table>
      <textarea
        rows="10"
        cols="80"
        readOnly
        value={generateHTMLCode()}
        style={{ marginTop: '20px' }}
      />
    </div>
  );
}

export default App;
