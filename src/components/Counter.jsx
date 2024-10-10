import { useEffect, useState } from "react";

// useEffect 훅
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `${count}번 클릭되었습니다.`;
  }, [count]); // 의존성 배열에 [] 즉 빈 배열이 들어가면 1번만 렌더 됨
  return (
    <div>
      <p>{count}번 클릭했습니다.</p>
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

export default Counter;
