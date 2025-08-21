import Header from "./components/Header";
import Content from "./components/Content";

// 예시 데이터를 만듭니다. 실제로는 props나 API를 통해 받아올 것입니다.
const sampleContent = {
  img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
  title: "React & Tailwind CSS",
  subtitle: "가장 인기있는 프론트엔드 조합을 마스터하세요.",
};

function App() {
  return (
    // min-h-screen: 최소 높이를 화면 전체로 설정하여 푸터가 항상 하단에 위치하도록 함
    // bg-slate-100: 연한 회색 배경색 적용
    <div className="min-h-screen bg-slate-100">
      <Header />
      {/* main 태그를 사용하여 주된 콘텐츠 영역을 명시합니다.
        flex-grow: Header를 제외한 나머지 공간을 모두 차지
        flex justify-center items-center: 내부 콘텐츠를 중앙에 배치
      */}
      <main className="flex-grow flex justify-center items-center p-8">
        <Content content={sampleContent} />
      </main>
    </div>
  );
}

export default App;
