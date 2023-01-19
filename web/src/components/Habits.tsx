interface HabitProps {
    completed: number
}

export default function Habit(props: HabitProps) {
    return (
        <h1>{props.completed}</h1>
    )
}