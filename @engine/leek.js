class Leek {
    constructor(target) {
        // target => document.getElementById('app')
        // leekObj => `<p>${こいつw}</p>`
        this.DOM = target;
    }

    html(text, ...vars) {
        // 交互
        // Leek.render`<p>${wars}</p>`;
        let re = '';
        let ar = this.assign(text, vars);
        for (let i = 0; i < ar.length; i++) {
            re += ar[i];
        }
        console.log(re)
        return re;
    }

    render(components) {
        this.DOM.innerHTML = components;
    } // DOMにレンダリング

    assign(a, b) {
        const result = [];
        const maxLength = Math.max(a.length, b.length);



        for (let i = 0; i < maxLength; i++) {
            if (i < a.length) {
                result.push(a[i]);
            }
            if (i < b.length) {
                result.push(b[i]);
            }
        }


        return result;
    }

    event(func, event) {
        return `${func}`
    }
}