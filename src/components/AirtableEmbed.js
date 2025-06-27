import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";

import "./css/RouteDb.css";
import { ReactComponent as AirtableLogo } from "../assets/Airtable_Logo.svg";

import { GiRadarSweep } from "react-icons/gi";
import { TbBuildingAirport } from "react-icons/tb";

import { routeHeader, HubAiport1, HubAiport2 } from "../assets/data";

const AirtableEmbed = () => {
  return (
    <>
      <div className="main-container">
        <div className="p-4">
          {routeHeader.map(({ id, description }) => (
            <p className="route__description text-center px-1" key={id}>
              {description}
            </p>
          ))}
        </div>
        <div className="routedb-header">
          <AirtableLogo className="airtable-logo my-4" />
        </div>

        <div className="iframe-db d-flex justify-content-center">
          <iframe
            class="airtable-embed mx-3"
            src="https://airtable.com/embed/appVZEAo7Z6WEJtZJ/shriWmzGaaMrdP0ID?layout=card&viewControls=on"
            frameborder="0"
            onmousewheel=""
            title="SAAV-db"
          />
        </div>


<hr/>
        <div className="container container__hubs mt-3 p-3">
          <div className="images__container">
            <Card className="card__hub px-3 m-2 shadow">
            {HubAiport1.map(({ id, image, alt, name, opened, elevation, rwy1, rwy2 }) => (
              <>
                <div className="img__hubs">
                  <img
                    id={id}
                    src={image}
                    alt={alt}
                    className="rounded my-3 hub__images"
                  />
                  <p className="text-center m-2 fw-bold">{name}</p>
                  <p className="text-center">
                    Opened: {opened}
                    <br/>
                    Elevation: {elevation}
                  </p>

                  <h6 className="text-center">Runways</h6>
                  <p className="text-center">
                   {rwy1} <br/> {rwy2}
                  </p>
                </div>
              </>
            ))}
            </Card>

            <Card className="card__hub px-3 m-2 shadow">
            {HubAiport2.map(({ id, image, alt, name, opened, elevation, rwy1, rwy2 }) => (
              <>
                <div className="img__hubs">
                  <img
                    id={id}
                    src={image}
                    alt={alt}
                    className="rounded my-3 hub__images"
                  />
                  <p className="text-center m-2 fw-bold">{name}</p>
                  <p className="text-center">
                    Opened: {opened}
                    <br/>
                    Elevation: {elevation}
                  </p>
                
                  <h6 className="text-center">Runways</h6>
                  <p className="text-center">
                   {rwy1} <br/> {rwy2}
                  </p>
                  
                </div>
              </>
            ))}
            </Card>
          </div>
        </div>

<hr/>
        <div className=" py-2 m-4 text-center">
          <h2>Quick Links:</h2>
          <div className="d-flex justify-content-center my-2 p-3">
            <ButtonGroup vertical>
              <h6 className="text-muted">Airport Guides</h6>

              <Button variant="dark" className="btn btn-dark">
                <a
                  href="https://community.infiniteflight.com/t/your-guide-to-oliver-reginald-international-airport-or-known-as-faor/546414/1"
                  className="text-decoration-none text-white"
                >
                  OR Tambo Intl <TbBuildingAirport className="fs-3 " />
                </a>
              </Button>

              <Button variant="dark" className="btn btn-dark">
                <a
                  href="https://en.wikipedia.org/wiki/Cape_Town_International_Airport"
                  className="text-decoration-none text-white"
                >
                  Cape Town Intl <TbBuildingAirport className="fs-3" />
                </a>
              </Button>

              <h6 className="text-muted mt-4">Routes & Destinations</h6>
              <Button variant="dark" className="btn btn-dark ">
                <a
                  href="https://my.flightradar24.com/SouthAfricanVirtual"
                  className="text-decoration-none text-white"
                >
                  Routes Map <GiRadarSweep className="fs-2 " />
                </a>
              </Button>
            </ButtonGroup>
          </div>
        </div>

        <div>{/*<CodeShares />*/}</div>
      </div>
    </>
  );
};

export default AirtableEmbed;
