
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Positions");
    }

    async getHtml() {
        return `
            <form action="/sign"></form>
        `;
    }
}
