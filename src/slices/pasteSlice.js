import { createSlice } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';

const initialState = {
    pastes: localStorage.getItem("pastes") ? JSON.parse(localStorage.getItem("pastes")) : []
}

const pasteSlice = createSlice({
    name: "paste",
    initialState,
    reducers: {
        addPaste: (state, action) => {
            const paste = action.payload;

            //add a check -> paste already exist
            state.pastes.push(paste);
            localStorage.setItem("pastes", JSON.stringify(state.pastes));
            toast.success("Note created successfully");
        },

        updatePaste: (state, action) => {
            const paste = action.payload;
            const index = state.pastes.findIndex((item) => item.id === paste.id);
            
            if(index >= 0) {
                state.pastes[index] = paste;
                
                localStorage.setItem("pastes", JSON.stringify(state.pastes));

                toast.success("Note updated");
            }
        },

        resetPaste: (state) => {
            if(state.pastes.length > 0) {
                const confirmAllDelete = confirm("Do you want to delete all notes?");
                if(confirmAllDelete) {
                    state.pastes = [];
                    localStorage.setItem("pastes", JSON.stringify(state.pastes));
                    toast.success("All notes deleted");
                }
            } else {
                alert("No notes to delete")
            }
        },

        removePaste: (state, action) => {
            const confirmDelete = confirm("Do you want to permanently delete this note?")
            if(confirmDelete) {
                const pasteId = action.payload;
                const index = state.pastes.findIndex((item) => item.id ===  pasteId);
    
                if(index >=0) {
                    state.pastes.splice(index, 1);
                    localStorage.setItem("pastes", JSON.stringify(state.pastes));
                    toast.success("Note deleted.");
                }
            }
        }
    }
})

export const {addPaste, updatePaste, resetPaste, removePaste} = pasteSlice.actions;

export default pasteSlice.reducer;