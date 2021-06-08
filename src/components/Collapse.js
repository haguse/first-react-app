import React from "react";

class Collapse extends React.Component {
  constructor() {
    super();
    this.state = {
      showContent:false,
    };   
  } 

  showCard = () => {
    this.setState({showContent: !this.state.showContent})    
  }

  render() {
    return (
      <div className="px-3 mt-1">
        <button onClick={this.showCard} className="btn btn-primary w-100 ">Toggle for Card Component</button>
        {this.state.showContent ? (
          <div className="collapse show">{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

export default Collapse;