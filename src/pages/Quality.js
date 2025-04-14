import React from "react";
import "./QualityPage.css";

const demoCampaigns = [
  {
    id: 1,
    name: "Campaign A",
    departments: {
      quality: {
        count: 105,
        uploadedBy: "Viraj",
        time: "2025-04-13 11:00 AM",
      },
    },
  },
  {
    id: 2,
    name: "Campaign B",
    departments: {
      quality: {
        count: 88,
        uploadedBy: "Viraj",
        time: "2025-04-12 08:45 AM",
      },
    },
  },
];

export default function QualityPage() {
  return (
    <div className="quality-container">
      <h1 className="quality-heading">Quality Dashboard</h1>

      {demoCampaigns.map((campaign) => (
        <div key={campaign.id} className="quality-campaign-card">
          <h2 className="quality-campaign-title">{campaign.name}</h2>
          <table className="quality-table">
            <thead>
              <tr>
                <th>Department</th>
                <th>Count</th>
                <th>Uploaded By</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Quality</td>
                <td>{campaign.departments.quality.count}</td>
                <td>{campaign.departments.quality.uploadedBy}</td>
                <td>{campaign.departments.quality.time}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
