const Total = (props) =>{
    const sum = props.items.reduce((acc,current_value) => acc + current_value, 0)
   return (

       <>
       {sum}
       </>

   )

}
export default Total