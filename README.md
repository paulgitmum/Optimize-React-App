# Optimize-React-App
Welcome to the Optimize-React-App wiki!

# _How To Optimize React App Performance_

## _Using useMemo( )_
### It is a React hook that is used for caching CPU-Expensive functions
### CPU-Expensive function gets called repeatedly due to re-renders of a component, which can lead to slow rendering.
### useMemo( ) hook can be used to cache such functions. By using useMemo( ), the CPU-Expensive function gets called only when it is needed.

 ## _Using React.PureComponent_
### Instead of using the simple React.Component, we can use React.PureComponent to reduce the re-renders of a component unnecessarily.

## _React.memo()_
### When a component is wrapped in React.memo(), React renders the component and memoizes the result.

##  _shouldComponentUpdate()_
### Is the first real life cycle optimization method that we can leverage in React.It prevents unnecessary renders.