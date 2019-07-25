import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './images/timg.jpeg';

class Index extends React.Component {
  render() {
    return <div>
      this is index Test
      这个是index测试的文案 哈哈哈哈
      <img src={Logo} />

    </div>;
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)