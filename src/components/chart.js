import React from 'react';
import _ from 'lodash';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

export default function (props) {
    function average(data){
        return _.round(_.sum(data)/data.length);
    }
    return (
        <div>
            <Sparklines height={100} width={150} data={props.data}>
                <SparklinesLine color={props.color}></SparklinesLine>
                <SparklinesReferenceLine type='avg'/>
            </Sparklines>
            <div>
                {average(props.data)} {props.unit}
            </div>
        </div>
    )
}