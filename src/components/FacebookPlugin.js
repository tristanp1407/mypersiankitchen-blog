import React from "react";
import * as S from "./styles/FacebookPlugin";

const pageUrl = "https://www.facebook.com/mypersiankitchencamb/";

const params = new URLSearchParams({
  href: pageUrl,
  tabs: "timeline",
  width: "320",
  height: "500",
  small_header: "false",
  adapt_container_width: "false",
  hide_cover: "false",
  show_facepile: "true",
});

export default function FacebookPlugin() {
  return (
    <S.Wrapper>
      <iframe
        title="My Persian Kitchen on Facebook"
        src={`https://www.facebook.com/plugins/page.php?${params.toString()}`}
        width="320"
        height="500"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </S.Wrapper>
  );
}
