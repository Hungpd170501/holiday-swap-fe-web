"user client";
import React, { useState, useEffect } from "react";
// import GoogleMapReact, { Coords } from 'google-map-react';
import GoogleMapReact, { Coords } from 'google-map-react';
import SearchBar from "./SearchBar";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import Checkbox from "@/shared/Checkbox";
import AnyReactComponent from "./AnyReactComponent/AnyReactComponent";
import PropertyCardH from "./AnyReactComponent/PropertyCardH";
import Pagination from "./AnyReactComponent/Pagination";
import TabFilters from "./AnyReactComponent/TabFilters";
import LocationInput from "./AnyReactComponent/LocationInput";


const DEMO_EXPERIENCES = DEMO_STAY_LISTINGS.filter((_, i) => i < 24);


interface MainMapProps {
    data: any;
  }

const MainMap: React.FC<MainMapProps> = ({data}) => {
    const [coordinates, setCoordinates] = useState<Coords>({ lat: 0, lng: 0 });
    const [places, setPlaces] = useState(null);
    const [Bounds, setBounds] = useState({ ne: { lat: 0, lng: 0 }, sw: { lat: 0, lng: 0 } });
    const [currentHoverID, setCurrentHoverID] = useState<string | number>(-1);
    const [showFullMapFixed, setShowFullMapFixed] = useState(false);
    const [placeId, setPlaceId] = useState<string | null>(null);

    // useEffect(() => {
    //   console.log(placeId);
    // }, [placeId]);

  return(
    <div className="w-full flex flex-wrap-reverse md:flex-nowrap md:h-screen">
            <div className="h-auto md:h-full w-full md:w-[50%] lg:w-[45%] xl:w-[35%] overflow-visible overflow-y-auto"> 
                <div className="w-full text-center">
                </div>
                <SearchBar/>
                <div className="mb-3 mt-2 lg:mb-11">
                  <TabFilters />
                </div>
                {/* Sidebar Component Rendered with filteredPlaces (Determined by place type and rating from filter) if found or all places passed in prop to 'places' */}
                {/* <Sidebar places={filteredPlaces ? filteredPlaces : places}  /> */}
                {/* --- */}

                <div className="grid grid-cols-1 gap-3">
                  {DEMO_EXPERIENCES.map((item) => (
                    <div
                      key={item.id}
                      onMouseEnter={() => setCurrentHoverID((_) => item.id)}
                      onMouseLeave={() => setCurrentHoverID((_) => -1)}
                    >
                      <PropertyCardH data={item} />
                    </div>
                  ))}
                </div>
                <div className="flex mt-16 justify-center items-center">
                  <Pagination />
                </div>
            </div>
            <div className="h-[60vh] md:h-full w-full relative">
                {/* Map Header Component, with setCoordinate State passed in as props */}
                {/* <Header setCoordinates={setCoordinates} /> */}
                {/* --- */}
                
                {/* Map Component with 'setBounds', 'setCoordinates', 'coordinates' and either 'filteredPlaces' or 'places' states passed in as props to component  */}
                {/* <Map 
                    setBounds={setBounds}
                    setCoordinates={setCoordinates}
                    coordinates={coordinates}
                    places={filteredPlaces ? filteredPlaces : places}
                /> */}
                {/* --- */}
                <div className="absolute bottom-5 left-3 lg:bottom-auto lg:top-2.5 py-1 px-1 bg-white shadow-xl z-10 rounded-2xl min-w-fit lg:w-[25%]">
                  <LocationInput setPlaceId={setPlaceId} className="text-xs xl:text-sm text-neutral-800"/>
                </div>



                <div className="absolute bottom-5 left-3 lg:bottom-auto lg:top-2.5 lg:left-1/2 transform lg:-translate-x-1/2 py-2 px-4 bg-white shadow-xl z-10 rounded-2xl min-w-max">
                  <Checkbox
                    className="text-xs xl:text-sm text-neutral-800"
                    name="xx"
                    label="Search as I move the map"
                  />
                </div>

                <GoogleMapReact
                    // bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_API_KEY??"" }}
                    // bootstrapURLKeys={{
                    //   key: "AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY",
                    // }}
                    bootstrapURLKeys={{
                      key: "AIzaSyDTZQ9gsIrh6G2_HtnX7pTgFS74G_VVedU",
                      version: "weekly",
                    }}
                    // defaultCenter={coordinates}
                    // center={coordinates} 
                    defaultCenter={DEMO_EXPERIENCES[0].map}
                    defaultZoom={12}
                    yesIWantToUseGoogleMapApiInternals
                    // margin={[50,50,50,50]}
                    // onChange={(e:any) => {
                    //     // console.log(e);
                    //     // onChange Event sets new Coordinates for Google Map Component
                    //     setCoordinates({ lat: e.center.lat, lng: e.center.lng })
                    //     // onChange Event sets new Bounds for Google Map Component
                    //     setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
                    // }}
                    // onChildClick={() => {}}\
                    
                >
                  {DEMO_EXPERIENCES.map((item) => (
                    <AnyReactComponent
                      isSelected={currentHoverID === item.id}
                      key={item.id}
                      lat={item.map.lat}
                      lng={item.map.lng}
                      listing={item}
                    />
                    ))}
                </GoogleMapReact>
            </div>
        </div>
  );
}

export default MainMap;