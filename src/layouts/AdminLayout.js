import React from "react";
import { useEffect } from "react";

import script2 from "./admin-assets/plugins/jquery-ui/jquery-ui.min.js";
import script3 from "./admin-assets/plugins/bootstrap/js/bootstrap.bundle.min.js";
import script4 from "./admin-assets/plugins/chart.js/Chart.min.js";
import script5 from "./admin-assets/plugins/sparklines/sparkline.js";
import script6 from "./admin-assets/plugins/jqvmap/jquery.vmap.min.js";
import script7 from "./admin-assets/plugins/jqvmap/maps/jquery.vmap.usa.js";
import script8 from "./admin-assets/plugins/jquery-knob/jquery.knob.min.js";
import script9 from "./admin-assets/plugins/moment/moment.js";
import script10 from "./admin-assets/plugins/daterangepicker/daterangepicker.js";
import script11 from "./admin-assets/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js";
import script12 from "./admin-assets/plugins/summernote/summernote-bs4.min.js";
import script13 from "./admin-assets/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js";
import script14 from "./admin-assets/dist/js/adminlte.js";
import script15 from "./admin-assets/dist/js/demo.js";
import script16 from "./admin-assets/dist/js/pages/dashboard.js";

import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  useEffect(() => {
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");
    const script3 = document.createElement("script");
    const script4 = document.createElement("script");
    const script5 = document.createElement("script");
    const script6 = document.createElement("script");
    const script7 = document.createElement("script");
    const script8 = document.createElement("script");
    const script9 = document.createElement("script");
    const script10 = document.createElement("script");
    const script11 = document.createElement("script");
    const script12 = document.createElement("script");
    const script13 = document.createElement("script");
    const script14 = document.createElement("script");
    const script15 = document.createElement("script");
    const script16 = document.createElement("script");

    script1.src = "%PUBLIC_URL%/plugins/bootstrap/js/bootstrap.bundle.min.js";
    script2.src = "%PUBLIC_URL%/plugins/chart.js/Chart.min.js";
    script3.src = "%PUBLIC_URL%/plugins/sparklines/sparkline.js";
    script4.src = "%PUBLIC_URL%/plugins/jqvmap/jquery.vmap.min.js";
    script5.src = "%PUBLIC_URL%/plugins/jqvmap/maps/jquery.vmap.usa.js";
    script6.src = "%PUBLIC_URL%/plugins/jquery-knob/jquery.knob.min.js";
    script7.src = "%PUBLIC_URL%/plugins/moment/moment.min.js";
    script8.src = "%PUBLIC_URL%/plugins/daterangepicker/daterangepicker.js";
    script9.src = "%PUBLIC_URL%/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js";
    script10.src = "%PUBLIC_URL%/plugins/summernote/summernote-bs4.min.js";
    script11.src = "%PUBLIC_URL%/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js";
    script12.src = "%PUBLIC_URL%/dist/js/adminlte.js";
    script13.src = "%PUBLIC_URL%/dist/js/demo.js";
    script14.src = "%PUBLIC_URL%/dist/js/pages/dashboard.js";
    script15.src = "%PUBLIC_URL%/plugins/jquery/jquery.min.js";
    script16.src = "%PUBLIC_URL%/plugins/jquery-ui/jquery-ui.min.js";

    document.body.appendChild(script15);
    document.body.appendChild(script16);
    document.body.appendChild(script1);
    document.body.appendChild(script2);
    document.body.appendChild(script3);
    document.body.appendChild(script4);
    document.body.appendChild(script5);
    document.body.appendChild(script6);
    document.body.appendChild(script7);
    document.body.appendChild(script8);
    document.body.appendChild(script9);
    document.body.appendChild(script10);
    document.body.appendChild(script11);
    document.body.appendChild(script12);
    document.body.appendChild(script13);
    document.body.appendChild(script14);

    return () => {
      document.body.removeChild(script15);
      document.body.removeChild(script16);
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.body.removeChild(script3);
      document.body.removeChild(script4);
      document.body.removeChild(script5);
      document.body.removeChild(script6);
      document.body.removeChild(script7);
      document.body.removeChild(script8);
      document.body.removeChild(script9);
      document.body.removeChild(script10);
      document.body.removeChild(script11);
      document.body.removeChild(script12);
      document.body.removeChild(script13);
      document.body.removeChild(script14);
    };
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
}
