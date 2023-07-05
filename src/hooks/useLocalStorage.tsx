export default function useLocalStorage(key: string) {
  function setLocalStorage(value: unknown) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  function getFromLocalStorage() {    
    const data = localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key) || "[]")
      : null;
      
    return data;
  }
  return {
    getFromLocalStorage,
    setLocalStorage,
  };
}
