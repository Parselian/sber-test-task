export interface stepProps {
    label: string,
    status: 'completed' | 'pending' | 'inactive'
}

export default interface TimelineProps {
    type: string,
    position: string,
    steps: stepProps[]
}