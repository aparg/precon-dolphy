import Link from "next/link";
import BottomContactForm from "@/components/BottomContactForm";
import CondoCard from "@/components/CondoCard";
import CalgaryCardHome from "@/components/CalgaryCardHome";
import { notFound } from "next/navigation";
import DolphyAdvantage from "@/components/DolphyAdvantage";
import InstagramPost from "@/components/InstagramPost";
import PreconSchema from "@/components/PreconSchema";
import FixedContactButton from "@/components/FixedContactButton";
import MainSearch from "@/components/MainSearch";
import CondoCardHome from "@/components/CondoCardHome";
import Carousel from "@/components/Carousel";
import SearchBar from "@/components/SearchBar";
import SearchWithAutocomplete from "@/components/ProjectSearch";
// import CardScroll from "@/components/CardScroll";
import PropertyCard from "@/components/PropertyCard";
import CardScroll from "@/components/CardScroll";

async function getData(city) {
  const res = await fetch(
    "https://api.dolphy.ca/api/preconstructions-city/" + city + "?page_size=10",
    {
      next: { revalidate: 10 },
    }
  );

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

async function getCities() {
  const res = await fetch("https://api.dolphy.ca/api/all-city", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getCitiesandProjects() {
  const res = await fetch("https://api.dolphy.ca/api/all-precons", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getCondos() {
  const res = await fetch(
    // "https://api.dolphy.ca/api/preconstructions-city/toronto/?project_type=Condo&page_size=20",
    "https://api.dolphy.ca/api/preconstructions-city/toronto/?project_type=Condo&page_size=20",
    {
      next: { revalidate: 10 },
    }
  );

  // console.log(data);
  console.log(res.ok);

  if (!res.ok || res.status != 200) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.preconstructions;
  // console.log(data.results)
}
async function getTownHomes() {
  const res = await fetch(
    // "https://api.dolphy.ca/api/preconstructions-city/toronto/?project_type=Condo&page_size=20",
    "https://api.dolphy.ca/api/preconstructions-city/toronto/?project_type=Townhome&page_size=20",
    {
      next: { revalidate: 10 },
    }
  );

  // console.log(data);
  console.log(res.ok);

  if (!res.ok || res.status != 200) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.preconstructions;
  // console.log(data.results)
}

async function getProperties(type) {
  const res = await fetch(
    // "https://api.dolphy.ca/api/preconstructions-city/toronto/?project_type=Condo&page_size=20",
    `https://api.dolphy.ca/api/preconstructions-city/toronto/?project_type=${type}&page_size=20`,
    {
      next: { revalidate: 10 },
    }
  );

  // console.log(data);
  console.log(res.ok);

  if (!res.ok || res.status != 200) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.preconstructions;
  // console.log(data.results)
}

export default async function Home() {
  const data = await getData("calgary");
  const toronto_data = await getData("toronto");
  let cities = await getCities();
  const condos = await getProperties("Condo");
  const townhomes = await getProperties("Townhome");
  const detached = await getProperties("Detached");
  let dropdown_cities = await getCitiesandProjects();

  const filteredprojects = (value) => {
    return dropdown_cities.filter((city) => {
      return value.includes(city.name);
    });
  };

  return (
    <>
      <FixedContactButton></FixedContactButton>
      <div className="pt-0">
        <div className="relative">
          <Carousel
            images={[
              "/cities/brampton.jpg",
              "/cities/calgary.jpeg",
              "/cities/hamilton.jpeg",
            ]}
          />
          <div className="absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] z-20">
            <h1 className="font-bold text-4xl text-white mb-2">
              Building new home dreams
            </h1>
            <SearchWithAutocomplete />
          </div>
        </div>

        <div className="mt-24">
          <div className="container-fluid2 relative flex items-center">
            <img src="/homep/advantage.svg" className="w-16 inline" />
            <h1 className="inline text-4xl ml-10">Why Us?</h1>
            <img
              src="/homep/arrow.svg"
              className="absolute w-28 inline top-2 left-[25rem]"
              alt="arrow"
            />
          </div>
          <DolphyAdvantage></DolphyAdvantage>
          <div className="w-screen bg-[#DDEFF1]">
            <div className="py-md-5 container-fluid2">
              <CardScroll data={condos} title="Condos" />
              {/* <PropertyCard data={condos[0]} /> */}
            </div>
          </div>
          <div className="w-screen bg-[#FEF7E7]">
            <div className="py-md-5 container-fluid2">
              <CardScroll
                data={townhomes}
                title="TownHomes"
                btnColor="#DDEFF1"
              />
              {/* <PropertyCard data={condos[0]} /> */}
            </div>
          </div>
          <div className="w-screen bg-[#DDEFF1]">
            <div className="py-md-5 container-fluid2">
              <CardScroll data={detached} title="Detached" />
              {/* <PropertyCard data={condos[0]} /> */}
            </div>
          </div>
          <div className="py-md-5">
            <div className="py-3 d-flex justify-content-center">
              <InstagramPost></InstagramPost>
            </div>
          </div>
          <div className="py-5">
            <h3 className="fs-2 text-mine fw-bold text-center mb-0">
              We bring you home from credible builders
            </h3>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <img
                src="/builders.png"
                alt="builders in dolphy"
                className="img-fluid mt-3 w-100 w-md-75"
              />
            </div>
          </div>
          <div className="py-5 my-5" id="mycontact">
            <div className="container-fluid2">
              <div className="row justify-content-center">
                <img
                  src="/contact-bottom-2.png"
                  alt="dce"
                  className="img-fluid w-25 w-smm-50 mb-3"
                />
              </div>
              <h2 className="fw-mine text-center px-md-4 fs-4">
                Contact Dolphy Team Today
              </h2>
              <div className="row row-cols-1 row-cols-md-3 mt-3">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <BottomContactForm
                    proj_name="All"
                    city="Home Page"
                  ></BottomContactForm>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
          <div className="pt-5 mt-5"></div>
        </div>
      </div>
    </>
  );
}
