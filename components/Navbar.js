"use client";
import { useState } from "react";
import Link from "next/link";
import ProjectSearch from "./ProjectSearch";

const Navbar = ({ cities, dropdown_cities }) => {
  const [cityname, setCityname] = useState("");

  const filteredprojects = (value) => {
    return dropdown_cities.filter((city) => {
      return value.includes(city.name);
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-white/75 py-3 py-md-2 shadow-navbar mb-3 sticky-top">
      <div className="container-fluid justify-between mx-48 ">
        <Link href="/" className="logo">
          <img src="/logo2.svg" alt="Dolphy logo" className="img-fluid" />
        </Link>

        <button
          className="navbar-toggler d-lg-none ms-auto "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img
            loading="lazy"
            src="https://img.icons8.com/material-two-tone/24/000000/menu.png"
            width="24px"
            height="24px"
            alt="Navbar toggler icon"
          />
        </button>
        <div id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0 align-items-center justify-md-between ">
            <li className="nav-item dropdown dropdown-fullwidth">
              <button
                className="nav-link text-black dropdown-toggle align-items-center d-flex fw-500 text-dark me-3 px-2 hover:bg-black hover:text-primary-color"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                Cities
                <img
                  src="/dropdown.svg"
                  alt="dropdown icon"
                  className="img-fluid dropdown-nav-icon ms-1"
                />
              </button>
              <div
                className="dropdown-menu dropdown-menu-end border-0 show"
                data-bs-popper="static"
              >
                <div className="row p-3 pt-2 dopp">
                  {dropdown_cities &&
                    filteredprojects([
                      "Toronto",
                      "Calgary",
                      "Mississauga",
                      "Brampton",
                      "Ajax",
                      "Burlington",
                      "Kitchener",
                      "Hamilton",
                      "Oakville",
                      "Milton",
                      "Niagara",
                      "Vaughan",
                    ]).map((city, no) => (
                      <div className="col-12 col-sm-6 col-md-3 mb-4" key={no}>
                        <Link
                          className="link-black"
                          href={`/pre-construction-homes/${city.slug}/`}
                        >
                          <h5 className="mb-1 fw-mine fs-smaller fs-4">
                            {city.name}
                          </h5>
                        </Link>
                        <ul className="list-unstyled ll">
                          {city.preconstructions &&
                            city.preconstructions.length > 0 &&
                            city.preconstructions
                              .slice(0, 5)
                              .map((project, no) => (
                                <li key={no}>
                                  <Link
                                    className="dropdown-item link-black text-limit"
                                    href={`/pre-construction-homes/${city.slug}/${project.slug}`}
                                  >
                                    {project.project_name}
                                  </Link>
                                </li>
                              ))}
                        </ul>
                      </div>
                    ))}
                  <hr />
                  <div className="col-12">
                    <Link
                      className="btn btn-white link-black fw-bold p-0"
                      href={"/pre-construction-homes/"}
                    >
                      List of all cities and pre construction homes in Canada
                      <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item text-black hover:bg-black hover:text-primary-color">
              <Link
                href={"/pre-construction-homes/calgary/"}
                className="nav-link text-black"
              >
                Calgary's Top Preconstruction
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={"/pre-construction-homes/builders/"}
                className="nav-link text-black"
              >
                Builders
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" href="/blogs">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#mycontact" className="nav-link text-black">
                Contact
              </Link>
            </li>
            <li className="nav-item d-flex flex-column">
              <Link
                href="tel:5878872572"
                className="btn my-sm-0 ms-md-3 d-flex text-dark gap-1"
              >
                <img
                  src="/COA-agent-pic.jpg"
                  alt="agent pic"
                  className="img-call-height"
                />
                <span
                  className="d-flex flex-column justify-content-start utility__phone-msg"
                  id="utility__phone-msg"
                >
                  <b id="utility__phone-number text-dark">(587) 887-2572</b>
                  <span className="d-block travel__expert fs-vsmall">
                    Speak to a home expert
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
