## 👉 [**MOVIE SEARCHER**](https://lovely-melomakarona-d54888.netlify.app/) 👈
*Сайт для поиска фильмов*
## `React`
- [x] Проект написан с использованием **функциональных компонентов** с хуками в приоритете над классовыми [`components`](./src/components)
- [ ] Есть разделение на **умные** и **глупые** компоненты
- [x] Есть **рендеринг списков** [`CardList`](./src/components/CardList/CardList.tsx)
- [x] Реализована хотя бы одна **форма** [`SearchForm`](./src/components/SearchForm/SearchForm.tsx)
- [x] Есть применение **Контекст API** [`themeContext`](./src/utils/themeContext.tsx)
- [x] Есть применение **предохранителя** [`ErrorBoundary`](./src/index.tsx#L21)
- [x] Есть хотя бы один **кастомный хук** [`useAuth`](./src/hooks/useAuth.ts), [`useHistory`](./src/hooks/useHistory.ts), [`useDebounce`](./src/hooks/useDebounce.ts)
- [x] Хотя бы несколько компонентов используют **PropTypes** [`PageLayout`](./src/components/PageLayout/PageLayout.tsx), [`FavoriteButton`](./src/components/FavoriteButton/FavoriteButton.tsx)
- [x] Поиск не должен триггерить много запросов к серверу (**debounce**) [`SearchForm`](./src/components/SearchForm/SearchForm.tsx#L47)
- [x] Есть применение **lazy** + **Suspense** [`Router`](./src/app/routing/Router.tsx)
## `Redux`
- [x] Используется **Modern Redux with Redux Toolkit** [`store`](./src/app/store.ts)
- [x] Используется **слайсы** [`userSlice`](./src/app/reducers/userSlice.ts)
- [x] Есть хотя бы одна **кастомная мидлвара** [`userNameMiddleware`](./src/app/middleware/userNameMiddleware.ts)
- [x] Используется **RTK Query** [`cardsApi`](./src/api/cardsApi.ts)
- [x] Используется **Transforming Responses**: [`cardsApi`](./src/api/cardsApi.ts)
## 2 уровень (необязательный)
- [x] Используется **TypeScript**
- [x] Используется **Firebase** для учетных записей пользователей и их Избранного и Истории поиска [`authorization`](./src/hooks/useAuth.ts#L44), [`favorites`](./src/hooks/useFavoriteCards.ts#L31), [`history`](./src/hooks/useHistory.ts#L36)
- [x] Настроен **CI/CD** [`CI`](./.github/workflows/lint.yml)/[`CD`](https://lovely-melomakarona-d54888.netlify.app/)
- [x] Используется **мемоизированные селекторы** (createSelector) [`createSelector`](./src/utils/redux.ts), [`cardItem`](./src/components/CardItem/CardItem.tsx#L47)

\
\* Для поиска фильмов используется API [omdbapi](https://www.omdbapi.com/)
