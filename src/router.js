import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const DefaultLayout = lazy(() => import("./layouts/DefaultLayout"));
const AircoverForHosts = lazy(() => import("./components/body/AirCoverForHost/AircoverForHosts"));
const BestHost = lazy(() => import("./components/body/BestHost/BestHost"));
const ProfileDetail = lazy(() => import("./components/body/profile/ProfileDetail"));

const AdminLayout = lazy(() => import("layouts/AdminLayout"));
const Dashboard = lazy(() => import("./views/dashboard/Dashboard"));
const Colors = lazy(() => import("./views/theme/colors/Colors"));
const Typography = lazy(() => import("./views/theme/typography/Typography"));

// Base
const Accordion = lazy(() => import("./views/base/accordion/Accordion"));
const Breadcrumbs = lazy(() => import("./views/base/breadcrumbs/Breadcrumbs"));
const Cards = lazy(() => import("./views/base/cards/Cards"));
const Carousels = lazy(() => import("./views/base/carousels/Carousels"));
const Collapses = lazy(() => import("./views/base/collapses/Collapses"));
const ListGroups = lazy(() => import("./views/base/list-groups/ListGroups"));
const Navs = lazy(() => import("./views/base/navs/Navs"));
const Paginations = lazy(() => import("./views/base/paginations/Paginations"));
const Placeholders = lazy(() => import("./views/base/placeholders/Placeholders"));
const Popovers = lazy(() => import("./views/base/popovers/Popovers"));
const Progress = lazy(() => import("./views/base/progress/Progress"));
const Spinners = lazy(() => import("./views/base/spinners/Spinners"));
const Tables = lazy(() => import("./views/base/tables/Tables"));
const Tooltips = lazy(() => import("./views/base/tooltips/Tooltips"));

// Buttons
const Buttons = lazy(() => import("./views/buttons/buttons/Buttons"));
const ButtonGroups = lazy(() => import("./views/buttons/button-groups/ButtonGroups"));
const Dropdowns = lazy(() => import("./views/buttons/dropdowns/Dropdowns"));

//Forms
const ChecksRadios = lazy(() => import("./views/forms/checks-radios/ChecksRadios"));
const FloatingLabels = lazy(() => import("./views/forms/floating-labels/FloatingLabels"));
const FormControl = lazy(() => import("./views/forms/form-control/FormControl"));
const InputGroup = lazy(() => import("./views/forms/input-group/InputGroup"));
const Layout = lazy(() => import("./views/forms/layout/Layout"));
const Range = lazy(() => import("./views/forms/range/Range"));
const Select = lazy(() => import("./views/forms/select/Select"));
const Validation = lazy(() => import("./views/forms/validation/Validation"));

const Charts = lazy(() => import("./views/charts/Charts"));

// Icons
const CoreUIIcons = lazy(() => import("./views/icons/coreui-icons/CoreUIIcons"));
const Flags = lazy(() => import("./views/icons/flags/Flags"));
const Brands = lazy(() => import("./views/icons/brands/Brands"));

// Notifications
const Alerts = lazy(() => import("./views/notifications/alerts/Alerts"));
const Badges = lazy(() => import("./views/notifications/badges/Badges"));
const Modals = lazy(() => import("./views/notifications/modals/Modals"));
const Toasts = lazy(() => import("./views/notifications/toasts/Toasts"));

const Widgets = lazy(() => import("./views/widgets/Widgets"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    exact: true,
    children: [
      {
        path: "/",
        element: <Home />,
        exact: true,
      },
      {
        path: "/aircover-for-hosts",
        element: <AircoverForHosts />,
        exact: true,
      },
      {
        path: "/best-host",
        element: <BestHost />,
        exact: true,
      },
      {
        path: "/profile",
        element: <ProfileDetail />,
        exact: true,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "/admin/dashboard", name: "Dashboard", element: <Dashboard/> },
      { path: "/admin/theme", name: "Theme", element: <Colors/>, exact: true },
      { path: "/admin/theme/colors", name: "Colors", element: <Colors/> },
      { path: "/admin/theme/typography", name: "Typography", element: <Typography/> },
      { path: "/admin/base", name: "Base", element: <Cards/>, exact: true },
      { path: "/admin/base/accordion", name: "Accordion", element: <Accordion/> },
      { path: "/admin/base/breadcrumbs", name: "Breadcrumbs", element: <Breadcrumbs/> },
      { path: "/admin/base/cards", name: "Cards", element: <Cards/> },
      { path: "/admin/base/carousels", name: "Carousel", element: <Carousels/> },
      { path: "/admin/base/collapses", name: "Collapse", element: <Collapses/> },
      { path: "/admin/base/list-groups", name: "List Groups", element: <ListGroups/> },
      { path: "/admin/base/navs", name: "Navs", element: <Navs/> },
      { path: "/admin/base/paginations", name: "Paginations", element: <Paginations/> },
      { path: "/admin/base/placeholders", name: "Placeholders", element: <Placeholders/> },
      { path: "/admin/base/popovers", name: "Popovers", element: <Popovers/> },
      { path: "/admin/base/progress", name: "Progress", element: <Progress/> },
      { path: "/admin/base/spinners", name: "Spinners", element: <Spinners/> },
      { path: "/admin/base/tables", name: "Tables", element: <Tables/> },
      { path: "/admin/base/tooltips", name: "Tooltips", element: <Tooltips/> },
      { path: "/admin/buttons", name: "Buttons", element: <Buttons/>, exact: true },
      { path: "/admin/buttons/buttons", name: "Buttons", element: <Buttons/> },
      { path: "/admin/buttons/dropdowns", name: "Dropdowns", element: <Dropdowns/> },
      { path: "/admin/buttons/button-groups", name: "Button Groups", element: <ButtonGroups/> },
      { path: "/admin/charts", name: "Charts", element: <Charts/> },
      { path: "/admin/forms", name: "Forms", element: <FormControl/>, exact: true },
      { path: "/admin/forms/form-control", name: "Form Control", element: <FormControl/> },
      { path: "/admin/forms/select", name: "Select", element: <Select/> },
      { path: "/admin/forms/checks-radios", name: "Checks & Radios", element: <ChecksRadios/> },
      { path: "/admin/forms/range", name: "Range", element: <Range/> },
      { path: "/admin/forms/input-group", name: "Input Group", element: <InputGroup/> },
      { path: "/admin/forms/floating-labels", name: "Floating Labels", element: <FloatingLabels/> },
      { path: "/admin/forms/layout", name: "Layout", element: <Layout/> },
      { path: "/admin/forms/validation", name: "Validation", element: <Validation/> },
      { path: "/admin/icons", exact: true, name: "Icons", element: <CoreUIIcons/> },
      { path: "/admin/icons/coreui-icons", name: "CoreUI Icons", element: <CoreUIIcons/> },
      { path: "/admin/icons/flags", name: "Flags", element: <Flags/> },
      { path: "/admin/icons/brands", name: "Brands", element: <Brands/> },
      { path: "/admin/notifications", name: "Notifications", element: <Alerts/>, exact: true },
      { path: "/admin/notifications/alerts", name: "Alerts", element: <Alerts/> },
      { path: "/admin/notifications/badges", name: "Badges", element: <Badges/> },
      { path: "/admin/notifications/modals", name: "Modals", element: <Modals/> },
      { path: "/admin/notifications/toasts", name: "Toasts", element: <Toasts/> },
      { path: "/admin/widgets", name: "Widgets", element: <Widgets/> },
    ],
  },
]);

export default router;
