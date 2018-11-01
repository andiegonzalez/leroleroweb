import React from 'react';
import { Link } from 'react-router-dom';

class Project extends React.Component {

  const { key, img, title } = this.props;

  render() {
    return(
      <div className="project-item">
        <img src={`${img}`} alt={`Foto del Proyecto ${title}`}>
          <h3>{title}</h3>
          <Link to={`/project/${key}`}><i class="fas fa-long-arrow-alt-right"></i></Link>
        </img>
      </div>
    );
  }
}
