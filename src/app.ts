import Router from "./core/router";
import { NewsfeedView, NewsDetailView } from "./page";
import { Store } from "./store";

const store = new Store();

const router: Router = new Router();
const newsFeedView = new NewsfeedView("root", store);
const newsDetailView = new NewsDetailView("root", store);

router.setDefaultPage(newsFeedView);
router.addRoutePath("/page/", newsFeedView, /page\/(\d+)/);
router.addRoutePath("/show/", newsDetailView, /show\/(\d+)/);
