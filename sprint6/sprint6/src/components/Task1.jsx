import React, { Component } from 'react';

export default class Task1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    // Set isLoading to true while waiting for the response
    this.setState({ isLoading: true });

    fetch('http://127.0.0.1:8080') // Replace with your server's endpoint
      .then((response) => response.json())
      .then((data) => {
        // Once the data is received, update the state
        this.setState({ data, isLoading: false });
        console.log(data);
      });
      // .catch((error) => {
      //   // Handle any errors here
      //   console.error('Error fetching data:', error);
      //   this.setState({ isLoading: false });
      
  }

  render() {
    // const { data, isLoading } = this.state;

    return (
      <div>
        {/* {isLoading ? (
          // Display "block#2" while waiting for the response
          <div>block#2</div>
        ) : (
          // Display "block#1" with the fetched data */}
          <div>
          <h2>block#1</h2>
          {this.data}
            {/* <ul>
              {data.map((item) => (
                <li key={item.id}>{`id - ${item.id} `}</li>
              ))}
            </ul> */}
          </div>
        {/* )} */}
      </div>
    );
  }
}
