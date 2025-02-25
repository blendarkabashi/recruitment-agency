"use client";
import { footerLinks2, navigationLinks, socialMediaLinks } from "@/data/footer";
import React from "react";

export default function Footer4() {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Linear easing replacement
    });
  };

  return (
    <div className="container position-relative">
      {/* Back to Top Link */}
      <div
        className="local-scroll position-relative z-index-1"
        onClick={scrollToTop}
      >
        <a
          href="#top"
          className="link-to-top color position-absolute top-0 end-0 translate-middle-y"
        >
          <i className="mi-arrow-up size-24" />
          <span className="visually-hidden">Scroll to top</span>
        </a>
      </div>
      {/* End Back to Top Link */}
      <div className="page-section" style={{ paddingBottom: "0px" }}>
        <div className="row">
          <div className="col-lg-6 mb-md-60">
            <h2 className="section-title mb-60 mb-sm-40">
              Ready to start hiring?
            </h2>
            <div className="local-scroll">
              <a
                href="mailto:info@hyperlinkrecruiting.com"
                className="btn btn-mod btn-color btn-large btn-round btn-hover-anim"
              >
                <span>Contact us</span>
              </a>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 pt-10">
            <div className="row">
              <div className="col-md-6">
                {/* <ul className="fw-menu-large clearlist">
                  {footerLinks2.map((elm, i) => (
                    <li key={i}>
                      <a href={elm.href}>{elm.text}</a>
                    </li>
                  ))}
                </ul> */}
              </div>
              <div className="col-md-6 mb-sm-40">
                <ul className="fw-menu-large clearlist local-scroll">
                  {navigationLinks.map((elm, i) => (
                    <li key={i}>
                      <a href={elm.href}>{elm.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row">
        <div className="col-md-6 mb-sm-40">
          Hyperlink Recruiting - {new Date().getFullYear()}.
        </div>
        <div className="col-md-6 footer-2-social-links text-md-end mb-md-40">
          {socialMediaLinks.map((elm, i) => (
            <React.Fragment key={i}>
              <a
                href={elm.href}
                title="Facebook"
                rel="noopener nofollow"
                target="_blank"
              >
                <span className="visually-hidden">{elm.name}</span>
                <i className={elm.iconClass} />
              </a>{" "}
            </React.Fragment>
          ))}
        </div>
      </div> */}
    </div>
  );
}
