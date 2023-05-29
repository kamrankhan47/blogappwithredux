import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllBlogs = createAsyncThunk(
    "blogs/getAllBlogs",
    async () => {
        const response = await axios.get("https://64731455d784bccb4a3c3e14.mockapi.io/blogs/");
        return response.data;
    }
    );
export const deleteBlog = createAsyncThunk(
    "blogs/deleteBlog",
    async (item:any) => {
        await axios.delete(`https://64731455d784bccb4a3c3e14.mockapi.io/blogs/${item.id}`);
        return item;
    }
)    

export const addBlog = createAsyncThunk(
    "blogs/addBlog",
    async (item:any) => {
        const response = await axios.post("https://64731455d784bccb4a3c3e14.mockapi.io/blogs/",item);
        return response.data;
    }
)


interface BlogState {
    data: [];
    loading: boolean;
    error: string | null;

}

const initialState: BlogState = {
    data: [],
    loading: false,
    error: " ",
}
const blogSlice = createSlice({
    name: "blogs",
    initialState:initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(getAllBlogs.pending, (state, action) => {
             state.loading = true;
             
    }).addCase(getAllBlogs.fulfilled,(state,action)=>{
        state.data=action.payload;
        state.loading=false;
        state.error=null;
        
    }).addCase(getAllBlogs.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.error.message || "Error Occured";
    }).addCase(deleteBlog.pending, (state, action) => {
        
    }).addCase(deleteBlog.fulfilled,(state:any,action)=>{
        state.data=state.data.filter((item:any)=>item.id!==action.payload.id);
        state.loading=false;
        state.error=null;
        
    }).addCase(deleteBlog.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.error.message || "Error Occured";
    })

}})

export default blogSlice.reducer;