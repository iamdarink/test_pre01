"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Loader } from "@googlemaps/js-api-loader";

type Props = {};

const GoogleMap = (props: Props) => {
  const mapRef = React.useRef(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: "AIzaSyDE1y1JQ-dqMMO1MgE5iWRFcEiCwdiG88k",
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");

      const { Marker } = (await loader.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      // ระบุละติจูด-ลองติจูด
      const position = {
        lat: 13.799963220483214,
        lng: 100.57500504248773,
      };

      // ใช้เพื่อแสดงระยะห่าง
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 19,
        mapId: "MY_NEXTJS_MAPID",
      };

      const map = new Map(
        mapRef.current as unknown as HTMLDivElement,
        mapOptions
      );

      // put up marker
      const marker = new Marker({
        map: map,
        position: position,
      });
    };

    initMap();
  }, []);
  return (
    <div className="w-full p-[10px]">
      <div
        className="w-full md:w-full lg:w-full h-[365px] rounded-lg bg-cover bg-center"
        ref={mapRef}
      />
    </div>
  );
};

export default GoogleMap;