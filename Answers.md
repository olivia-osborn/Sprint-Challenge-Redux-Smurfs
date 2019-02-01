1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Filter, map, and concat. The Object.assign method creates a new object while extending another property's.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is where the state is stored in redux. It is separate from the rest of the application, and maintains a history of all states, because each time a state is changed, it is added as a new object to the store, which is why it is known as the single source of truth. Actions can be invoked by users such as when they click on buttons. These actions then trigger a reducer which is what updates the store accordingly. The store can only be updated by a reducer, which is triggered by an action.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

A component state is when state is stored in different container components and passed down as props to lower components. An application state like redux means that state is stored separate from the application, and is passed in where needed to a component. If you deal with lots of data, and have a very large application, an application state will make life much simpler. It reduces the amount of props that need to be passed down, and makes for clearer code. Though component state works well for smaller applications.

1.  What is middleware?

Middleware can be added between actions and reducers to control what is passed to the reducer. It can allow the action to pass unhindered, it can stop the action from being passed, or it can change the action being passed.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is a form of middleware that allows us to use the dispatch function in our action creators. This allows us to write asynchronous code.

1.  Which `react-redux` method links up our `components` with our `redux store`?
.connect()