import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface user {
    name: string | null,
    email: string,
    password: string,
}

interface userState {
    users : user[]
    loggedIn: boolean
}

const initialState: userState = {
    users: [],
    loggedIn: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        register: (state, action: PayloadAction<user>) => {
            state.users=[...state.users, 
                action.payload]
            // state.value.push(action.payload)
        },
        login: (state, action: PayloadAction<user>) => {
            // state.loggedIn = true
            const user = state.users.find((user) => user.email === action.payload.email && user.password === action.payload.password)
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
