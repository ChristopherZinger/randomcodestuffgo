import Header from './components/header'
import HeaderSubmenu from './components/headerSubmenu'
import HeaderDarkMode from './components/headerDarkMode'
import Accordion from './components/accordion'
import LocationNavigation from './components/locationNavigation'
import Gist from './components/gist'
import PageSeries from './components/pageSeries'
import { categorySlider } from './components/categorySlider'
import { latestPostsSlider } from './components/latestPostsSlider'
import { init } from './utils'
import { selectedPostsSlider } from './components/selectedPostsSlider'

// todo : document on load
init(() => {
    categorySlider()
    latestPostsSlider()
    selectedPostsSlider()

    new Accordion()
    new Header()
    new HeaderSubmenu()
    new HeaderDarkMode()
    new LocationNavigation()
    new PageSeries()
    new Gist()
})
