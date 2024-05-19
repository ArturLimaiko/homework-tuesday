import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>
                {/*роутинг будут писать студенты*/}
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*/}
                <Route path={'/'}  element={<Navigate to={'/pre-junior'}/> } />

                {/*роуты для /pre-junior, /junior, /junior-plus*/}
                <Route path={'/pre-junior'}  element={<PreJunior/>} />
                <Route path={'/junior'}  element={<Junior/>} />
                <Route path={'/junior-plus'}  element={<JuniorPlus/>} />


                {/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
                <Route path={'/page/error404'}  element={<Error404/>} />
                <Route path={'/*'} element={ <Navigate to={'/page/error404'}/> }/>
            </Routes>
        </div>
    )
}

export default Pages


{/*
Работаем с роутингами

1. yarn app react-router-dom

2. оборачиваем все в BrowserRouter ( с github pages корректнее работает HashRouter

3. Подключаем страницы в Pages
4. Прописываем <Routes>(оборачиваем) и внутрь кладем  <Route/>
5. В каждую Route вставляем нужную страницу  <Route path={''}  element={<PreJunior/>} />  как пример
в path={''} прописываем путь к страницам( в принципе можно указать любой) , element={ } - содержат страницы
6. подключаем на страницу <Navigate/> внутри element и прописываем to={'/error404'} и нашу страницу с ошибкой
7. Navlink тег, используется для создания навигационной ссылки в React приложениях, которые используют маршрутизацию
 Он позволяет создавать ссылки с активным состоянием, когда текущий маршрут соответствует URL ссылки.
*/}