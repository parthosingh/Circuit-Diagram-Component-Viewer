
const MOCK_COMPONENTS = [
    { id: 1,  name: "PV-1000",   label: "Pressure Vessel",        symbol: "PV", color: "#4FC3F7" },
    { id: 2,  name: "PIC-101",   label: "Pressure Indicator Ctrl", symbol: "PI", color: "#81C784" },
    { id: 3,  name: "PT-102",    label: "Pressure Transmitter",    symbol: "PT", color: "#FFB74D" },
    { id: 4,  name: "PE-100",    label: "Pressure Element",        symbol: "PE", color: "#F06292" },
    { id: 5,  name: "HEX-300",   label: "Heat Exchanger",          symbol: "HX", color: "#CE93D8" },
    { id: 6,  name: "HEX-500",   label: "Heat Exchanger",          symbol: "HX", color: "#CE93D8" },
    { id: 7,  name: "P-XXX (1)", label: "Pump",                    symbol: "P",  color: "#4DB6AC" },
    { id: 8,  name: "P-XXX (2)", label: "Pump",                    symbol: "P",  color: "#4DB6AC" },
    { id: 9,  name: "P-XXX (3)", label: "Pump",                    symbol: "P",  color: "#4DB6AC" },
    { id: 10, name: "XV-200 (1)",label: "Control Valve",           symbol: "XV", color: "#FF8A65" },
    { id: 11, name: "XV-200 (2)",label: "Control Valve",           symbol: "XV", color: "#FF8A65" },
    { id: 12, name: "XV-200 (3)",label: "Control Valve",           symbol: "XV", color: "#FF8A65" },
  ];
  
  export const fetchComponents = () => {
    return new Promise((resolve) => setTimeout(() => resolve(MOCK_COMPONENTS), 800));
  };