### 1. What is Redux?

Redux is predictable state container for JavaScript apps.

1. **Redux is for JavaScript applications.**
   1. Redux is not tied to React.
   2. Can be used with React, Angular, Vue or even vanilla javascript
   3. Redux is a library for javascript applications
2. **Redux is a state container**

   1. Redux stores the state of your applicaiton
   2. consider a react app - state of a component
   3. state of an app is the state shared by all the individual components of that app
   4. Redux will store and manage the application state

   ```jsx
   LoginFormComponent;
   state = {
     username: "",
     password: "",
     submitting: false,
   };

   userListComponent;
   state = {
     users: [],
   };

   Application;
   state = {
     isUserLoggedIn: true,
     username: "Masum",
     profileUrl: "",
     onlineUsers: [],
     isModalOpened: false,
   };
   ```

3. **Redux is predictable**
   1. Redux is a state container
   2. The state of the application can change. Ex. todo list app - item(pending) → item(completed)
   3. In redux, a pattern is enforced to ensure all state transition are explicit and can be tracked
   4. the changes to your application’s state become predictable

### Why redux?

If we want to manage the global state of your application in a predictable way, redux can help you.

The patterns and tools provided by Redux make it easier to understand when, where, why and how the state in your application is being updated, and how our application logic will behave when those changes occur.

Redux guides us towards writing code that is predictable and testable, which gives us confidence that our application will work as expected.

### Why redux toolkit?

Redux is great but it does have a few shortcomings.

- Configuring redux in an app seems complicated
- In addition to redux, a lot of other packages have to be installed to get redux to do something useful
- Redux requires too much boilerplate code

Redux toolkit serves as an abstraction over redux. It hides the difficult parts ensuring we have a good developer experience.

1. **Redux toolkit featuring React -** Redux or Redux toolkit don’t need a UI library to work(RTK + React)
2. **React-Redux -** is the official Redux UI binding library for React

   React → React-Redux → Redux(toolkit)

### Summary

React is a library used to build user interfaces

Redux is a library for managing state in a predictable way in javascript applications

Redux toolkit is a library for efficient redux development

React-redux is a library that provides bindings to use React and Redux(toolkit) together in an application.

### When should I use redux in my react application?

- You have large amounts of application state that are needed in many places in the app
- The app state is updated frequently over time
- The logic to update that state may be complex
- The app has a medium or large-sized codebase, and might be worked on by many people
