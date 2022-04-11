import Script from "next/script";
import FS, { PromisifiedFS } from "@isomorphic-git/lightning-fs";
import { clone } from "isomorphic-git";
import HTTP from "isomorphic-git/http/web/index.js";

const Test = () => {
  const cloneTest = async () => {
    const fs = new FS("fs");

    const dir = "/tutorial";
    await clone({
      fs,
      http: HTTP,
      dir,
      url: "https://github.com/isomorphic-git/lightning-fs",
      corsProxy: "https://cors.isomorphic-git.org",
      ref: "main",
      singleBranch: true,
      depth: 10,
    }).then(console.log);
  };

  return (
    <>
      <div>Test Page </div>
      <button
        onClick={() => {
          cloneTest();
        }}
      >
        Test Button
      </button>
    </>
  );
};

export default Test;
