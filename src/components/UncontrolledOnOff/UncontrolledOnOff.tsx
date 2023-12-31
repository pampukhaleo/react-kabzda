import React, { useState } from 'react';
import './uncontrolledOnOff.css'

type OnOffPropTypes = {

}

export const UncontrolledOnOff = ({}: OnOffPropTypes) => {

  const [on, setOn] = useState<boolean>(false)

  const toggleCollapsed = () => setOn(value => !value)

  return (
    <div>
      <button className={ `btn ${ on && 'green' }` }
              onClick={ toggleCollapsed }
              disabled={ on }>On
      </button>
      <button className={ `btn ${ !on && 'red' }` }
              onClick={ toggleCollapsed }
              disabled={ !on }>Off
      </button>
      <div className={ `circle green ${ !on && 'red' }` }></div>
    </div>
  )
}

