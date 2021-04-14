import { UserChoice, ButtonIndex } from "MyModels"

// A mock function to mimic making an async request for data
export function fetchAction(success: boolean, indexCorrect: ButtonIndex) {
    return new Promise<{ data: UserChoice }>((resolve) =>
        setTimeout(
            () =>
                resolve({
                    data: {
                        success: success,
                        indexCorrect: indexCorrect
                    }
                }),
            2000
        )
    )
}
