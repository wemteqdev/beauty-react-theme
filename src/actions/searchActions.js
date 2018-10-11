import * as types from "./types";

export function clickSearchBar() {
    return {
        type: types.CLICK_SEARCH_BAR
    }
}

export function outclickSearchBar() {
    return {
        type: types.OUT_CLICK_SEARCH_BAR
    }
}

export function clickCategory(cateogry) {
    return {
        type: types.CLICK_CATEGORY,
        activeCategory:cateogry
    }
}

export function changeFocus(focus) {
    return {
        type: types.CHANGE_FOCUS,
        focus:focus
    }
}

export function typeSearchQuery(query) {
    return {
        type: types.TYPING_SEARCH_QUERY,
        query:query
    }
}

export function updateSearchedResult(result) {
    return {
        type: types.UPDATE_SEARCHED_RESULT,
        result:result
    }
}

export function saveRecentSearechResult(result) {
    return {
        type: types.SAVE_RECENT_SEARCH_RESULT,
        result:result
    }
}

export function selectSearchedItem(title) {
    return {
        type: types.SELECT_SEARCHED_ITEM,
        title:title
    }
}

export function goSearchResult(query) {
    return {
        type: types.GO_SEARCH_RESULT,
    }
}

export function changeFilterOption(option) {
    return {
        type:types.CHANAGE_SEARCH_FITLER_OTPTION,
        option:option
    }
}

export function outclickFilterPanel(panelname) {
    return {
        type:types.OUT_CLICK_FILER_PANEL,
        panelname:panelname
    }
}

export function changeNewsFilterOption(option) {
    return {
        type:types.CHANAGE_SEARCH_NEWS_FITLER_OTPTION,
        option:option
    }
}

                
