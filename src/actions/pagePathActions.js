import * as types from "./types";

export function transToPath(path) {
    return {
        type: types.CHANGE_PAGE_PATH,
        path:path
    }
}