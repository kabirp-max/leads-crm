import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import "./Campaigns.css";
import Header from "./Header";

const initialCampaigns = [
  {
    id: 1,
    name: "Campaign A",
    departments: {
      cd: { count: 120, fileName: "cd_leads_A.xlsx" },
      cdqa: { count: 110, fileName: "cdqa_review_A.xlsx" },
      quality: { count: 105, fileName: "quality_check_A.xlsx" },
    },
  },
  {
    id: 2,
    name: "Campaign B",
    departments: {
      cd: { count: 95, fileName: "cd_leads_B.xlsx" },
      cdqa: { count: 90, fileName: "cdqa_review_B.xlsx" },
      quality: { count: 88, fileName: "quality_check_B.xlsx" },
    },
  },
];

export default function Campaigns() {
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState(initialCampaigns);

  const departmentKeys = ["cd", "cdqa", "quality"];
  const departmentNames = {
    cd: "CD",
    cdqa: "CDQA",
    quality: "Quality",
  };

  const handleFileUpload = (e, campaignId, department) => {
    const file = e.target.files[0];
    if (!file) return;
  
    const reader = new FileReader();
    reader.onload = (evt) => {
      const data = new Uint8Array(evt.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const json = XLSX.utils.sheet_to_json(sheet);
  
      if (department === "cdqa") {
        const total = json.length;
        const approved = json.filter(
          (row) =>
            String(row.status)?.toLowerCase().trim() === "approved"
        ).length;
        const notApproved = json.filter(
          (row) =>
            String(row.status)?.toLowerCase().trim() === "not approved"
        ).length;
  
        setCampaigns((prevCampaigns) =>
          prevCampaigns.map((c) =>
            c.id === campaignId
              ? {
                  ...c,
                  departments: {
                    ...c.departments,
                    [department]: {
                      fileName: file.name,
                      count: total,
                      approved,
                      notApproved,
                    },
                  },
                }
              : c
          )
        );
      } else {
        // default case for CD & Quality
        const count = json.length;
  
        setCampaigns((prevCampaigns) =>
          prevCampaigns.map((c) =>
            c.id === campaignId
              ? {
                  ...c,
                  departments: {
                    ...c.departments,
                    [department]: {
                      fileName: file.name,
                      count: count,
                    },
                  },
                }
              : c
          )
        );
      }
    };
  
    reader.readAsArrayBuffer(file);
  };
  

  return (
    <div className="campaigns-container">
      <Header />
      <h1 className="campaigns-heading">Main Dashboard</h1>

      {campaigns.map((campaign) => (
        <div key={campaign.id} className="campaign-card">
          <h2
            className="campaign-title"
            onClick={() => navigate(`/campaign/${campaign.id}`)}
          >
            {campaign.name}
          </h2>

          <div className="table-wrapper">
            <table className="campaign-table">
              <thead>
                <tr>
                  {departmentKeys.map((key) => (
                    <th key={key}>{departmentNames[key]}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {departmentKeys.map((key) => (
                    <td key={key}>{campaign.departments[key].count}</td>
                  ))}
                </tr>
                <tr>
                  {departmentKeys.map((key) => (
                    <td key={key}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          alert(`Downloading: ${campaign.departments[key].fileName}`);
                        }}
                      >
                        {campaign.departments[key].fileName}
                        
                      </a>
                      <p>{key === "cdqa" ? (
        <>
          <div>Total: {campaign.departments[key].count}</div>
          <div>Approved: {campaign.departments[key].approved || 0}</div>
          <div>Not Approved: {campaign.departments[key].notApproved || 0}</div>
        </>
      ) : (
        campaign.departments[key].count
      )}</p>
                      <div style={{ marginTop: "5px" }}>
                        <input
                          type="file"
                          accept=".xlsx, .xls"
                          onChange={(e) => handleFileUpload(e, campaign.id, key)}
                        />
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
