import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './style.scss';

function Concept() {
  return (
    <div className='concept'>
      <div className='concept-container'>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eos assumenda molestiae aliquam aliquid, iusto repudiandae voluptatem consectetur incidunt rem et perspiciatis omnis deleniti sed cum placeat fugiat harum sequi?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nihil voluptates sit totam facere incidunt odit cum odio. Amet ullam id aliquam, totam sapiente veniam deleniti perferendis at mollitia libero!
        </h2>
        <Link to='/demo'>
          <Button className='concept-container-buttondemo' negative>Démo</Button>
        </Link>
      </div>
    </div>
  )
}

export default Concept