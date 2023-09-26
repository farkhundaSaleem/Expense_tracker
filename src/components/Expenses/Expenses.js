import React from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

export default function Expenses() {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
        },
        { id: 'e2', title: 'New TV', amount: 799.49 },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 450,
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
        },
    ];

    return (
        <>

            <h1>Expense Tracker App</h1>
            <div className="expenses">
                <Card>
                    { expenses.length && expenses.map(expense =>
                        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} />
                    )}
                </Card>
            </div>
        </>
    )
}
