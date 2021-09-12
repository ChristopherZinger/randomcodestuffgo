import Header from './components/header'
import HeaderSubmenu from './components/headerSubmenu'
import HeaderDarkMode from './components/headerDarkMode'
import Accordion from './components/accordion'
import LocationNavigation from './components/locationNavigation'
import Gist from './components/gist'
import SelectableCategories from './components/selectableCategories'
import PageSeries from './components/pageSeries'
import { seriesSlider } from './components/seriesSlider'

// todo : document on load

seriesSlider()

new Accordion()
new Header()
new HeaderSubmenu()
new HeaderDarkMode()
new LocationNavigation()
new PageSeries()
new SelectableCategories()
new Gist()

