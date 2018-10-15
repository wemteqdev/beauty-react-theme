import * as types from "./types";

export function clickCloseBtn(alerts) {
    return {
        type: types.CLICK_SEARCH_BAR,
        alerts:alerts
    }
}