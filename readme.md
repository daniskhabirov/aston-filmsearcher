## 👉 [**MOVIE SEARCHER**](https://movie-searcher1.netlify.app/) 👈
*Сайт для поиска фильмов*
## 1 уровень (обязательный - необходимый минимум)
- [x] Реализованы **Требования к функциональности**
- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используется **Firebase**
### `React`
- [x] Проект написан с использованием **функциональных компонентов** с хуками в приоритете над классовыми
- [x] Есть разделение на **умные** и **глупые** компоненты [`pages`](./src/pages), [`components`](./src/components)
- [x] Есть **рендеринг списков** [`CardList`](./src/components/CardList/CardList.tsx#L15)
- [x] Реализована хотя бы одна **форма** [`SearchForm`](./src/components/SearchForm/SearchForm.tsx#L79)
- [x] Есть применение **Контекст API** [`themeContext`](./src/utils/themeContext.tsx)
- [x] Есть применение **предохранителя** [`ErrorBoundary`](./src/index.tsx#L21)
- [x] Есть хотя бы один **кастомный хук** [`useAuth`](./src/hooks/useAuth.ts), [`useHistory`](./src/hooks/useHistory.ts), [`useDebounce`](./src/hooks/useDebounce.ts)
- [x] Хотя бы несколько компонентов используют **PropTypes** [`FavoriteButton`](./src/components/FavoriteButton/FavoriteButton.tsx#L53), [`SearchForm`](./src/components/SearchForm/SearchForm.tsx#L96)
- [x] Поиск не должен триггерить много запросов к серверу (**debounce**) [`SearchForm`](./src/components/SearchForm/SearchForm.tsx#L49)
- [x] Есть применение **lazy** + **Suspense** [`Router`](./src/app/routing/Router.tsx#L6)
### `Redux`
- [x] Используется **Modern Redux with Redux Toolkit** [`store`](./src/app/store.ts)
- [x] Используется **слайсы** [`userSlice`](./src/app/reducers/userSlice.ts#L70)
- [x] Есть хотя бы одна **кастомная мидлвара** [`userNameMiddleware`](./src/app/middleware/userNameMiddleware.ts)
- [x] Используется **RTK Query** [`cardsApi`](./src/api/cardsApi.ts#L24)
- [x] Используется **Transforming Responses**: [`cardsApi`](./src/api/cardsApi.ts#L33)
## 2 уровень (необязательный)
- [x] Используется **TypeScript**
- [x] Используется **Firebase** для учетных записей пользователей и их Избранного и Истории поиска [`authorization`](./src/hooks/useAuth.ts#L63), [`favorites`](./src/hooks/useFavoriteCards.ts#L34), [`history`](./src/hooks/useHistory.ts#L36)
- [x] Настроен **CI/CD** [`CI`](./.github/workflows/lint.yml)/[`CD`](https://aston-trainee.netlify.app/)
- [x] Используется **мемоизированные селекторы** (createSelector) [`createSelector`](./src/utils/redux.ts), [`cardItem`](./src/components/CardItem/CardItem.tsx#L47)
## Другое
- Для поиска фильмов используется API [omdbapi](https://www.omdbapi.com/)  
- Используется UI библиотека [mantine](https://mantine.dev/), иконки [tabler](https://tabler-icons.io/)  
- Используется библиотека [react-error-boundary](https://www.npmjs.com/package/react-error-boundary) для предохранителя

## Установка
Склонируйте репозиторий
```sh
git clone https://github.com/daniskhabirov/aston-trainee.git
```
Из корня проекта установите необходимые зависимости
```sh
npm install
```
Запустите проект
```sh
npm start
```
## Status badges
[![Badge lint](https://github.com/daniskhabirov/aston-trainee/actions/workflows/lint.yml/badge.svg)](https://github.com/daniskhabirov/aston-trainee/actions/workflows/lint.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/cb60726c-c4f1-4b5d-9478-b720882cd7fd/deploy-status)](https://movie-searcher1.netlify.app)
