import React from 'react'
import { useState, useEffect } from "react";


const TableauEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    script.async = true;

    const vizElement = document.getElementById("viz1747362225837");
    const vizObject = vizElement.getElementsByTagName("object")[0];
    vizObject.style.width = "1600px";
    vizObject.style.height = "950px";

    vizElement.appendChild(script);

    return () => {
      vizElement.removeChild(script);
    };
  }, []);

  return (
    <div
      className="tableauPlaceholder"
      id="viz1747362225837"
      style={{ position: "relative" }}
    >
      <noscript>
        <a href="#">
          <img
            alt="Tableau Visualization"
            src="https://public.tableau.com/static/images/IV/IV2025FinalDashboard-KathrynMcCrindle-WildlifeStrikes/Home/1_rss.png"
            style={{ border: "none" }}
          />
        </a>
      </noscript>
      <object className="tableauViz" style={{ display: "none" }}>
        <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
        <param name="embed_code_version" value="3" />
        <param name="site_root" value="" />
        <param name="name" value="IV2025FinalDashboard-KathrynMcCrindle-WildlifeStrikes/Home" />
        <param name="tabs" value="yes" />
        <param name="toolbar" value="yes" />
        <param name="static_image" value="https://public.tableau.com/static/images/IV/IV2025FinalDashboard-KathrynMcCrindle-WildlifeStrikes/Home/1.png" />
        <param name="animate_transition" value="yes" />
        <param name="display_static_image" value="yes" />
        <param name="display_spinner" value="yes" />
        <param name="display_overlay" value="yes" />
        <param name="display_count" value="yes" />
        <param name="language" value="en-US" />
      </object>
    </div>
  );
};

export default TableauEmbed;