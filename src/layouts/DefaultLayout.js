import React from "react";
import {Outlet} from "react-router-dom";
import { useState, useEffect } from "react";

export default function DefaultLayout() {


  return (
    <div>
      <Outlet />
    </div>
  );
}
