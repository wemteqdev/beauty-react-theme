import * as types from "./types";

export function hoverCardItem(items) {
    return {
        type: types.ON_HOVER_ITEM,
        items:items
    }
}

export function saveSearchResult(items) {
    return {
        type: types.SAVE_SERCH_RESULT,
        items:items
    }
}