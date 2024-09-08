import XLSX from 'xlsx';

const exportToExcel = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Индикаторы");
    XLSX.writeFile(workbook, "индикаторы.xlsx");
};

const ExportButton = ({ data }) => (
    <button onClick={() => exportToExcel(data)}>Экспортировать в Excel</button>
);

export default ExportButton;
