import React, {Fragment} from 'react' // extension racf creactes arrow function component.
import spinner from './spinner.gif'


// export const Spinner = () => { // If there is no other javaScript here then we can return the fragment directly using arrow functions. so we lose the return(). see below
    
//     return (
//         <Fragment>
//             <img src={spinner} alt="loading..." style={{width: '200px', margin:'auto', display:'block'}}/>
//         </Fragment>
//     )
// }

export const Spinner = () =>  <Fragment>
    <img src={spinner} alt="loading..." style={{width: '200px', margin:'auto', display:'block'}}/>
    </Fragment>
    
export default Spinner
