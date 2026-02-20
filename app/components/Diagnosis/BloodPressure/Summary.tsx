import React from "react";

interface BloodPressureCardProps {
  systolic: number;
  diastolic: number;
  systolicStatus?: "higher" | "normal" | "lower";
  diastolicStatus?: "higher" | "normal" | "lower";
}

const BloodPressureCard: React.FC<BloodPressureCardProps> = ({
  systolic,
  diastolic,
  systolicStatus = "higher",
  diastolicStatus = "lower",
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "higher":
        return "#dc2626";
      case "lower":
        return "#2563eb";
      default:
        return "#6b7280";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "higher":
        return "▲";
      case "lower":
        return "▼";
      default:
        return "●";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "higher":
        return "Higher than Average";
      case "lower":
        return "Lower than Average";
      default:
        return "Average";
    }
  };

  const styles = {
    container: {
      width: "250px",
      backgroundColor: "#f3e8ff",
      borderRadius: "12px",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      border: "1px solid #e9d5ff",
      padding: "20px",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    section: {
      marginBottom: "16px",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "8px",
    },
    labelContainer: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    dot: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
    },
    purpleDot: {
      backgroundColor: "#c084fc",
    },
    blueDot: {
      backgroundColor: "#60a5fa",
    },
    label: {
      fontSize: "14px",
      fontWeight: "500",
      color: "#374151",
      margin: 0,
    },
    utilButton: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "#9ca3af",
      padding: "4px",
      display: "flex",
      alignItems: "center",
    },
    value: {
      fontSize: "36px",
      fontWeight: "700",
      color: "#111827",
      margin: "4px 0",
      lineHeight: 1,
    },
    status: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
      fontSize: "13px",
      margin: 0,
    },
    divider: {
      borderTop: "1px solid #e9d5ff",
      margin: "16px 0",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.section}>
        <div style={styles.header}>
          <div style={styles.labelContainer}>
            <div style={{ ...styles.dot, ...styles.purpleDot }}></div>
            <span style={styles.label}>Systolic</span>
          </div>
          <button style={styles.utilButton} title="Utilities">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </button>
        </div>
        <div style={styles.value}>{systolic}</div>
        <div
          style={{ ...styles.status, color: getStatusColor(systolicStatus) }}
        >
          <span>{getStatusIcon(systolicStatus)}</span>
          <span>{getStatusText(systolicStatus)}</span>
        </div>
      </div>

      <div style={styles.divider}></div>

      <div>
        <div style={styles.labelContainer}>
          <div style={{ ...styles.dot, ...styles.blueDot }}></div>
          <span style={styles.label}>Diastolic</span>
        </div>
        <div style={styles.value}>{diastolic}</div>
        <div
          style={{ ...styles.status, color: getStatusColor(diastolicStatus) }}
        >
          <span>{getStatusIcon(diastolicStatus)}</span>
          <span>{getStatusText(diastolicStatus)}</span>
        </div>
      </div>
    </div>
  );
};

const Summary = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px",
      }}
    >
      <BloodPressureCard
        systolic={160}
        diastolic={78}
        systolicStatus="higher"
        diastolicStatus="lower"
      />
    </div>
  );
};

export default Summary;
