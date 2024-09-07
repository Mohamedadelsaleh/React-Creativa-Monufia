import React, {useContext} from 'react'
import { PlaceContext, UserContext } from '../../../../../App'

function ComponentF() {

    const value = useContext(UserContext);
    const place = useContext(PlaceContext);

  return (
    <div>
        <h6> ComponentF new era of Context -- {value.name} and place {place}</h6>
    </div>
  )
}

export default ComponentF