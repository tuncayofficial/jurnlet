import { type RouteConfig, index } from "@react-router/dev/routes";
import { route } from "@react-router/dev/routes"

export default [
    index("routes/home.tsx"),
    route('/library/:word', "routes/Library.tsx"),
    route('/library', "routes/LibrarySearcher.tsx"),
    route('/404_not_found', "routes/SearchError.tsx")
] satisfies RouteConfig;
