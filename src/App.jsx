import './App.css';
import { DataTable } from './Practiceprops/Table';
import { useState } from "react";

function App() {
    const initialData = [
        { id: 1, name: "Versha", age: 22 },
        { id: 2, name: "Harman", age: 14 },
        { id: 3, name: "Virat Kohli", age: 37 }
    ];

    const [data, setData] = useState(initialData);
    const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'ascending' });

    const sortData = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }

        const sortedData = [...data].sort((a, b) => {
            if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
            if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
            return 0;
        });

        setSortConfig({ key, direction });
        setData(sortedData);
    };

    const columns = [
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "age", label: "Age" }
    ];

    return (
        <DataTable data={data} columns={columns} onSort={sortData} />
    );
}

export default App;
