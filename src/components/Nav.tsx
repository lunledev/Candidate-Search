import {NavLink} from 'react-router-dom';
const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  

  return (
    <div>
      <h1>
        <NavLink to ='/'>Home</NavLink>
      </h1>
      <h1>
        <NavLink to ='/SavedCandidates'>Potential Candidates</NavLink>
      </h1>
    </div>
  )
};

export default Nav;
