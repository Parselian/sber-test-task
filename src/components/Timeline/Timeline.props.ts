interface step {
    label: string,
    status: 'completed' | 'pending' | 'inactive'
}

export default interface TimelineProps {
    type?: 'dot' | 'line',
    position?: 'up' | 'down',
    steps: step[]
}