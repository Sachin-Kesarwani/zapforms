export const localStorageUtil = {
    set: (key, value) => {
      try {
        // Convert the value to JSON before saving.
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Error setting item ${key} in localStorage`, error);
      }
    },
  
    get: (key) => {
      try {
        const storedValue = localStorage.getItem(key);
        // Return parsed JSON if available, else null.
        return storedValue ? JSON.parse(storedValue) : null;
      } catch (error) {
        console.error(`Error getting item ${key} from localStorage`, error);
        return null;
      }
    },
  
    remove: (key) => {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error(`Error removing item ${key} from localStorage`, error);
      }
    },
  };
  