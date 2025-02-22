import Cookies from "js-cookie";

const CookieManager = {
  set: (name, value, days = 7) => {
    Cookies.set(name, value, { expires: days, secure: true, sameSite: "Lax", path: "/" });
  },

  get: (name) => {
    return Cookies.get(name) || null;
  },

  delete: (name) => {
    Cookies.remove(name, { path: "/" });
  }
};

export default CookieManager;
