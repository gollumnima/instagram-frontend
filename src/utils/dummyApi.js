const dummyTexts = [
  "순차 반복의 예를 보여주기 위해 웹 스파이더 어플리케이션에 새로운 형태를 소개하겠습니다.",
  "이제 웹 페이지에 포함된 모든 링크를 재귀적으로 다운로드 하겠습니다.",
  "이 모듈은 새로운 팩토리 함수들을 만들기 위해 함께 구성할 수 있는 팩토리 함수들을 정의하기 위한 직관적인 인터페이스를 제공합니다.",
  "최소한의 노력으로 템플릿 패턴을 사용하여 부모 템플릿 클래스에서 상속된 로직과 인터페이스를 재사용하고",
  "몇 가지 추상 메소드를 구현하여 완전히 작동하는 새로운 환경설정 관리자를 얻을 수 있습니다.",
  "여러 스트림을 하나로 병합하는 것은 일반적으로 간단한 작업입니다.",
  "하드코딩된 종속성 사용의 단점은 대부분 상태유지 인스턴스와 관련되어있음을 이해하는것이 중요합니다.",
  "그 논리는 아주 간단합니다.",
  "구현을 살펴보면, 이 프록시는 빈 배열을 타겟으로 사용하여 핸들러에 get과 has 두개의 트랩을 정의합니다.",
  "객체를 프록시할때, 우리는 모든 메소드를 가로채기로 결정할 수도 있고, 그중 일부만 가로채고 나머지는 직접 대상에 위임하기로 결정할 수도 있습니다.",
  "컴포지션은 기능을 확장하거나 사용하기 위해 객체가 다른 객체와 결합되는 기술입니다.",
  "이는 프로토타입 체인을 유지 관리하는 것이 중요한 경우에만 필요한 부수적인 단계입니다.",
  "다음은 의사 클래스와 팩토리를 사용한 이 기법의 한 예 입니다.",
  "몇가지 예는 다음과 같습니다.",
  "클래스의 관점보다는 동작의 관점에서 사고할 수 있는 강력한 메커니즘입니다.",
  "기본적으로 스트림은 순차적으로 데이터를 처리합니다.",
  "이렇게 하면 다음과 같이 출력됩니다."
];

const dummyUsernames = [
  "__hello__",
  "wecode_bootcamp",
  "badbaddobby",
  "google_inc",
  "apple",
  "ba_nan_a",
  "iamironman",
  "iloveyou3000",
  "jetaime",
  "foo_bar",
  "javascript",
  "a_b_c_d_e",
  "910930_",
  "my_name_is",
  "elsa_official"
];

const shuffleArray = arr => {
  const ret = [...arr];
  var j, x, i;
  for (i = ret.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = ret[i];
    ret[i] = ret[j];
    ret[j] = x;
  }
  return ret;
};

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const getRandomUser = () => {
  return {
    id: "" + getRandomInt(1543363, 9362372),
    name: dummyUsernames[getRandomInt(0, dummyUsernames.length)],
    image: `https://picsum.photos/seed/${getRandomInt(1, 9362372)}/100/100`
  };
};

const getDummyPosts = () =>
  Array(getRandomInt(6, 10))
    .fill()
    .map(_ => {
      const seed = Math.random();
      const comments = Array(getRandomInt(0, 8))
        .fill()
        .map(comment => {
          return {
            user: getRandomUser(),
            content: dummyTexts[getRandomInt(0, dummyTexts.length)]
          };
        });
      return {
        id: "" + Math.floor(seed * 402605),
        user: getRandomUser(),
        image: `https://picsum.photos/seed/${seed * 326}/700/700`,
        likes: shuffleArray(dummyUsernames).slice(0, getRandomInt(0, 7)),
        comments
      };
    });

const api = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(getDummyPosts());
    }, 200);
  });

export default api;
