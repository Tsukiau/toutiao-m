// 封装本地存储操作模块

export const getItem = value => {
   const data = localStorage.getItem(value);
   try {
     return JSON.parse(data)
   }catch(err){
     return data
   }
}

export const setItem = (name,value) => {
  localStorage.setItem(name,JSON.stringify(value))
 
}


export const removeItem = (name