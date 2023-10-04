// npm i typescript -g
// npx create-react-app my-app --template typescript - створюємо реактівську епку із тайпскриптом

// якщо раніше був інстальований create-react-app глобально через npm install -g create-react-app, то краще його анінсталити через npm uninstall -g create-react-app, щоб знати, що jsx використовує останню версію.

// npm install --save typescript @types/node @types/react @types/react-dom @types/jest - щоб додати тайпскрипт до уже існуючої реактівської аплікації
// проблема у тому, що немає typescript.config.ts, тоді є два шляхи: або скопіювати його з темплейту, або даунгрейднути версію реакта до 4-ї і потім знову апгрейднути
// npm i react-scripts@4 - 4 версія

// Зміна у index.tsx
// const root = React.createRoot(document.getElementById('root') as HTMLElement)

// ? React Types
// 1. Type representing a functional component: const MyComponent: React.FC<Props> =
// 2. Type representing a class component: class MyComponent extends React.Component<Props, State> { ...