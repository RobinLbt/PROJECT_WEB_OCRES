import React, { Component } from "react";
import { LineChart, Line, XAxis, ResponsiveContainer, ReferenceLine } from 'recharts';
const { DateTime } = require("luxon");

const Emoji = (props) => {
    const {
        cx, cy, value,
    } = props;

    

    if (value === 1) {
        return (
            <svg>
                <text fontSize="1.5rem" textAnchor="middle" x={cx - 5} y={cy + 10} >😓</text>
            </svg>);
    }

    else if (value === 2) {
        return (
            <svg>
                <text fontSize="1.5rem" textAnchor="middle" x={cx - 10} y={cy - 10} >🙁</text>
            </svg>);
    }

    else if (value === 3) {
        return (
            <svg>
                <text fontSize="1.5rem" textAnchor="middle" x={cx - 10} y={cy - 10} >😐</text>
            </svg>);
    }

    else if (value === 4) {
        return (
            <svg>
                <text fontSize="1.5rem" textAnchor="middle" x={cx - 10} y={cy - 10} >🙂</text>
            </svg>);
    }

    else if (value === 5) {
        return (
            <svg>
                <text fontSize="1.5rem" textAnchor="middle" x={cx - 10} y={cy - 10} >😄</text>
            </svg>);
    }

    return (
        <svg>
            <text fontSize="1.5rem" textAnchor="middle" x={cx - 10} y={cy - 10} >😐</text>
        </svg>);
};

class SatisfactionTile extends Component {

    data = [];

    constructor(props) {
        super(props);
        this.props.days.forEach((day) => this.data.push({ date: DateTime.fromISO(day.date).toLocaleString({ month: 'long', day: 'numeric', year: 'numeric'}), humeur: day.valeur }));
    }

    

    render() {
        return (
            <div style={{ flex: "1",textAlign:"left",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <section style={{width:"100%",textAlign:"left"}}>
                <h2>Evolution satisfaction</h2>
                </section>
                <ResponsiveContainer width="80%" height="60%">
                    <LineChart
                        margin={{ top: 0, right: 40, left: 40, bottom: 0  }}
                        data={this.data}>
                        <XAxis dataKey="date" stroke="#275EF6" axisLine={false} tickLine={false}>
                        </XAxis>
                        <Line isAnimationActive={false} type="monotone" dataKey="humeur" stroke="none" dot={<Emoji />} />
                        <ReferenceLine y={1} stroke="#DEDEDE" strokeDasharray="3 3" />
                        <ReferenceLine y={2} stroke="#DEDEDE" strokeDasharray="3 3" />
                        <ReferenceLine y={3} stroke="#DEDEDE" strokeDasharray="3 3" />
                        <ReferenceLine y={4} stroke="#DEDEDE" strokeDasharray="3 3" />
                        <ReferenceLine y={5} stroke="#DEDEDE" strokeDasharray="3 3" />
                    </LineChart>
                   
                </ResponsiveContainer>
            </div>
        );
    }
}

export default SatisfactionTile;