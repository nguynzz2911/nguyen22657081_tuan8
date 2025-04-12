import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Card from "../components/Card";
import CustomerTable from "../components/Table";

const Dashboard = () => {
  const [metrics, setMetrics] = useState({
    turnover: { amount: "0", percent: "0%" },
    profit: { amount: "0", percent: "0%" },
    newCustomer: { amount: "0", percent: "0%" },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [turnoverRes, profitRes, newCustomerRes] = await Promise.all([
          fetch("http://localhost:3001/turnover"),
          fetch("http://localhost:3001/profit"),
          fetch("http://localhost:3001/newCustomer"),
        ]);

        const [turnoverData, profitData, newCustomerData] = await Promise.all([
          turnoverRes.json(),
          profitRes.json(),
          newCustomerRes.json(),
        ]);

        setMetrics({
          turnover: {
            amount: turnoverData[0].value.toLocaleString(),
            percent: `${turnoverData[0].changePercentage}%`,
          },
          profit: {
            amount: profitData[0].value.toLocaleString(),
            percent: `${profitData[0].changePercentage}%`,
          },
          newCustomer: {
            amount: newCustomerData[0].value.toLocaleString(),
            percent: `${newCustomerData[0].changePercentage}%`,
          },
        });
      } catch (error) {
        console.error("Failed to fetch API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="p-3">Loading...</div>;

  return (
    <div className="p-3">
      <div className="d-flex gap-2">
        <img src="../src/img/Squares four 1.png" alt="" />
        <p style={{ marginBottom: 0, fontWeight: "bold" }}>Overview</p>
      </div>
      <br />
      <Row>
        <Col>
          <Card
            title="Turnover"
            amount={metrics.turnover.amount}
            percent={metrics.turnover.percent}
            image="../src/img/Button 1509.png"
            color="rgb(255, 240, 245)"
          />
        </Col>
        <Col>
          <Card
            title="Profit"
            amount={metrics.profit.amount}
            percent={metrics.profit.percent}
            image="../src/img/Button 1529.png"
            color="rgb(239, 246, 254)"
          />
        </Col>
        <Col>
          <Card
            title="New customer"
            amount={metrics.newCustomer.amount}
            percent={metrics.newCustomer.percent}
            image="../src/img/Button 1530.png"
            color="rgb(239, 246, 254)"
          />
        </Col>
      </Row>
      <br />
      <div className="d-flex justify-content-between align-items-center">
  <div className="d-flex gap-2 align-items-center">
    <img src="../src/img/File text 1.png" alt="" />
    <p style={{ marginBottom: 0, fontWeight: "bold" }}>Detailed Report</p>
  </div>
  <div className="d-flex gap-2">
    <button
      className="btn btn-custom"
      style={{
        border: "1px solid #ff66b2",
        color: "#ff66b2",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 12px",
        borderRadius: 8,
        fontWeight: "500",
      }}
    >
      <img src="../src/img/Move up.png" width={16} alt="import" />
      Import
    </button>
    <button
      className="btn btn-custom"
      style={{
        border: "1px solid #ff66b2",
        color: "#ff66b2",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 12px",
        borderRadius: 8,
        fontWeight: "500",
      }}
    >
      <img src="../src/img/Download.png" width={16} alt="export" />
      Export
    </button>
  </div>
</div>


    
      <br />
      <CustomerTable />
    </div>
  );
};

export default Dashboard;
