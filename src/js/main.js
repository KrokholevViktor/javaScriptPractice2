import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import chekTextInputs from "./modules/chekTextInputs";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    modals();
    forms();
    mask('[name="phone"]');
    chekTextInputs('[name="name"]');
    chekTextInputs('[name="message"]');
})