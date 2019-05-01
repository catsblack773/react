import React from 'react';
import ReactDOM from 'react-dom';

import './style/style.css';
import Blog from './components/Blog';
import WelcomeModal from './components/WelcomeModal';

class App extends React.Component {
  render() {
    let posts = [
      {
        id: 1,
        title: 'Первая статья',
        postBody: 'Если a равно нулю, то оно не пишется и запись сокращается до b. Если b равно нулю, то оно также не указывается и выражение записывается в форме an. a и b могут быть отрицательными числами, в этом случае знак плюс меняется на минус, например: 5n-1.'
      },
      {
        id: 2,
        title: 'Вторая статья',
        postBody: 'Если a равно нулю, то оно не пишется и запись сокращается до b. Если b равно нулю, то оно также не указывается и выражение записывается в форме an. a и b могут быть отрицательными числами, в этом случае знак плюс меняется на минус, например: 5n-1.'
      },
      {
        id: 3,
        title: 'Третья статья',
        postBody: 'Если a равно нулю, то оно не пишется и запись сокращается до b. Если b равно нулю, то оно также не указывается и выражение записывается в форме an. a и b могут быть отрицательными числами, в этом случае знак плюс меняется на минус, например: 5n-1.'
      },
      {
        id: 4,
        title: 'Четвертая статья',
        postBody: 'Если a равно нулю, то оно не пишется и запись сокращается до b. Если b равно нулю, то оно также не указывается и выражение записывается в форме an. a и b могут быть отрицательными числами, в этом случае знак плюс меняется на минус, например: 5n-1.'
      }
    ];

    return (
      <div className="container">
        <Blog posts={posts}/>
        <WelcomeModal/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));