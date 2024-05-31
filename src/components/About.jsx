import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        About - Class component
        {/* <User name={"Rakshith"} /> */}
        <UserClass name={"Rakshith"} location={"Bangalore"} />
      </div>
    );
  }
}

export default About;
