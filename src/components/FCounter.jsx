import { useState } from "react";

// 함수형 컴포넌트
// useState 훅
function FCounter() {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      <p>
        총 {count}번 클릭했습니다. isOn : {`${isOn}`}
      </p>
      <button
        onClick={() => {
          setCount(count + 1);
          setIsOn(!isOn);
        }}
      >
        클릭
      </button>
    </div>
  );
}

export default FCounter;
