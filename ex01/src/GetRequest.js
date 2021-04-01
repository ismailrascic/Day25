import React from 'react'
class GetRequest extends React.Component{

constructor(props){
super(props);
this.state = { totalRactPackages: null };
}
componentDidMount(){
fetch('https://api.npms.io/v2/search?q=react')
.then(response => response.json())
.then(data => this.setState({totalRactPackages : data.total}));
}

 render(){
const {totalRactPackages} =this.state;
return (
    <div className="card text-center m-3">
        <h5 className="card-header">Siple GET Request</h5>
        <div className="card-body">Total packages:{totalRactPackages}</div>
    </div>
);
}
}
export default GetRequest