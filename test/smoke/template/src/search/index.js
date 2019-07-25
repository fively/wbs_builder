import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './images/timg.jpeg';
import './index.less';

class Search extends React.Component {
  render() {
    return <div>
      this is index Test
      这个是search 测试的文案 哈哈哈哈
      <img src={Logo} />
    </div>;
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
)