import React from "react";

const CurrentUserContext = React.createContext();

export default CurrentUserContext;

/*контекст — специальный способ передачи данных одновременно во все компоненты поддерева или даже всего приложения.
Чтобы создать контекст, нужно использовать встроенный метод React.createContext. Этот метод возвращает новый объект контекста.
Важное свойство этого объекта — Provider. В нём содержится специальный «Реакт-компонент»,
который позволяет внедрить контекст в определённый участок существующего JSX-дерева.
Обычно контекст создаётся в отдельном файле и экспортируется из него. Иногда в этом файле находится и само содержимое вариантов контекста:*/ 