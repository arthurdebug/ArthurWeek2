import React from "react";
export default class Link extends React.Component {
    render() {
      return (
        <div className="lisk">
          <a data-id={this.props.id} href={this.props.url} target="blank">
            {this.props.title}
          </a>
          {this.props.tags
            ? this.props.tags.map((tag, i) => (
                <p className="tag" key={i}>
                  {tag.name}
                </p>
              ))
            : ""}
        </div>
      );
    }
  }