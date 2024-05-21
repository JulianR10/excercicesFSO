

const Header = () => {
    const course = 'Half Stack application development'
    return(
      <>
        <h1>{course}</h1>
      </>
    )
  }
  
  const Content = ({part, exercises}) => {
    const objeto1 = {
      name: part,
      cuant: exercises
    }
    
    return(
      <>
        <p>{objeto1.name} {objeto1.cuant}</p>
      </>
    )
  }
  
  const Total = ({e1, e2, e3}) =>{
    const suma = parseInt(e1) + parseInt(e2) + parseInt(e3) 
    return(
      <>
        <p>{suma}</p>
      </>
    )
  }
  
  const App = () => {    
      return (
        <> 
          <Header />
          <Content part = 'Fundamentals of React' exercises='10'/>
          <Content part = 'Using props to pass data' exercises='7'/>
          <Content part = 'State of a component' exercises='14'/>
          <Total e1 = '10' e2 = '7' e3 = '14'/>
        </>
    )
  }
  
  export default App