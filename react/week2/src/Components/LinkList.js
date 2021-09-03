import React from "react";
import Link from "./Link";
export default class LinkedList extends React.Component {
    render() {
      return (
        <div>
          {this.props.links && this.props.links.length > 0
            ? this.props.links.map((link, i) => (
                <Link
                  key={link.id} // i isnt always the best
                  title={link.title}
                  url={link.url}
                  id={link.id}
                />
              ))
            : "loading"}
        </div>
      );
    }
  }

