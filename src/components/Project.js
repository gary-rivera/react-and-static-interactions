import projects from '../utils/projects'

//Styling
import styled from "styled-components";

/**
 * ProjectCard takes
 * @returns 
 */


/**
 * project format: 
 *    title: null,
      repoLink: null,
      deployedLink: null,
      technologies: null,
      img: null
 */

function Project() {
  return (
    <ProjectStyle>
      <h4> {projects.title}</h4>
      <div className="card">
        <p className="hidden">{projects.description}</p>
        <img src={projects.img} alt={projects.title}/>
        <div className=""> 
          <a href={projects.repoLink}>Repo</a>
          <a href={projects.deployedLink}>Demo</a>
          <ul>
            {projects.technologies.map( (technology) => {
              return <li>{technology}</li>
            })
            }
          </ul>
        </div>
      </div>
    </ProjectStyle>
  )
}

const ProjectStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .hidden {
    display: none;
  }

  h4{
    max-width: 250px;
    font-size: 1.5rem;
    text-align: center;
  }

  .card {
    border: 1px solid #00695C;
    border-radius: 10px;
    height: 350px;
    width: 250px;
    @media (max-width: 1300px) {
      justify-content: center;
    }

    img {
      width: 100%;
      border-radius: 10px 10px 0 0;
    }
    a{
      display: block;
      text-align: center;
    }

    ul{
      text-align: center;
    }
  }

  .card:hover {
    p {
      display: inline;
      position: absolute;
    }
  }
`;

export default Project;