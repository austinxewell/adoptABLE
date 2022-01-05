import React from "react";
import img from "../../assets/images/support-alt.jpg";
import "./contact.css";

export default function Contact() {
  return (
    <section className="">
      <div className="container boxContact columns has-text-left is-centered mt-3">
        <h1 className="container">Contact</h1>
      </div>
      <div className="container">
        <div>
          <div className="columns contactContainer1 boxContact in-vcentered">
            <form className="column is-6">
              <label className="contactlabel" htmlFor="name">
                Name:
              </label>

              <textarea
                className="contactinput is-primary"
                type="text"
                name="name"
              />

              <label className="contactlabel" htmlFor="email">
                Email:
              </label>
              <textarea className="contactinput" type="email" />
              <label className="contactlabel" htmlFor="subject">
                Subject:
              </label>
              <textarea className="contactinput" type="text" name="subject" />
              <label className="contactlabel" htmlFor="body">
                Body:
              </label>
              <textarea className="contactinput" name="body" />
              <button className="contactsubmitbutton" type="submit">
                Submit
              </button>
            </form>
            <h4 className="column has-text-centered">
              If you, or someone you know is the victim of a domestic violence
              situation, know that it is not your fault, and that you can find
              the help that you need. Don’t hesitate to call the National
              Domestic Violence Hotline at the toll-free number, 800-799-SAFE
              (7233).
            </h4>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="contactlinkstitle has-text-left">
          Additional resources
        </h2>
        <div className="rows has-text-left contactContainer2 boxContact">
          <div className="row">
            <ul className="column is-5">
              <ol>
                <a
                  className="contactlinks"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.udvc.org/"
                >
                  Utah Domestic Violence Coalition{" "}
                </a>
              </ol>
              <ol>
                <a
                  className="contactlinks"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dcfs.utah.gov/"
                >
                  Utah department of human services{" "}
                </a>
              </ol>
              <ol>
                <a
                  className="contactlinks"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.domesticshelters.org/"
                >
                  Domestic Shelters{" "}
                </a>
              </ol>
              <ol>
                <a
                  className="contactlinks"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://nrd.gov/"
                >
                  National Resource Directory{" "}
                </a>
              </ol>
              <ol>
                <a
                  className="contactlinks"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.sldvc.org/"
                >
                  Salt Lake Domestic Violence Coalition{" "}
                </a>
              </ol>
            </ul>
            <img
              className="contactimage column"
              src={img}
              alt="Support for domestic violence"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
