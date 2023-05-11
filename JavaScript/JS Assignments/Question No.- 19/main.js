//19. Create a countries.js file and store the countries name into this file, create a file web_techs.js and store the popular web technology names into this file. Access both file in a third file named main.js

import {countries} from "./countries.js"
import {web_technology} from "./web_techs.js"

document.body.innerHTML = [countries, web_technology ]