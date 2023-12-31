# 정적 분석 도구 사용하기

::: danger
🚧 이 문서는 초안을 작성중인 문서이다.
:::

TDD, BDD 같은 다양한 테스트 기반의 설계 방법론이 있지만 쉽지 않고, 라이믹스의 일부 작은 기능들을 구성하는 애드온, 모듈, 위젯을 개발하면서 테스트를 작성하기는 더욱 어렵고, 유닛 테스트를 적용할 수 있는 범위가 매우 제한적이다.

정적 분석 도구를 이용하면 코드를 더 탄탄하게 작성할 수 있도록 도움받을 수 있다. 코드의 품질을 높이고 예상되는 문제를 해결하는데 도움이 될 수 있다. [타입 정의](https://www.php.net/manual/en/language.types.declarations.php)를 유도하기 때문에 타입을 명확히하고 데이터, 객체의 구조에 대한 문서화의 효과를 얻을 수도 있다.

여기서는 PHPStan을 이용한 방법을 살펴본다.

## PHPStan
