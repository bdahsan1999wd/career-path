import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip,} from 'recharts';
const Statistics = () => {
    const marksData = [
        {
            name: 'Assignment-1',
            mark: 57,
        },
        {
            name: 'Assignment-2',
            mark: 56,
        },
        {
            name: 'Assignment-3',
            mark: 49,
        },
        {
            name: 'Assignment-4',
            mark: 59,
        },
        {
            name: 'Assignment-5',
            mark: 57,
        },
        {
            name: 'Assignment-6',
            mark: 47,
        },
        {
            name: 'Assignment-7',
            mark: 60,
        },
        {
            name: 'Assignment-8',
            mark: 38,
        }
    ];
    return (
        <div>
            <h3 className='text-center font-bold text-4xl text-sky-600 mt-10'>Assignment Marks By TinyAreaChart</h3>
                <AreaChart width={1200}
                    height={400}
                    data={marksData}
                    margin={{
                        top: 50,
                        right: 5,
                        left: 50,
                    }}>
                    <XAxis dataKey="name"></XAxis>
                    <YAxis dataKey=""></YAxis>
                    <Area type="monotone" dataKey="mark" stroke="#E74646" fill="#9A208C" />
                    <Tooltip></Tooltip>
                </AreaChart>
        </div>
    );
};

export default Statistics;