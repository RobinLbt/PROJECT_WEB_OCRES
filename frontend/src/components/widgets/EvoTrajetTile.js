import React, { Component } from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer, Label } from 'recharts';


class EvoTrajetTile extends Component {

    data1 = [];

    constructor(props) {
        super(props);
        this.props.tempsTrajet.forEach((t) => this.data1.push({ value: t, string: t > 60 ? `${Math.floor(t/60)}h${Math.round((t/60 - Math.floor(t/60))*60)}` : `${t} minutes` }));
    }


    render() {
        console.log(this.data1);
        return (
            <div style={{ flex: "1", textAlign: "left", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: "100%" }}>
                    <h2>Evolution du temps de trajet</h2>
                </div>
                <ResponsiveContainer width="60%" height={300}>
                    <BarChart
                        data={this.data1}>
                        <XAxis dataKey="string" stroke="#275EF6" axisLine={false} tickLine={false}>
                        <Label value="Temps en minutes" />
                            </XAxis>
                        <Bar dataKey="value" fill="#275EF6" barSize={50} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default EvoTrajetTile;