export default interface RangeProps {
    rangeId: string,
    label?: string,
    min?: number,
    max: number,
    current: number,
    onUpd: (e: number) => void
}
