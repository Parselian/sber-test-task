import Timeline from "@/components/Timeline/Timeline";

export default function Home() {
    return (
        <>
            <Timeline type="dot" position='up' steps={[
                {
                    label: 'Отправка заявки',
                    status: 'completed'
                },
                {
                    label: 'Обработка',
                    status: 'completed'
                },
                {
                    label: 'Получение заявки',
                    status: 'pending'
                },
                {
                    label: 'Подтверждение',
                    status: 'inactive'
                },
                {
                    label: 'Закрытие заявки',
                    status: 'inactive'
                }
            ]}/>
        </>
    )
}
