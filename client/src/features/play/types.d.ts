declare module "MyModels" {
    export type Option = {
        correct: boolean
        correctIndex: 0 | 1 | 2 | 3
    }

    export type Answer = {
        text: string
    }

    export type Question = string
}
