import React from 'react'

class GetRequestSetHeader extends React.Component
{

    constructor(props){
    super(props);
    this.state = { totalRactPackages: null };
};
     componentDidMount(){
    const headers ={ 'Content-Type':'application/json' }
        fetch('https://api.npms.io/v2/search?q=react', { headers })
    .then(response => response.json())
    .then(data => this.setState({totalRactPackages: data.total }));
     }
    
     render(){
    const {totalRactPackages} =this.state;
    return (
        <div className="card text-center m-3">
            <h5 className="card-header">GET Request with Set Headers</h5>
            <div className="card-body">Total packages: {totalRactPackages}</div>
        </div>
    );
    }
    }
    export default GetRequestSetHeader;