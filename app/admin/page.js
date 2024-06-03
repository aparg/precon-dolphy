"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ListingTable from "@/components/ListingTable";
import axios from "axios";
import swal from "sweetalert";
import PageSelector from "@/components/PageSelector";

export default function Home() {
  const [filters, setFilters] = useState({
    city: "All",
    status: "All",
    typee: "All",
  });
  const [preconstructions, setPreConstructions] = useState([]);
  const [refetch, setRefetch] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios
      .get("https://api.dolphy.ca/api/preconstructions/?page=" + page)
      .then((res) => {
        console.log(res.data.results);
        setPreConstructions(res.data.results);
        setTotalPages(Math.ceil(res.data.count / 10));
      })
      .catch((err) => {
        console.log(err.data);
      });
  }, [refetch, page]);

  const handleDelete = (e, id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this listing!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deletePreConstruction(id);
        swal({
          text: "Your listing has been deleted!",
          icon: "success",
          timer: 1000,
          buttons: false,
        });
      } else {
        swal({
          title: "Cancelled",
          text: "Your listing is safe!",
          icon: "error",
          timer: 1000,
          buttons: false,
        });
      }
    });
  };

  function deletePreConstruction(id) {
    axios
      .delete(`https://api.dolphy.ca/api/preconstructions/${id}/`)
      .then((res) => {
        console.log(res);
        setRefetch(!refetch);
      })
      .catch((err) => {
        console.log(err.data);
      });
  }

  function checkPrev() {
    if (page === 1) {
      return false;
    }
    return true;
  }
  function checkNext() {
    if (preconstructions && page === totalPages) {
      return false;
    }
    return true;
  }

  return (
    <div className="border-l-[1px] border-[#D9DBE9] min-h-full">
      <div className="w-full sticky">
        <div className="flex justify-between items-center pb-1 border-b-[1px] border-[#D9DBE9] p-4">
          <form
            className="d-flex align-items-center bg-gray border-2 border-[#D9DBE9] px-4 rounded-md col-8 justify-start"
            method="POST"
            action="#"
          >
            <button type="submit" title="Search">
              <i className="bi bi-search text-gray-500 mr-3"></i>
            </button>
            <input
              type="text"
              name="query"
              placeholder="Search"
              title="Enter search keyword"
              className="focus-visible:outline-none w-10/12 py-[0.7rem]"
            />
          </form>
          <img
            src="/COA-agent-pic.jpg"
            alt="profile-picture"
            className="w-12 rounded-full mb-2"
          />
        </div>
        <div className="flex justify-between items-center my-2 mt-4 p-4">
          <Link href="/admin/" className="logo">
            <span className="text-4xl">Preconstructions</span>
          </Link>
          <div className="flex">
            {/* <div className="search-bar mx-2"> */}
            <form
              className="search-form d-flex align-items-center mx-3 bg-gray border-2 border-[#D9DBE9] px-4 rounded-md"
              method="POST"
              action="#"
            >
              <input
                type="text"
                name="query"
                placeholder="Search"
                title="Enter search keyword"
                className="focus-visible:outline-none"
              />
              <button type="submit" title="Search">
                <i className="bi bi-search text-gray-500"></i>
              </button>
            </form>
            {/* </div> */}
            <Link
              href="/admin/upload/"
              className="btn bg-[#262338] text-white py-3 hover:text-white font-medium"
            >
              + Add New Preconstruction
            </Link>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-5 d-flex align-items-center mx-0 justify-start pl-2">
          <div className="col-md-3">
            <div className="form-floating">
              <select
                className="form-select"
                id="floatingCity"
                value={filters.city}
                onChange={(e) => handleChange(e)}
                aira-label="Floating label select example"
              >
                <option value="All">All</option>
                <option value="Toronto">Toronto</option>
              </select>
              <label htmlFor="floatingCity">Select City</label>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-floating">
              <select
                className="form-select"
                id="typee"
                value={filters.typee}
                onChange={(e) => handleChange(e)}
                aira-label="Floating label select example"
              >
                <option value="All">All</option>
                <option value="Condo">Condo</option>
                <option value="Townhome">Townhome</option>
                <option value="Detached">Detached</option>
                <option value="Semi-Detached">Semi-Detached</option>
              </select>
              <label htmlFor="typee">Select Project Type</label>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-floating">
              <select
                className="form-select"
                id="status"
                value={filters.status}
                onChange={(e) => handleChange(e)}
                aira-label="Floating label select example"
              >
                <option value="All">All</option>
                <option value="Upcoming">Upcoming</option>
                <option value="Selling">Selling</option>
                <option value="Sold out">Sold out</option>
              </select>
              <label htmlFor="status">Select Status</label>
            </div>
          </div>
          <div className="col-md-2">
            <button
              className="border-1 p-[1rem] rounded-md border-[#dee2e6] font-bold text-gray-500"
              onClick={() =>
                setFilters({
                  city: "All",
                  status: "All",
                  typee: "All",
                })
              }
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      <div className="p-4">
        <ListingTable
          preconstructions={preconstructions}
          handleDelete={handleDelete}
          filters={filters}
          setFilters={setFilters}
          setPage={setPage}
          totalPages={totalPages}
        ></ListingTable>
      </div>
    </div>
  );
}
