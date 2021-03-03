import React from "react";

class Hero extends React.Component {
  logo = "http://localhost:4040/icons/cat.svg";

  render() {
    return (
      <div className="text-center hero">
        <img
          className="mb-3 app-logo"
          src={this.logo}
          alt="Cat logo"
          width="120"
        />
        <h1 className="mb-4">Cat Wrangler!</h1>
        <p className="lead">
          Because herding cats is difficult for everyone.
        </p>
      </div>
    );
  }
}

export default Hero;
