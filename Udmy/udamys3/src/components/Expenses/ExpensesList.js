import React from 'react';
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem';


const ExpensesList = (props) => {


    // if (props.items.length === 0) {
    //     return <p className='expenses-list__fallback'> No Expenses Find !!!! </p>
    // }

    return (
        <>
            {
                props.items.length === 0 && <p style={{ color: 'rgb(66%, 57%, 93%)', textAlign: 'center' }}> No Expenses Find!!!! </p>
            }
            {
                props.items.length > 0 && props.items.map((expense) => {
                    return (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}
                        key={expense.id} />)
                })
            }
        </>
    )

    // return(
    // <li className='.expenses-list' style={{ listStyle: 'none' }}>
    //     {props.items.map((expense) => {
    //         return (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}
    //             key={expense.id} />)
    //     })}</li>
    // )

}
export default ExpensesList

// {
//     filteredExpenses.length === 0 ? <p style={{ color: 'rgb(66%, 57%, 93%)', textAlign: 'center' }}> No Expenses Find!!!! </p> : filteredExpenses.map((expense) => {
//       return (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}
//         key={expense.id} />)
//     })
//  } ------- for filter the list ------



// {
//     filteredExpenses.length === 0 && <p style={{ color: 'rgb(66%, 57%, 93%)', textAlign: 'center' }}> No Expenses Find!!!! </p>
// }

// {
//     filteredExpenses.length > 0 && filteredExpenses.map((expense) => {
//         return (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}
//             key={expense.id} />)
//     })
// } --------- for filter the list---------




// {filteredExpenses.map((expense) => {
//           return (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}
//             key={expense.id} />)
//         })}   ------- for rendering the list ------



//  <ExpenseItem
//           title={props.items[0].title}
//           amount={props.items[0].amount}
//           date={props.items[0].date}
//         />
//         <ExpenseItem
//           title={props.items[1].title}
//           amount={props.items[1].amount}
//           date={props.items[1].date}
//         />
//         <ExpenseItem
//           title={props.items[2].title}
//           amount={props.items[2].amount}
//           date={props.items[2].date}
//         />
//         <ExpenseItem
//           title={props.items[3].title}
//           amount={props.items[3].amount}
//           date={props.items[3].date}
//         /> 