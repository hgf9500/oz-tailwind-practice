export default function Header() {
  return (
    // w-full: 너비 100%
    // bg-white: 흰색 배경
    // p-4: 1rem (16px)의 패딩
    // shadow-md: 중간 크기의 그림자
    // flex justify-between items-center: 자식 요소들을 양쪽 끝으로 보내고 수직 중앙 정렬
    <header className="w-full bg-white p-4 shadow-md flex justify-between items-center">
      {/* 로고 텍스트 스타일링 */}
      <h2 className="text-xl font-bold text-blue-600">OZ코딩스쿨</h2>

      {/* 메뉴 리스트 스타일링 */}
      {/* flex, items-center로 내부 li들을 가로 정렬, space-x-6으로 각 항목 간 1.5rem 간격 */}
      <ul className="flex items-center space-x-6">
        {/*
          font-semibold: 폰트 두께 semi-bold
          text-gray-700: 기본 텍스트 색상
          hover:text-blue-500: 마우스를 올리면 텍스트 색상 변경
          cursor-pointer: 마우스 커서를 포인터 모양으로 변경
        */}
        <li className="font-semibold text-gray-700 hover:text-blue-500 cursor-pointer">
          로그인
        </li>
        <li className="font-semibold text-gray-700 hover:text-blue-500 cursor-pointer">
          회원가입
        </li>
        <li className="font-semibold text-gray-700 hover:text-blue-500 cursor-pointer">
          내클래스
        </li>
      </ul>
    </header>
  );
}
