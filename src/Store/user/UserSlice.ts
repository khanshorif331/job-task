import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface user {
    name: string,
    email: string,
    password: string,
}

interface userState {
    value : user[]
    loggedIn: boolean
}

const initialState: userState = {
    value: [],
    loggedIn: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        register: (state, action: PayloadAction<user>) => {
            state.value=[...state.value, 
                action.payload]
            // state.value.push(action.payload)
        },
        login: (state, action: PayloadAction<user>) => {
            const user = state.value.find((user) => user.email === action.payload.email)
            if(user){
                 state.loggedIn = true
            }else{
                state.loggedIn = false
            }

        }
    }
})

// const initialState = {
//     users : [],
//     loggedInUser : {},
// }


// export const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         register: (state=initialState, action : PayloadAction<user>) => {
//             state.users.push(action.payload)
//         },
//         login : (state, action : PayloadAction<user>) => 
//             state.loggedInUser = action.payload
//         }
//     }
// })


export const {register,login} = userSlice.actions





export default userSlice.reducer