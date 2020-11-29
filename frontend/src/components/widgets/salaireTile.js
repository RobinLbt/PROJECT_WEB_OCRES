import React, { Component } from "react";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, ReferenceLine, Tooltip } from 'recharts';
const { DateTime } = require("luxon");

class SalaireTile extends Component {

    data = [];

    constructor(props) {
        super(props);
        this.props.salaires.forEach((s) => this.data.push({ date: DateTime.fromISO(s.date).toLocaleString({ month: 'long', day: 'numeric', year: 'numeric'}), montant: s.montant }));
    }

    render() {
        return (
            <div style={{flex: "2",display:"flex",flexDirection:"column",alignItems:"center"}} className="double-widget-subcontainer">
                <section style={{width:"100%",textAlign:"left"}}>
                    <h2>Evolution salaire</h2>
                </section>
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart
                        margin={{ top: 0, right: 40, left: 40, bottom: 0  }}
                        data={this.data}>
                        <XAxis dataKey="date" stroke="#275EF6" axisLine={false} tickLine={false} width="40%">
                        </XAxis>
                        <YAxis />
                        <Tooltip/>
                        <Area type="monotone" dataKey="montant" stroke="#275EF6" width={50} fill="#275EF6" dot={true} />
                        {this.data.map((d)=> <ReferenceLine y={d.montant} stroke="#DEDEDE" strokeDasharray="3 3" />)}
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default SalaireTile;