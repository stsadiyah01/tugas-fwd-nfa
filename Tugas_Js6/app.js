import { UserController } from "./controller.js";
import { UserView } from "./view.js";

document.addEventListener("DOMContentLoaded",()=> {
    const view = new UserView();
    const controller = new UserController(view);

    // tampilan data awal
    view.tampilkanData(controller.getUsers(),controller);

    view.bindTambah(controller);
    view.bindHapusSemua(controller);
    view.bindForm(controller);
});