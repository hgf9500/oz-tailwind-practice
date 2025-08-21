export default function Content({ content }) {
  // content prop이 없을 경우를 대비한 방어 코드
  if (!content) {
    return null;
  }

  return (
    // 카드 전체 컨테이너
    // max-w-sm: 카드의 최대 너비를 sm(24rem)으로 제한
    // bg-white: 흰색 배경
    // rounded-xl: 모서리를 크게 둥글게 (xl)
    // shadow-lg: 큰 그림자 효과
    // overflow-hidden: 둥근 모서리 밖으로 이미지가 나가지 않도록 함
    // transition transform hover:scale-105: 마우스 오버 시 1.05배 커지는 애니메이션 효과
    <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
      {/* 이미지 영역 */}
      {/* w-full: 너비 100%, h-56: 고정 높이 14rem, object-cover: 이미지 비율을 유지하며 공간을 채움 */}
      <img className="w-full h-56 object-cover" src={content.img} alt={content.title} />

      {/* 텍스트 콘텐츠 영역 */}
      <div className="p-6">
        {/* '모집중' 배지 스타일 */}
        <span className="inline-block bg-green-200 text-green-800 text-xs font-bold px-3 py-1 rounded-full mb-3">
          모집중
        </span>

        {/* 제목 스타일 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{content.title}</h3>

        {/* 부제 스타일 */}
        <p className="text-gray-600 text-base">{content.subtitle}</p>
      </div>
    </div>
  );
}