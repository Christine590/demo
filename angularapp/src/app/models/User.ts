//加上export以使此介面可在其他檔案被呼叫
//加上?表示該值可有可無
export interface User {
    firstName: string,
    lastName: string,
    age?: number,
    email: string,
    // address?: {
    //   street: string,
    //   city: string,
    //   state: string
    // },

    // image?: string,
    isActive?: boolean,
    // balance?: number,
    registered?: any,
    hide?: boolean
}
