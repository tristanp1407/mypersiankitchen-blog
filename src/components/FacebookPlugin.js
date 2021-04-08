import React from "react";
import * as S from "./styles/FacebookPlugin";

export default function FacebookPlugin() {
  return (
    <S.Wrapper>
      <div
        class="fb-page"
        data-href="https://www.facebook.com/mypersiankitchencamb/"
        data-tabs="events"
        data-width="320"
        data-height
        data-small-header="false"
        data-adapt-container-width="false"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/mypersiankitchencamb/"
          class="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/mypersiankitchencamb/">
            My Persian Kitchen
          </a>
        </blockquote>
      </div>
    </S.Wrapper>
  );
}
