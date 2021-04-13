// A mock function to mimic making an async request for data
import { Option } from "MyModels"

export function fetchAction(index: number) {
    return new Promise<{ data: Option }>((resolve) =>
        setTimeout(
            () =>
                resolve({
                    data: {
                        success: index === 0,
                        indexCorrect: 0
                    }
                }),
            2000
        )
    )
}
