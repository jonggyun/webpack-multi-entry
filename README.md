# Webpack Multi Entry

- webpack-babel-multi-target-plugin를 활용한 multi output 구성

- 모던 브라우저에서는 최신화된 자바스크립트 구문을 사용할수 있게 하고, IE에서는 예전 구문을 사용하게 된다.

- `script`의 nomodule를 활용하여 IE에서 예전 자바스크리브 구문이 포함된 bundle를 실행.

- 최신 구문을 사용하는 bundle이 이전 구문을 사용하는 bundle보다 사이즈가 작게 생성된다.

- 그 영향으로 최신 브라우저를 사용하는 이용자에게 보다 가벼운 서비스를 제공할 수 있게 된다.
