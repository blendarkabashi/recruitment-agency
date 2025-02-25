import { testimonialItems } from "@/data/testimonials";
import React from "react";
import Image from "next/image";
export default function Testimonials() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <h2 className="section-title mb-70 mb-sm-50 text-center">
            Clients Stories
          </h2>
        </div>
      </div>
      {/* Testimonial */}
      {testimonialItems.map((elm, i) => (
        <React.Fragment key={i}>
          {!(i % 2) ? (
            <div className="row mb-80 mb-sm-60">
              <div className="col-8 offset-md-1 offset-lg-1 d-flex align-items-center wow fadeInUp">
                <blockquote className="testimonials-6-item">
                  <div
                    className="testimonials-6-icon opacity-01-dark"
                    aria-hidden="true"
                  >
                    “
                  </div>
                  <p className="testimonials-6-text mb-40">{elm.quote}</p>
                  <footer>
                    <div className="testimonials-6-author">{elm.author}</div>
                    <div className="testimonials-6-position">
                      {elm.position}
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          ) : (
            <div
              className="row"
              style={{
                textAlign: "right",
                display: "flex",
                justifyContent: "end !important",
              }}
            >
              <div className="col-8 offset-lg-1 d-flex align-items-center wow fadeInUp">
                <blockquote className="testimonials-6-item">
                  <div
                    className="testimonials-6-icon opacity-01-dark"
                    aria-hidden="true"
                  >
                    “
                  </div>
                  <p className="testimonials-6-text mb-40">{elm.quote}</p>
                  <footer>
                    <div className="testimonials-6-author">{elm.author}</div>
                    <div className="testimonials-6-position">
                      {elm.position}
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
      {/* End Testimonial */}
    </div>
  );
}
