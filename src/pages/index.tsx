import Timeline from "@/components/Timeline/Timeline";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "core-js/features/url-search-params";


export default function Home() {
    return (
        <>
            <Timeline type="line" position='down' steps={[
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
