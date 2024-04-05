const tableData = [
  { column1: "Size", column2: "Unique" },
  { column1: "Colors", column2: "Red, Blue" },
  { column1: "Material", column2: "100% Leather" },
];

const TablesData = () => {
  return (
    <div className="flex justify-center">
      <table className="w-full">
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <th className="border px-4 py-2 text-left">{row.column1}</th>
              <td className="border px-4 py-2">{row.column2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablesData;
