import React from 'react';

const Header = () => (
  <header className="bg-blue-600 text-white py-20 text-center">
    <h1 className="text-4xl font-bold mb-4">AI 사이드 프로젝트 '디코드 챌린지' 1기 참여 모집</h1>
    <p className="text-xl max-w-2xl mx-auto">
      "디코드 챌린지는 10일 간의 초단기 스프린트 개발을 AI 도구로 빠르게 돌파하여 완성하는 사이드 프로젝트 챌린지 입니다"
    </p>
  </header>
);

const Section = ({ title, children, emoji }) => (
  <section className="py-16 px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 flex items-center">
        {emoji && <span className="mr-2 text-2xl">{emoji}</span>}
        {title}
      </h2>
      {children}
    </div>
  </section>
);

const Timeline = ({ steps }) => (
  <div className="relative">
    {steps.map((step, index) => (
      <div key={index} className="mb-8 flex">
        <div className="flex flex-col items-center mr-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white">
            {index + 1}
          </div>
          {index !== steps.length - 1 && <div className="h-full w-px bg-blue-500 my-2" />}
        </div>
        <div>
          <h3 className="text-xl font-semibold">{step.title}</h3>
          <p className="mt-1 text-gray-600">{step.description}</p>
        </div>
      </div>
    ))}
  </div>
);

const BenefitCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const App = () => {
  const programSteps = [
    { title: "사전 인터뷰", description: "온보딩 및 킥오프 인터뷰 진행" },
    { title: "초기", description: "앱/웹 서비스 기획 및 프로젝트 마일스톤 구성" },
    { title: "중기", description: "개발 스프린트 착수 및 중간 회고" },
    { title: "마무리", description: "프로젝트 마무리 작업물 릴리즈 및 최종 회고" },
  ];

  const benefits = [
    { title: "프로젝트 지원", description: "작업물 패키징 릴리즈 서포팅" },
    { title: "수익 공유", description: "프로젝트 작업물 애드몹 광고 수익 쉐어" },
    { title: "마케팅 지원", description: "자사 인플루언서 & 온라인 채널 활용 마케팅" },
    { title: "서비스 연동", description: "코드 템플릿으로 개선 후, 자사 서비스 연동 혜택" },
  ];

  return (
    <div className="font-sans">
      <Header />
      
      <Section title="프로그램 진행 과정" emoji="🔽">
  <Timeline steps={programSteps} />
</Section>
      
      <Section title="챌린지 성공 혜택" emoji="✅" className="bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </Section>
      
      <Section title="참가 정보" emoji="💰">
        <div className="bg-blue-100 p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-2">참가비: 50,000원</h3>
          <p>신청서 제출 후 내부 운영진 검토 이후 입금 요청을 진행합니다.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">환불 규정</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>오프라인 인터뷰 진행 이후 진행의사 없을 시 100% 환불</li>
            <li>서비스 기획 이후 프로젝트 착수 시 70% 환불</li>
            <li>중간 회고 이후 작업 중도 포기 시 50% 환불</li>
            <li>개발 프로젝트 마무리 하루 전 중도 포기 시 30% 환불</li>
            <li>프로젝트 수행기간 내에 이틀 이상 잠수 시 환불 불가</li>
          </ul>
        </div>
      </Section>

        <Section title="지금 바로 참여하세요!" emoji="👥" className="bg-blue-600 text-white text-center">
            <a
                href="https://forms.gle/Qmf6i7oV5Pyx6vsK9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-100 transition duration-300"
            >
                디코드 챌린지 신청하기
            </a>
        </Section>
      
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2024 디코드 챌린지. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;