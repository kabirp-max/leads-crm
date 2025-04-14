import React from "react";
import { useParams } from "react-router-dom";

export default function CampaignDetail() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Campaign Detail - ID: {id}</h1>
      <p className="mt-4">Coming soon: Display all lead-level info here.</p>
    </div>
  );
}
