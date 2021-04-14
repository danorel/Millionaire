import { UserChoice } from "MyModels"

// A mock function to mimic making an async request for data
export function fetchAction(arg: UserChoice) {
    return new Promise<{ data: UserChoice }>((resolve) =>
        setTimeout(
            () =>
                resolve({
                    data: {
                        success: arg.success,
                        indices: arg.indices
                    }
                }),
            2000
        )
    )
}
