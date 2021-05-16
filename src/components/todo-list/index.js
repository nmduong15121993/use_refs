import React from 'react';
import axios from 'axios';
import { ListItem } from './list-item';
import { URL_API } from './../../common/constants';

const TodoList = () => {
  const ref = React.useRef(null);
  const [dataInput, setDataInput] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(URL_API)
        setDataInput(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const onhandleEnter = async ({ keyCode }) => {
    const dataSend = ref.current.value;
    if(keyCode === 13 && dataSend) {
      try {
        const { data } = await axios.post(URL_API, { dataInput: dataSend }) 
        setDataInput(dataInput.concat(data));
      } catch (error) {
        console.log(error);
      } finally {
        ref.current.value = "";
      }
    }
  };

  const onhandleDelete = async (id) => {
    const { status } = await axios.delete(`${URL_API}/${id}`);
    if(status === 200) {
      const newData = dataInput.filter((item) => item.id !== id);
      setDataInput(newData);
    }
  };

  return (
    <div>
      <h1> Todo List </h1>
      <input
        ref={ ref }
        placeholder="Typing data"
        onKeyDown={(key) => onhandleEnter(key)}
        style={{
          width: "350px",
          margin: "10px"
        }}
      />
      <ListItem  dataInput={dataInput} onhandleDelete={onhandleDelete} />
    </div>
  )
}

export { TodoList };
