export const setCacheData = (key,v)=>{
  var storage=window.localStorage;

  storage.setItem(key,v)
}
export const getCacheData=key=> {
  return window.localStorage.getItem(key);
}
export const clearCacheData=arrkeys=> {
  var storage=window.localStorage;

  for (let i = 0; i < arrkeys.length; i++) {
    storage.removeItem(arrkeys[i]);
  }
}
