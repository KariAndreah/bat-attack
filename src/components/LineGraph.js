import './LineGraph.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const LineGraph = ({ batter_one_stats }) => {

    // Function to format AVG and OPS data into an object for line graph 
    function formatData() {

        // Variables for calculating running AVG
        let totalData = []
        let hitTotal = 0;
        let abTotal = 0;
        let currentAvg = 0;
        let avg = []

        // For-loop to calculate running AVG and push to array
        for (let i = 0; i < batter_one_stats.length; i++) {
            hitTotal = hitTotal + batter_one_stats[i].H
            abTotal = abTotal + batter_one_stats[i].AB
            currentAvg = hitTotal / abTotal
            avg.push(currentAvg.toFixed(3))
        }

        // Variables for calculating running OPS
        let tbTotal = 0;
        let opsAbTotal = 0;
        let opsHitTotal = 0;
        let bbTotal = 0;
        let hbpTotal = 0;
        let sfTotal = 0;
        let currentOPS = 0;
        let ops = []

        // For-loop to calculate running OPS and push to array
        for (let i = 0; i < batter_one_stats.length; i++) {
            opsHitTotal = opsHitTotal + batter_one_stats[i].H
            opsAbTotal = opsAbTotal + batter_one_stats[i].AB
            tbTotal = tbTotal + batter_one_stats[i].TB
            bbTotal = bbTotal + batter_one_stats[i].BB
            hbpTotal = hbpTotal + batter_one_stats[i].HBP
            sfTotal = sfTotal + batter_one_stats[i].SF
            let SLG = (tbTotal) / (opsAbTotal)
            let OBP = ((opsHitTotal + bbTotal + hbpTotal) / (opsAbTotal + bbTotal + sfTotal + hbpTotal))
            currentOPS = (SLG) + (OBP)
            ops.push((currentOPS).toFixed(3))
        }

        // Formatting date, AVG array, and OPS array in object for line graph
        for (let i = 0; i < batter_one_stats.length; i++) {
            let newData = {}
            newData['date'] = (batter_one_stats[i].gameDate).slice(5, 10)
            newData['AVG'] = avg[i]
            newData['OPS'] = ops[i]
            totalData.push(newData)
        }
        return totalData
    }

    // Variable for formatted data 
    let graphData = formatData(batter_one_stats)

    //console.log(graphData)

    return (
        <div>
            <div className = 'graph_title'>
                <h1>AVG and OPS over 2018</h1>
            </div>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart
                    width={1200}
                    height={400}
                    data={graphData}
                    margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
                >
                    <YAxis stroke="black" />
                    <XAxis dataKey="date" stroke="black" />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Line type="monotone" dataKey="OPS" stroke="#002D72" dot={false} strokeWidth={2}/>
                    <Line type="monotone" dataKey="AVG" stroke="#D50032" dot={false} strokeWidth={2}/>
                </LineChart>
            </ResponsiveContainer>
        </div>

    );
}

export default LineGraph;
