import React from "react";
import "./CDQAPage.css";

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
      cdqa: {
        count: 110,
        uploadedBy: "Shubham",
        time: "2025-04-13 12:45 PM",
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
      cdqa: {
        count: 90,
        uploadedBy: "Shubham",
        time: "2025-04-12 11:00 AM",
      },
    },
  },
];

export default function CDQAPage() {
  return (
    <div className="cdqa-container">
      <h1 className="cdqa-heading">CDQA Dashboard</h1>

      {demoCampaigns.map((campaign) => (
        <div key={campaign.id} className="cdqa-campaign-card">
          <h2 className="cdqa-campaign-title">{campaign.name}</h2>
          <table className="cdqa-table">
            <thead>
              <tr>
                <th>Department</th>
                <th>Count</th>
                <th>Uploaded By</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {["cd", "cdqa"].map((dept) => (
                <tr key={dept}>
                  <td>{dept.toUpperCase()}</td>
                  <td>{campaign.departments[dept].count}</td>
                  <td>{campaign.departments[dept].uploadedBy}</td>
                  <td>{campaign.departments[dept].time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
