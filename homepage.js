import { h, Fragment, homepage } from "./homepage/mod.js";

const PROJECTS = {
  Homepage: "https://ksm.sh",
  Deno: "https://github.com/denoland/deno",
};

homepage(() => {
  return h(
    Fragment,
    null,
    h(
      "header",
      {},
      h("img", {
        src: "https://avatars2.githubusercontent.com/u/15007517",
        style: "max-width: 120px",
      }),
      h("h2", {}, "Kevin Qian"),
      h("a", { href: "kevinkassimo@gmail.com" }, "kevinkassimo@gmail.com")
    ),
    h(
      "div",
      { style: "margin-top: 64px;" },
      Object.keys(PROJECTS).map((name) =>
        h("p", {}, h("a", { href: PROJECTS[name] }, name))
      )
    )
  );
});
