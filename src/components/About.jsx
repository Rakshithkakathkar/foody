import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        About - Class component
        {/* <User name={"Rakshith"} /> */}
        <div>
          <UserContext.Consumer>
            {({loggedInUser}) => <h1>{loggedInUser} from context</h1>}
          </UserContext.Consumer>
        </div>
        <UserClass name={"Rakshith"} location={"Bangalore"} />
      </div>
    );
  }
}

export default About;
