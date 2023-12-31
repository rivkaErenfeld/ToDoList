import axios from 'axios';

const apiUrl = "http://localhost:5116"

export default {
  getTasks: async () => {
    const result = await axios.get(`${apiUrl}/items`)    
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    const result = await axios.put(`${apiUrl}/${name}`)    
    //TODO
    return result.data;
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    const result = await axios.post(`${apiUrl}/${id}/${isComplete}`)
    return result.data;
  },

  deleteTask:async(id)=>{ 
    console.log('deleteTask')
  }
};
