class Accordion{
    constructor (summaryText, detailsBody){
        this.detailsBody = JSON.stringify(detailsBody)
        this.summaryText = summaryText
        this.element = null

        this.generate()
    }

    generate() {
        const detailsElement = document.createElement('details')
        const summaryElement = document.createElement('summary')
        detailsElement.append(summaryElement)
        summaryElement.append(this.summaryText)
        detailsElement.append(this.detailsBody)

        this.element = detailsElement
    }

    appendTo(parentElement) {
        parentElement.append(this.element)
    }

    getElement(){
        return this.element
    }

    toString() {
        return this.summaryText
    }
}