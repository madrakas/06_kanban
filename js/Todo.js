export class Todo { 
    constructor(selector, columns) {
        this.selector = selector;
        this.columns = columns;
        this.DOM = null;

        this.init();
    }

    init() {
        const err = this.updateDOMElement();
        if (typeof err === 'string') {
            return console.error(err);
        }
        this.render();
    }

    updateDOMElement() {
        if (typeof this.selector !== 'string' ||this.selector === '') {
            // throw new Error('Netinkamas selektorius'); grubus stabdymas
           return 'Netinkamas selektorius';
        }
        this.DOM = document.querySelector(this.selector);
    }

    render() {
        let HTML = '';

        for (const column of this.columns) {
            HTML += `
            <div>
                <h2>${column}</h2>
                <ul>
                    <li>Task</li>
                    <li>Task</li>
                    <li>Task</li>
                    <li>Task</li>
                </ul>
            </div>`;
        }
        this.DOM.classList.add('todo');
        this.DOM.innerHTML = HTML;
        this.DOM.style.gridTemplateColumns = `repeat(${this.columns.length}, 1fr)`;
    }
 };