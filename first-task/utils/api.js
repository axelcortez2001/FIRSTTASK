// utils/api.js
import Axios from "axios";

export const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/routes", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to get data.");
    } else {
      return res.json();
    }
  } catch (error) {
    console.log(error);
  }
};
