import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/[cid]/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/[cid]/Assignments/reducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentsReducer,
  },
});

export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import modulesReducer from "./Courses/[cid]/Modules/reducer";
// import accountReducer from "./Account/reducer";

// const store = configureStore({
//   reducer: {
//     modulesReducer,
//     accountReducer,
//   },
// });

// export default store;
// import { configureStore } from "@reduxjs/toolkit";
// import modulesReducer from "./Courses/[cid]/Modules/reducer";
// import assignmentsReducer from "./Courses/[cid]/Assignments/reducer";

// const store = configureStore({
//   reducer: {
//     modulesReducer,
//     assignmentsReducer,
//   },
// });

// export default store;