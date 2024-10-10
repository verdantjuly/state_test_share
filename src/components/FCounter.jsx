import { useState } from "react";

// 함수형 컴포넌트
function FCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>총 {count}번 클릭했습니다. </p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        클릭
      </button>
    </div>
  );
}

export default FCounter;
