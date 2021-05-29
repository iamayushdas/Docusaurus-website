import { HasFormatter } from "../interfaces/HasFormatter";

// classes
export class Invoice implements HasFormatter {
    constructor(
        readonly client: string,
        public details: string,
        private amount: number,
    ){}

    format() {
        return `${this.client} owers $${this.amount} for ${this.details}`
    }
}