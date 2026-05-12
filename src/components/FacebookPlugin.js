import React, { useEffect } from "react";
import * as S from "./styles/FacebookPlugin";

export default function FacebookPlugin() {
  useEffect(() => {
    if (window.FB && window.FB.XFBML) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <S.Wrapper>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/376632542536897"
        data-tabs="events"
        data-width="320"
        data-small-header="false"
        data-adapt-container-width="false"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/376632542536897"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/376632542536897">
            My Persian Kitchen
          </a>
        </blockquote>
      </div>
    </S.Wrapper>
  );
}
