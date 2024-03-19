import { LineChart as LChart, Line } from 'recharts';
const LineChart = () => {

    const studentMarksData = [
        { student: "Student 1", math: 85, physics: 75, chemistry: 80 },
        { student: "Student 2", math: 78, physics: 72, chemistry: 85 },
        { student: "Student 3", math: 92, physics: 88, chemistry: 90 },
        { student: "Student 4", math: 68, physics: 62, chemistry: 70 },
        { student: "Student 5", math: 75, physics: 70, chemistry: 78 },
        { student: "Student 6", math: 88, physics: 80, chemistry: 85 },
        { student: "Student 7", math: 70, physics: 65, chemistry: 72 },
        { student: "Student 8", math: 82, physics: 75, chemistry: 80 },
        { student: "Student 9", math: 90, physics: 85, chemistry: 92 },
        { student: "Student 10", math: 72, physics: 68, chemistry: 75 }
      ];
      

    return (
        <div>
            <LChart width={500} height={400} data={studentMarksData}>
                <Line dataKey="math"></Line>
                <Line stroke="#8884d8" dataKey="physics"></Line>
                <Line dataKey="chemistry"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;