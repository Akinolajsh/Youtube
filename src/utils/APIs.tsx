import axios from "axios";

const url = axios.create({
  baseURL: "http://localhost:3000",
});

export const getAllEntries = async () => {
  try {
    return await url.get("/data").then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const addnewEntries = async (data:any) => {
  try {
    return await url.post("/data", data).then((res)=>{
        return res.data
    })
  } catch (error) {
    return error;
  }
};
