declare module "MyModels" {
    export type ButtonIndex = 0 | 1 | 2 | 3

    export type Option = {
        success: boolean
        indexCorrect: ButtonIndex
    }

    export type Answer = {
        text: string
    }

    export type Question = string
}
