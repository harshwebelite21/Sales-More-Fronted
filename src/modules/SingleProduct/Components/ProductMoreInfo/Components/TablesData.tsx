const TablesData = ({
  attributes,
}: {
  attributes: { name: string; value: string }[];
}) => {
  return (
    <div className="flex justify-center">
      <table className="w-full">
        <tbody>
          {attributes?.map((row) => (
            <tr key={row.name}>
              <th className="border px-4 py-2 text-left">{row.name}</th>
              <td className="border px-4 py-2">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablesData;
