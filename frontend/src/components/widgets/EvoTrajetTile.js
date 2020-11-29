import React, { Component } from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';


class EvoTrajetTile extends Component {

    data = [];

    constructor(props) {
        super(props);
        this.props.tempsTrajet.forEach((t) => this.data.push({ value: t, string: t > 60 ? `${Math.floor(t/60)}h${Math.round((t/60 - Math.floor(t/60))*60)}` : `${t} minutes` }));
    }


    render() {
        return (
            <div style={{ flex: "1", textAlign: "left", display: "flex", flexDirection: "column", alignItems: "center",height:"33.3vh",maxHeight:"33.3vh" }}>
                <div style={{ width: "100%" }}>
                    <h2>Evolution du temps de trajet</h2>
                </div>
                <ResponsiveContainer width="60%" height={300}>
                    <BarChart
                        data={this.data}>
                        <XAxis dataKey="string" stroke="#275EF6" axisLine={false} tickLine={false}>
                            </XAxis>
                        <Bar dataKey="value" fill="#275EF6" barSize={50} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default EvoTrajetTile;