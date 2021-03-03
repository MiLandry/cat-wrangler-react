import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-light p-3 text-center">
        <div className="logo" />
        <p>
          Placeholder footer text{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://michaellandry.online/">
            And a cool link
          </a>
        </p>
      </footer>
    );
  }
}
export default Footer;
