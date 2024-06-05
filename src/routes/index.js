import Collection from "../pages/Collection";
import ContactUs from "../pages/ContactUs";
import Dashboard from "../pages/Dashboard";
import WishList from "../pages/WishList";
import { constRoute } from "../utility/constRoute";

const AllRoutes = [
    { path: constRoute.exact, component: Dashboard },
    { path: constRoute.dashboard, component: Dashboard },
    { path: constRoute.collection, component: Collection },
    { path: constRoute.wishList, component: WishList },
    { path: constRoute.contactUs, component: ContactUs },
]

export default AllRoutes