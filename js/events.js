try {
  loadEvents()
} catch(e) {
  $('#upcoming-workshops').html('Could not load events, sorry!')
  $('#map').css({"background-size": "100%", "background-image": "url(images/hero.jpg)"})
}

function loadEvents() {
  var URL = "https://docs.google.com/spreadsheets/d/1hz0k15oAD61_r89zBmB7VHcVuath1fjQVFHibmChXBI/pubhtml"
  Tabletop.init({key: URL, callback: showNearEvents, simpleSheet: true})
}

function showNearEvents(data) {
  writeCount(data.length)
  generateCalendar(data)
  makeMap(data)
  var html = Sheetsee.ich.events({
      'rows': sortDates(data)
    })
  $('#upcoming-workshops').html(html)
}

function writeCount(count) {
  $('#event-count').html(count)
}
