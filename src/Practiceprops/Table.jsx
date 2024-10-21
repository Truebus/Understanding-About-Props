//Build a DataTable component that accepts an array of data and column 
//definitions as props. Implement sorting functionality for the table columns and conditionally render the sorted data.
export const DataTable = ({ data, columns, onSort }) => {
    const handleSort = (key) => {
        if (onSort) {
            onSort(key);
        }
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.key} onClick={() => handleSort(column.key)}>
                                {column.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            {columns.map((column) => (
                                <td key={column.key}>{row[column.key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
