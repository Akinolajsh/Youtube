import axios from "axios";

const connection = axios.create({
  baseURL: "http://localhost:3000",
});

export const getAllEntries = async () => {
  try {
    return await connection.get("/data").then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const addnewEntries = async (data:any) => {
  try {
    await connection.post("/data", data).then((res)=>{
        return res.data
    })
  } catch (error) {
    console.log(error);
  }
};
