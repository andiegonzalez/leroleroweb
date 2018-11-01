import React from 'react';
import Project from '../components/Project';

class Project extends React.Component {

  render() {
    return(
      <div className="project-grid">
        {
          projects.map(project => (
            <Project key={project.id} title={project.title} img={project.img}/>
          ));
        }
      </div>
    );
  }
}
