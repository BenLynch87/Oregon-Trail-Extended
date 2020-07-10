document.getElementById('wagon').addEventListener('click', function(){
    let currWagon = new Accordion('Wagon', wagon)
    currWagon.appendTo(document.querySelector('main'))
})