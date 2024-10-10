import React from "react";

// 클래스 컴포넌트
class CCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
    };
  }
  handleClick = () => {
    // 화살표 함수 return 생략 시에는 소괄호 써 준다.
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    console.log("render() 호출");
    return (
      <div>
        <p>'{this.state.count} 번 클릭했습니다.'</p>
        <button onClick={this.handleClick}>클릭</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount() 호출 ");
    document.title = `${this.state.count}번 클릭했습니다.`;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate() 호출");
    document.title = `${this.state.count}번 클릭했습니다.`;
  }
  componentWillUnmount() {
    console.log("componentWillUnmount() 호출");
  }
}
export default CCounter;
