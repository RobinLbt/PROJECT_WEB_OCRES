import React, { Component } from "react";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, ReferenceLine, Tooltip } from 'recharts';
import Haut from "../../assets/icons/tendanceHaut.svg";
import Bas from "../../assets/icons/tendanceBas.svg";

const { DateTime } = require("luxon");


class SalaireTile extends Component {

    data = [];

    constructor(props) {
        super(props);
        this.props.salaires.forEach((s) => this.data.push({ date: DateTime.fromISO(s.date).toLocaleString({ month: 'long', day: 'numeric', year: 'numeric' }), montant: s.montant }));
    }

    getPourcentage() {
        if (this.props.salaires.length === 0) return 0;
        if (this.props.salaires.length === 1) return 100;

        let result = Math.floor(((this.props.salaires[this.props.salaires.length - 1].montant -
            this.props.salaires[this.props.salaires.length - 2].montant
        ) / this.props.salaires[this.props.salaires.length - 2].montant) * 100);

        let sign = "+";
        if (result < 0) sign = "";

        return (
            <div style={{display:"inline-block",marginLeft:"1rem"}}>
                <p style={{ color: sign === "+" ? "green" : "red", display:"inline-block",fontWeight:"bold"}}>{sign}{result.toString()}%</p>
                {sign === "+" ? 
                <img style={{display:"inline-block",transform:"translateY(0.8em)"}} src={Haut} alt="fleche en haut"></img>
                : <img style={{display:"inline-block",transform:"translateY(0.8em)"}} src={Bas} alt="fleche en bas"></img>}
            </div>
        );
    }

    render() {
        return (
            <div style={{ flex: "2", display: "flex", flexDirection: "column", alignItems: "center" }} className="double-widget-subcontainer">
                <section style={{ width: "100%", textAlign: "left" }}>
                    <h2 style={{display:"inline-block"}}>Evolution salaire (net)</h2> {this.getPourcentage()}
                </section>
                <ResponsiveContainer width="90%" height="60%">
                    <AreaChart
                        margin={{ top: 0, right: 40, left: 40, bottom: 0 }}
                        data={this.data}>
                        <XAxis dataKey="date" stroke="#275EF6" axisLine={false} tickLine={false}>
                        </XAxis>
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="montant" stroke="#275EF6" width={50} fill="#275EF6" dot={true} />
                        {this.data.map((d) => <ReferenceLine key={d.montant} y={d.montant} stroke="#DEDEDE" strokeDasharray="3 3" />)}
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default SalaireTile;