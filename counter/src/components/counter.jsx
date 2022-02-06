import React, { Component } from 'react';                  

class Counter extends Component {                 
    // state = { 
    //     id : this.props.counter.id,
    //     value:this.props.counter.value,
    // }
    
    rend(){
        const val=this.props.counter.value;
        return val===0?"Zero" : val;
    }
    getBatchClasses() {
        let classes = "badge m-2 badge-";
        if(this.props.counter.value===0)
            classes+='warning'
        else if(this.props.counter.value>0)
            classes+='primary'
        else
            classes+='danger'
        return classes;
    }

    render(){
        return(
                <React.Fragment>
                <li className='m-2'>
                <span className={this.getBatchClasses()} style={{fontSize:20}}>{this.rend()} </span>
                <button className='btn btn-secondary btn-sm m-2' style={{fontSize:20}} 
                    onClick={()=>this.props.onIncrement(this.props.counter.id)}>Increment</button>
                <button className='btn btn-secondary btn-sm m-2' style={{fontSize:20}}
                     onClick={()=>this.props.onDecrement(this.props.counter.id)}>decrement</button>
                <button className='btn btn-danger btn-sm m-2' style={{fontSize:20}}
                   onClick={()=>this.props.onDelete(this.props.counter.id)}>delete</button>
                </li>
                </React.Fragment>
        )
    }

    // render(){
    //     const items=[]
    //     for(let i=0;i<this.state.plus;i++){
    //         items.push(<li key={i}>
    //             <span className={this.getBatchClasses()} style={{fontSize:20}}>{this.rend()} </span>
    //             <button className='btn btn-secondary btn-sm m-2' style={{fontSize:20}} 
    //                 onClick={()=> this.increment(i) }>Increment</button>
    //             <button className='btn btn-secondary btn-sm m-2' style={{fontSize:20}} onClick={this.decrement}>decrement</button>
    //                  </li>)
    //     }
    //     return (
    //         <React.Fragment>
    //         <ul>
    //             {items}
    //         </ul>
    //         </React.Fragment>
    //     );
    // }

    // render() { 
    //     let a='Tags Avaliable '+this.a.length;
    //     return (<React.Fragment>
    //             <ul>
    //             {this.a.length!=0 && <h1>{a}</h1>}
    //             {this.a.map(count => 
    //                 <li key={count}>
    //             <span className={this.getBatchClasses()} style={{fontSize:20}}>{this.rend()} </span>
    //             <button className='btn btn-secondary btn-sm m-2' style={{fontSize:20}} onClick={this.increment}>Increment</button>
    //             <button className='btn btn-secondary btn-sm m-2' style={{fontSize:20}} onClick={this.decrement}>decrement</button>        //             </li> )}
    //             </ul>
    //             </React.Fragment>); 
    // }
}
 
export default Counter;