import Button from './button'
import Radio from './radio'
import RadioGroup from './radio-group'
import Input from './input'
import './fonts/font.scss'

const components = [
  Button,
  Radio,
  RadioGroup,
  Input
]

const install = function (Vue) {
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
