export default interface SelectProps {
    label?: string,
    selectId: string,
    current: string | number,
    options: string[],
    onUpd: (e: string | number) => void
}

