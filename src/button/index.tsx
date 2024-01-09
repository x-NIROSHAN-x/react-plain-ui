import React from 'react'

export type ButtonProps = {
    label: string
}
export const Button = ({ label }: ButtonProps) => {
    return (
        <div>
            <button>{label}!</button>
        </div>
    )
}