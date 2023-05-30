import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react-test-renderer";

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
export const updateBlog = createAsyncThunk(
    "blogs/updateBlog",
    async (item:any) => {
        const response = await axios.put(`https://64731455d784bccb4a3c3e14.mockapi.io/blogs/${item.id}`,item);
        console.log(item);
        
        return response.data;
        
    }
)
export const getBlogById = createAsyncThunk(
    "blogs/getBlogById",
    async (id:any) => {
        const response = await axios.get(`https://64731455d784bccb4a3c3e14.mockapi.io/blogs/${id}`);
        return response.data;
    }
)



interface BlogState {
    data: [];
    loading: boolean;
    error: string | null;
    blog: [];

}

const initialState: BlogState = {
    data: [],
    loading: false,
    error: " ",
    blog:[]
}
const blogSlice = createSlice({
    name: "blogs",
    initialState:initialState,
    reducers: {
        addtoFav: (state,action) => {
            let favorites=[]
            favorites.push(action.payload)
            console.log(favorites);

        }
    },
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
    }).addCase(addBlog.pending, (state, action) => {
    
    }).addCase(addBlog.fulfilled,(state:any,action)=>{
        state.data=action.payload
        state.loading=false;
        state.error=null;

        

    }).addCase(addBlog.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.error.message || "Error Occured";

    }).addCase(updateBlog.pending, (state, action) => {
       

    }).addCase(updateBlog.fulfilled,(state:any,action)=>{
        state.blog=action.payload;
        state.loading=false;
        state.error=null;
        const newBlog=state.data.map((b: { id: any; })=>{
            if(b.id===action.payload.id){
                return b=action.payload;
            }
            return b;
        })
        state.data=newBlog;

    }).addCase(updateBlog.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.error.message || "Error Occured";
    })

    builder.addCase(getBlogById.pending, (state, action) => {
        state.loading = true;

    }).addCase(getBlogById.fulfilled,(state,action)=>{
        state.blog=action.payload;
        console.log(action.payload);
        
        state.loading=false;
        state.error=null;
        
    }).addCase(getBlogById.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.error.message || "Error Occured";
    })

}})

export default blogSlice.reducer;
export const { addtoFav } = blogSlice.actions;
