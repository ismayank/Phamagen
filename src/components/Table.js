import React from "react";
import "../styles/Table.css";
import { ReactComponent as SortIcon } from "../assets/icons/sort-icon.svg";

const Table = () => {
  return (
    <div className="search-results">
      <h2 className="Head">Search Results</h2>
      <p className="sub-heading">Results of search and more details</p>

      <div className="search-results-header">
        <div className="search-results-tabs">
          <button className="tab active">View All</button>
          <button className="tab">Labelled</button>
          <button className="tab">Unlabelled</button>
        </div>
        <div className="search-controls">
          <div className="search-box">
            <input type="text" placeholder="Search..." />
          </div>
          <button className="sort-button">
            <SortIcon className="sort-icon" width="20" height="20" />
            Sort
          </button>
        </div>
      </div>

      {/* Table Section */}
      <table className="results-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Publish Date</th>
            <th>Label Type</th>
            <th>Drugs Name</th>
            <th>Therapeutic Category</th>
            <th>Score</th>
            <th>Status</th>
            <th>Full Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lung Cancer</td>
            <td>22 Jan 2024</td>
            <td className="label labelled">Labelled</td>
            <td>Dollo</td>
            <td>Oncology</td>
            <td className="score high">95%</td>
            <td>Reviewed</td>
            <td>
              <a href="#">Add Details</a>
            </td>
          </tr>
          <tr>
            <td>Covid</td>
            <td>20 Jan 2024</td>
            <td className="label unlabelled">Unlabelled</td>
            <td>Paracetamol</td>
            <td>Antiviral</td>
            <td className="score low">25%</td>
            <td>Unreviewed</td>
            <td>
              <a href="#">Add Details</a>
            </td>
          </tr>
          {/* Additional Entries */}
          <tr>
            <td>Breast Cancer</td>
            <td>18 Jan 2024</td>
            <td className="label labelled">Labelled</td>
            <td>Herceptin</td>
            <td>Oncology</td>
            <td className="score high">87%</td>
            <td>Reviewed</td>
            <td>
              <a href="#">Add Details</a>
            </td>
          </tr>
          <tr>
            <td>Diabetes Type 2</td>
            <td>15 Jan 2024</td>
            <td className="label labelled">Labelled</td>
            <td>Metformin</td>
            <td>Endocrinology</td>
            <td className="score high">92%</td>
            <td>Reviewed</td>
            <td>
              <a href="#">Add Details</a>
            </td>
          </tr>
          <tr>
            <td>Chicken Pox</td>
            <td>05 Jan 2024</td>
            <td className="label labelled">Labelled</td>
            <td>Amlodipine</td>
            <td>Cardiology</td>
            <td className="score high">89%</td>
            <td>Reviewed</td>
            <td>
              <a href="#">Add Details</a>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Pagination Section */}
      <div className="pagination">
        <div className="page-range">Page 1-10</div>
        <div className="prev-next-buttons">
          <button className="prev-next-btn">Previous</button>
          <button className="prev-next-btn">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Table;
