import React from "react";
import "./FeaturedProject.css";

const FeaturedProject = React.forwardRef(
  (
    {
      pdId,
      image,
      title,
      headline,
      caption,
      description,
      sourceCode,
      liveDemo,
    },
    ref
  ) => {
    return (
      <div className="project-ref-detect" ref={ref}>
        <div
          className={
            pdId < 6
              ? "project-container isVisibleOnLoad"
              : pdId % 2 === 0
              ? "project-container isNotVisibleLeft"
              : "project-container isNotVisibleRight"
          }
          id={`id-${pdId}`}
        >
          <div className="project-details">
            <div className="project-verbiage">
              <h1>{title}</h1>
              <h3>{headline}</h3>
              <h4>{caption}</h4>
              <div className="project-description">
                {description.split("\n").map((str) => (
                  <p key={`${str}`}>{str}</p>
                ))}
              </div>
              <a href={`${sourceCode}`} target="blank">
                <button>Git Repo</button>
              </a>
              {liveDemo ? (
                <a href={`${liveDemo}`} target="blank">
                  <button>Live Demo</button>
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="project-preview">
            <img
              src={require(`../../Static/img/${image}.png`)}
              alt={title}
            ></img>
          </div>
        </div>
      </div>
    );
  }
);

export default FeaturedProject;
