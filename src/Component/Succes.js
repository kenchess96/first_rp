import React, { Component } from 'react';
import { Chart, Ticks, Layer, Bars } from 'rumble-charts';

class Succes extends Component{
    constructor(props){
        super(props);
        this.state = { error: null,
            isLoaded: false,
            items: [],
        }
    }
    componentDidMount() {
        fetch("https://api.github.com/users/Facebook/repos")
        .then(res => res.json())
        .then(json => {
        this.setState({
            isLoaded: true,
            items: json,
        })
        console.log(json);
        }
        )
    }
    render() {
        var { isLoaded, items} = this.state
        if (!isLoaded) 
        {
            return <div>load</div>
        }
        else {
            
        const series = [{
            name: 'John',
            data: [1, 2, 3]
            }, {
            name: 'Jane',
            data: [5, 7, 11]
            }, {
            name: 'James',
            data: [13, 17, 19]
            }];
        return (
        <div style={{fontFamily:'sans-serif',fontSize:'0.8em'}}>
        <Chart width={600} height={300} series={series} minY={0}>
        <Layer width='80%' height='90%' position='top center'>
            <Ticks
            axis='y'
            lineLength='100%'
            lineVisible={true}
            lineStyle={{stroke:'lightgray'}}
            labelStyle={{textAnchor:'end',dominantBaseline:'middle',fill:'lightgray'}}
            labelAttributes={{x: -5}}
            />
            <Ticks
            axis='x'
            label={({index, props}) => props.series[index].name}
            labelStyle={{textAnchor:'middle',dominantBaseline:'text-before-edge',fill:'lightgray'}}
            labelAttributes={{y: 3}}
            />
            <Bars
            groupPadding='3%'
            innerPadding='0.5%'
            />
        </Layer>
        </Chart>
        </div>
        );
        }
      }
    }

export default Succes;