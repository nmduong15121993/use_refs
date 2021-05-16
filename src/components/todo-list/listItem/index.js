import React from 'react';
import styles from './listItem.module.css';

const ListItem = ({ dataInput, onhandleDelete }) => {

  const element = dataInput.map((data) => {
    return(
      <div 
        className={`container ${styles.todo}`}
        key={ data.id } 
      >
        <label style={{ width: "500px" }} className="item item2" >
          { data.dataInput }
        </label>
        <button 
          className="item item3"
          onClick={() => onhandleDelete(data.id) }
        >
          X
        </button>
      </div>
    )
  });

  return (
    <li style={{listStyle: "none"}}>
      { element }
    </li>
  )
}

export { ListItem } ;
