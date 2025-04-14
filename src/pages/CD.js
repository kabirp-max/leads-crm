import React from "react";
import "./CDPage.css";

const demoCampaigns = [
  {
    id: 1,
    name: "Campaign A",
    departments: {
      cd: {
        count: 120,
        uploadedBy: "Aryan",
        time: "2025-04-13 10:30 AM",
      },
    },
  },
  {
    id: 2,
    name: "Campaign B",
    departments: {
      cd: {
        count: 95,
        uploadedBy: "Aryan",
        time: "2025-04-12 09:15 AM",
      },
    },
  },
];

export default function CDPage() {
  return (
    <div className="cd-container">
      <h1 className="cd-heading">CD Dashboard</h1>

      {demoCampaigns.map((campaign) => (
        <div key={campaign.id} className="cd-campaign-card">
          <h2 className="cd-campaign-title">{campaign.name}</h2>
          <table className="cd-table">
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
                <td>CD</td>
                <td>{campaign.departments.cd.count}</td>
                <td>{campaign.departments.cd.uploadedBy}</td>
                <td>{campaign.departments.cd.time}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
