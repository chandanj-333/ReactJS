import React, { Component } from 'react';
import Counter from './counter';
import NavBar from './navbar';
class Counters extends Component {
    state = { 
        counters:[
            // {id:1,value:1}
        ]
    } 

    plus = () => {
        this.state.counters.push({id:Math.random(),value:1})
        //console.log(this.state.counters)
        this.setState({counters:this.state.counters})
    }

    minus = () => {
        this.state.counters.pop()
        this.setState({counters:this.state.counters})
    }

    reset = () =>{
        //alert('Reset Clicked')
        const resetCounter = this.state.counters;
        for(let i=0;i<resetCounter.length;i++){
            resetCounter[i].value=0;
        }
        this.setState({counters:resetCounter})
    }

    handleDelete = counterID => {
        //console.log(counterID)
        const count = this.state.counters.filter(c => c.id !==counterID);
        //console.log("Pressed",count)
        this.setState({counters:count})
    }

    increment = counterID =>{
        const counters= this.state.counters;
        for(let i=0;i<counters.length;i++){
            if(counters[i].id===counterID){
                counters[i].value+=1
            }
        }
        this.setState({counters})
    }

    decrement = counterID =>{
        //console.log("decrement pressed")
        const counters= this.state.counters;
        for(let i=0;i<counters.length;i++){
            if(counters[i].id===counterID){
                counters[i].value-=1
            }
        }
        //console.log(counters)
        this.setState({counters})
    }

    total=()=>{
        let value=0;
        for(let i=0;i<this.state.counters.length;i++){
            value+=this.state.counters[i].value
        }
        return value
    }
    
    render() { 
        var a;
        if(this.state.counters.length===0)
            a='No tags available..Plzz Add One'
        else
            a='Tags Available '+this.state.counters.length;
        return (<React.Fragment>
            <NavBar total={this.state.counters.filter(c=>c.value>0).length} />
            <h1 className='m-3'>{a}</h1>
            <span className='badge badge-info m-2' style={{fontSize:20}}>{this.total()}</span>
            <button className='btn btn-dark btn-sm m-2' onClick={this.plus} disabled={this.state.counters.length>=5}>+</button>
            <button className='btn btn-dark btn-sm m-2' onClick={this.minus} disabled={this.state.counters.length<=0}>-</button>
            <button className='btn btn-success btn-sm m-2' onClick={this.reset} disabled={this.state.counters.length<=0 }>Reset</button>
            {/* {this.state.counters.map(counter => (<Counter key={counter.id} value={counter.value} />))} */}
            {this.state.counters.map(counter => (<Counter key={counter.id} counter={counter}  
                onDelete={this.handleDelete} onIncrement={this.increment} onDecrement={this.decrement}/>))}
            </React.Fragment>
        );
    }
}
 
export default Counters;