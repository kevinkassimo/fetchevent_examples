import { Fragment, h, homepage } from "./homepage/mod.tsx";

const PROJECTS: Record<string, string> = {
  Homepage: "https://ksm.sh",
  Deno: "https://github.com/denoland/deno",
};

homepage(() => {
  return (
    <>
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/15007517"
          style="max-width: 120px"
        />
        <h2>Kevin Qian</h2>
        <a href="mailto:kevinkassimo@gmail.com">kevinkassimo@gmail.com</a>
      </header>
      <div style="margin-top: 64px;">
        {Object.keys(PROJECTS).map((name) => (
          <p>
            <a href={PROJECTS[name]}>{name}</a>
          </p>
        ))}
      </div>
    </>
  );
});
